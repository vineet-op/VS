import React from 'react';
import { Handle } from 'reactflow';

const InputNode = ({ data }) => {
    return (
        <div className="bg-purple-200 border border-purple-400 rounded-md p-2 text-sm w-36 h-20">
            <div className="text-center mb-1">
                <strong>{data.label}</strong>
            </div>
            <div className="text-xs">
                Name: {data.name || 'Unnamed'}
            </div>
            <div className="text-xs">
                Type: {data.type || 'Text'}
            </div>

            <Handle
                type="source"
                position="right"
                id="output"
                className="bg-purple-600 w-2 h-2"
            />
            <Handle
                type="target"
                position="left"
                id="input"
                className="bg-purple-600 w-2 h-2"
            />
        </div>
    );
};

export default InputNode;
