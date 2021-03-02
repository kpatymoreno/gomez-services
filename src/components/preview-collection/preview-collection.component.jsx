import React from 'react';
import './preview-collection.styles.scss';

const PreviewCollection = ({title, items}) => (
    <div className = 'PreviewCollection'>
        <h1 className = 'Title'>{title.toUpperCase()}</h1>
        <div className = 'Preview'>
            {items.map(item => (
                <div key = {item.id}>{item.name}</div>
            ))}
        </div>
    </div>
);

export default PreviewCollection;