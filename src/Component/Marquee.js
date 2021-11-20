
import './Marquee.css';
import styled from 'styled-components';

const LeftSpan = styled.div`
  display: block;
  width: 200%;
  height: 30px;
  position: absolute;
  overflow: hidden;
  color: white;
  font-family: "Bungee";
  font-size: 2vmin;
  animation: marquee 20s linear infinite reverse;
`
const RightSpan = styled.div`
  display: block;
  width: 200%;
  height: 30px;
  position: absolute;
  overflow: hidden;
  color: white;
  font-family: "Bungee";
  font-size: 2vmin;
  animation: marquee 20s linear infinite;
  animation-delay: 2s;
`

const Marquee = props => {

  const LeftText = (text) => {
    return (
      <LeftSpan>
        <span>{text}{text}</span>
        <span>{text}{text}</span>
      </LeftSpan>
    )
  }

  const RightText = (text) => {
    return (
      <RightSpan>
        <span>{text}{text}</span>
        <span>{text}{text}</span>
      </RightSpan>
    )
  }

  const SpanText = (isRight, text) => {
    if (isRight) {
      return RightText(text)
    } else {
      return LeftText(text)
    }
  }

  return (
    <div className="marquee">
      {SpanText(props.isRight, props.text)}
    </div>
  );
}

export default Marquee;