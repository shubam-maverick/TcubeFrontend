import React from 'react';
import './style.css';

 const Card = (props:any) =>{
return(
        <div className= {`card ${ props.classes }`} >
        {props.children}
        </div>
        )
}
export default Card;