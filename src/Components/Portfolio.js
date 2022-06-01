import React from 'react';
import "../styles/Portfolio.css";



function List(props){
    return(
        <ul>
            {props.projects.map( item => (
                <li key={item.id}>
                    {item.title}
                </li>
            ))}
        </ul>
    )
}

export default List;