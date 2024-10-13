from fastapi import FastAPI, HTTPException
from fastapi.responses import JSONResponse
from collections import defaultdict

app = FastAPI()

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
async def parse_pipeline(nodes: list, edges: list):
    # Validate input
    if not isinstance(nodes, list) or not isinstance(edges, list):
        raise HTTPException(status_code=400, detail="Nodes and edges must be lists.")

    num_nodes = len(nodes)
    num_edges = len(edges)

    # Function to check if the graph is a DAG using Kahn's Algorithm
    def is_dag(nodes, edges):
        in_degree = defaultdict(int)
        graph = defaultdict(list)

        # Build the graph and compute in-degrees
        for edge in edges:
            start, end = edge['source'], edge['target']
            graph[start].append(end)
            in_degree[end] += 1
            if start not in in_degree:
                in_degree[start] = 0

        # Kahn's algorithm to check for cycles
        queue = [node for node in nodes if in_degree[node] == 0]
        count = 0

        while queue:
            node = queue.pop(0)
            count += 1
            for neighbor in graph[node]:
                in_degree[neighbor] -= 1
                if in_degree[neighbor] == 0:
                    queue.append(neighbor)

        return count == len(nodes)  # If count == number of nodes, it is a DAG

    is_dag_result = is_dag(nodes, edges)

    return JSONResponse(content={'num_nodes': num_nodes, 'num_edges': num_edges, 'is_dag': is_dag_result})
