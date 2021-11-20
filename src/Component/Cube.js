import React, { useRef, useEffect } from 'react'
import './Cube.css'

const Cube = () => {
  return (
    <div class="wrapper" style={{ top: '-10%' }}>
      <div class="cube">
        <b class="front">OutBlock</b>
        <b class="back"></b>
        <b class="top"></b>
        <b class="bottom"></b>
        <b class="left"></b>
        <b class="right"></b>
      </div>
    </div>
  );
}

export default Cube;