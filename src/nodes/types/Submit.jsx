export const Submit = () => {

    const handleSubmit = async ({ nodes, edges }) => {

        const payload = {
            nodes: nodes,
            edges: edges,
        };

        try {
            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json();
            alert(`Number of Nodes: ${result.num_nodes}\nNumber of Edges: ${result.num_edges}\nIs DAG: ${result.is_dag}`);
        } catch (error) {
            console.error('Error submitting pipeline:', error);
            alert('Error submitting pipeline. Please try again.');
        }
    }

    return <div className="p-4 bg-transparent   absolute bottom-0 flex justify-center w-1/2 rounded-lg">
        <button onClick={handleSubmit} className="bg-gray-800 mb-10  text-white py-2 px-4 rounded-lg">
            Submit
        </button>
    </div>;
}

export default Submit;

