// calculator_os.js — minimal test organism
// Only shows "Calculator" text — nothing else

export const manifest = {
  name: "Calculator",
  version: "0.0.1",
  author: "LEXICALALCHEMIST"
};

export default function CalculatorSkin() {
  return (
    <div className="polygon-window">
      <div className="polygon-title">Calculator</div>
      <div style={{ textAlign: 'center', fontSize: '24px', opacity: 0.7 }}>
        Booting lattice...
      </div>
    </div>
  );
}

