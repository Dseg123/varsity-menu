import React, { useState } from 'react'

const MenuItem = function(props) {
  return (
    <button className={`menu-item ${props.selected ? "selected" : ""}`} 
      onClick={() => {props.update(props.obj)}}>
      <img src={props.picture} alt={props.name} />
      <dt>{props.name}</dt>
      <dd>{props.price}</dd>
    </button>
  );
}
  
export default MenuItem
