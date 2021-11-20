import React, { useRef, useEffect } from 'react'
import './Cube.css'

const Cube = () => {
  return (
    <div className="wrapper" style={{ top: '-10%' }}>
      <div className="cube">
        <b className="front">OutBlock</b>
        <b className="back"></b>
        <b className="top"></b>
        <b className="bottom"></b>
        <b className="left"></b>
        <b className="right"></b>
      </div>
    </div>
  );
}

export default Cube;