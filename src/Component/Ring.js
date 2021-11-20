
import './Ring.css';


const Ring = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', height: '40px', aspectRatio: '1/1' }}>
      <div className="ring first"></div>
      <div className="ring second"></div>
      <div className="ring third"></div>
    </div>
  )
}

export default Ring;