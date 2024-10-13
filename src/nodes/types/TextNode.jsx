// src/nodes/types/TextNode.js
import React from 'react';
import BaseNode from '../base/BaseNode';

const TextNode = (props) => {
    const inputHandles = [{ position: 'top' }];
    const outputHandles = [{ position: 'bottom' }];

    const data = {
        label: 'Text Node',
        content: 'This is a text-processing node.',
    };

    return <BaseNode {...props} type="text" data={data} inputHandles={inputHandles} outputHandles={outputHandles} />;
};

export default TextNode;
