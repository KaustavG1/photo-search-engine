import React from 'react';
import './ResultListItem.css';

function ResultListItem(props) {
    return (<div className="photo-item">
        <img src={props.imageURL} width="200" height="200" alt={props.desc}/>
    </div>);
}

export default ResultListItem;