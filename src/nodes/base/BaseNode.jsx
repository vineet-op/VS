// src/nodes/base/BaseNode.js
import React from 'react';
import { Handle } from 'reactflow';

const BaseNode = ({ id, data, type, inputHandles, outputHandles }) => {
    return (
        <div className={`p-4 bg-white shadow-md border-2 border-gray-200 rounded-lg ${type === 'input' ? 'bg-blue-100' : type === 'output' ? 'bg-yellow-100' : type === 'llm' ? 'bg-green-100' : type === 'text' ? 'bg-cyan-200' : ''}`}>
            <div className="text-lg font-semibold mb-2 text-gray-800">{data.label}</div>
            <div className="space-y-2">
                {/* Render input handles */}
                {inputHandles?.map((handle, index) => (
                    <Handle key={index} type="target" position={handle.position} className="bg-cyan-500" />
                ))}

                {/* Custom content area */}
                <div className="p-2 bg-gray-50 rounded-md">
                    {data.content}
                </div>

                {/* Render output handles */}
                {outputHandles?.map((handle, index) => (
                    <Handle key={index} type="source" position={handle.position} className="bg-blue-500" />
                ))}
            </div>
        </div>
    );
};

export default BaseNode;
