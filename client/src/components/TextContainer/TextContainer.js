import React from 'react';
import './TextContainer.css';
const TextContainer = ({users}) => {
    return(
        <div className="textContainerShowUser">
            <h2 className="userhai">People Currently online</h2>
            <h2 className="greenUser">{users ? users.map(({name}) => (<div key={name}>{name}</div>) ): null}</h2>
        </div>
    )
    
} 

export default TextContainer;
