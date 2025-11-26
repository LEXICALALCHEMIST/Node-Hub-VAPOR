// calculator_os.mjs
export default function CalculatorSkin() {
  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      background: '#000',
      color: '#0f0',
      border: '3px solid #0f0',
      padding: '60px 100px',
      fontSize: '48px',
      fontFamily: 'monospace',
      textAlign: 'center',
      boxShadow: '0 0 40px #0f0',
      textShadow: '0 0 20px #0f0'
    }}>
      Calculator
      <div style={{fontSize:'24px', marginTop:'20px', opacity:0.7}}>
        Lattice online
      </div>
    </div>
  );
}