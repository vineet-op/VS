import React, { useCallback } from 'react';
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,  // Use this hook for node state management
  useEdgesState
} from 'reactflow';

import InputNode from './nodes/types/InputNode';
import LLMNode from './nodes/types/LLMNode';
import OutputNode from './nodes/types/OutputNode';
import TextNode from './nodes/types/TextNode';

import 'reactflow/dist/style.css';
import Submit from './nodes/types/Submit';

const nodeTypes = {
  inputNode: InputNode,
  llmNode: LLMNode,
  outputNode: OutputNode,
  textNode: TextNode,
};

const initialNodes = [];
const initialEdges = [];

const App = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const edgeOptions = {
    style: { stroke: '#000', strokeDasharray: '5,5' },  // Dotted line style
  };

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const addNode = (type) => {
    const newNode = {
      id: `${nodes.length + 1}`,
      type,
      position: { x: Math.random() * 400, y: Math.random() * 400 },  // Randomized position
      data: { label: `${type} Node` },
    };
    setNodes((nds) => [...nds, newNode]);
  };

  return (
    <div className="h-screen flex flex-col items-center">
      <div className="flex space-x-4 mb-4">
        <button onClick={() => addNode('inputNode')} className="bg-gray-800 text-white py-2 px-4 rounded-lg">INPUT</button>
        <button onClick={() => addNode('llmNode')} className="bg-gray-800 text-white py-2 px-4 rounded-lg">LLM</button>
        <button onClick={() => addNode('outputNode')} className="bg-gray-800 text-white py-2 px-4 rounded-lg">OUTPUT</button>
        <button onClick={() => addNode('textNode')} className="bg-gray-800 text-white py-2 px-4 rounded-lg">TEXT</button>

      </div>
      <div className="w-full h-full bg-gray-50 rounded-lg shadow-md p-4">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          nodesDraggable={true}  // Ensure draggable nodes are enabled
          fitView
          style={{ height: '100vh' }}
          edgeTypes={edgeOptions}

        >
          <MiniMap />
          <Controls />
          <Background color="#aaa" gap={16} />
        </ReactFlow>

        <Submit nodes={nodes} edges={edges} />

      </div>
    </div>
  );
};

export default App;
