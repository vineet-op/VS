// src/nodes/types/OutputNode.js
import React from 'react';
import BaseNode from '../base/BaseNode';

const OutputNode = (props) => {
    const inputHandles = [{ position: 'left' }];
    const outputHandles = [];

    const data = {
        label: 'Output Node',
        content: 'This node accepts inputs.',
    };

    return <BaseNode {...props} type="output" data={data} inputHandles={inputHandles} outputHandles={outputHandles} />;
};

export default OutputNode;
