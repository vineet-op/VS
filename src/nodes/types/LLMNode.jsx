// src/nodes/types/LLMNode.js
import React from 'react';
import BaseNode from '../base/BaseNode';

const LLMNode = (props) => {
    const inputHandles = [{ position: 'left' }];
    const outputHandles = [{ position: 'right' }];

    const data = {
        label: 'LLM Node',
        content: 'This node represents an LLM process.',
    };

    return <BaseNode {...props} type="llm" data={data} inputHandles={inputHandles} outputHandles={outputHandles} />;
};

export default LLMNode;
