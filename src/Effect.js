import React, { useRef, useEffect } from 'react'
import UseWindowDimensions from './Dimension';

const Effect = (props) => {
  const canvasRef = useRef(null)

  var { width: innerWidth, height: innerHeight } = UseWindowDimensions();

  innerHeight = innerHeight - 118;

  const colors = [
    "#b4b2b5",
    "#dfd73f",
    "#6ed2dc",
    "#66cf5d",
    "#c542cb",
    "#d0535e",
    "#3733c9"
  ];

  const texts = (ctx, color) => {
    ctx.font = "20vmin Bungee Outline";
    ctx.shadowBlur = 30;
    ctx.shadowColor = color;
    ctx.fillStyle = color;
    ctx.setTransform(1, -0.15, 0, 1, 0, -10);
    ctx.fillText("Crypto", innerWidth / 2, innerHeight * 0.55 - 5);

    ctx.font = "8vmin Bungee Hairline";
    ctx.fillStyle = "color";
    ctx.fillText("Let's get", innerWidth / 2, innerHeight * 0.45 - 5);

    ctx.font = "20vmin Bungee Outline";
    ctx.fillStyle = "white";
    ctx.shadowBlur = 30;
    ctx.shadowColor = color;
    ctx.fillText("Crypto", innerWidth / 2, innerHeight * 0.55);

    ctx.font = "8vmin Bungee Hairline";
    ctx.fillStyle = "white";
    ctx.fillText("Let's get", innerWidth / 2, innerHeight * 0.45);

    ctx.font = "18vmin Bungee Inline";
    ctx.shadowBlur = 30;
    ctx.shadowColor = color;
    ctx.fillStyle = "#fff";
    ctx.setTransform(1, -0.15, 0, 1, 0, -10);
    ctx.fillText(
      "Outblock",
      innerWidth / 2,
      innerHeight * 0.65
    );

    ctx.font = "2.5vmax Bungee";
    ctx.shadowBlur = 30;
    ctx.shadowColor = "#00FF47";
    ctx.fillStyle = "#00FF47";
    ctx.setTransform(1, -0.15, 0, 1, 0, -10);
    ctx.fillText(
      "Follow us",
      innerWidth / 2,
      innerHeight * 0.9
    );

    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
  }

  const glitch = (ctx) => {
    ctx.fillStyle = "#1a191c";
    ctx.fillRect(0, 0, innerWidth, innerHeight);

    texts(ctx, colors[Math.floor(Math.random() * 7)]);
    ctx.shadowBlur = 0;
    ctx.shadowColor = "none";
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    for (let i = 0; i < 100; i++) {
      ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.01})`;
      ctx.fillRect(
        Math.floor(Math.random() * innerWidth),
        Math.floor(Math.random() * innerHeight),
        Math.floor(Math.random() * 30) + 1,
        Math.floor(Math.random() * 30) + 1
      );

      ctx.fillStyle = `rgba(0,0,0,${Math.random() * 0.1})`;
      ctx.fillRect(
        Math.floor(Math.random() * innerWidth),
        Math.floor(Math.random() * innerHeight),
        Math.floor(Math.random() * 25) + 1,
        Math.floor(Math.random() * 25) + 1
      );
    }

    ctx.fillStyle = colors[Math.floor(Math.random() * 40)];
    ctx.fillRect(
      Math.random() * innerWidth,
      Math.random() * innerHeight,
      Math.random() * innerWidth * 0.1,
      Math.random() * innerHeight * 0.1
    );
    // ctx.setTransform(1, 0, 0, .8, .2, 0);
  }

  useEffect(() => {
    const canvas = canvasRef.current
    canvas.width = innerWidth
    canvas.height = innerHeight
    const ctx = canvas.getContext('2d')
    let linePos = 0
    let rAF
    const render = () => {
      linePos++
      glitch(ctx)
      rAF = window.requestAnimationFrame(render)
    }
    render()
    return () => {
      window.cancelAnimationFrame(rAF)
    }
  }, [innerWidth, innerHeight]);

  return <canvas style={{ position: 'absolute', top: '0' }} ref={canvasRef} {...props} />
}

export default Effect