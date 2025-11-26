// calculator_os.mjs — WORKS INSTANTLY
(() => {
  const style = `
    position:fixed;
    inset:0;
    background:#000;
    color:#0f0;
    font-family:monospace;
    font-size:72px;
    display:grid;
    place-items:center;
    text-shadow:0 0 40px #0f0;
    border:6px solid #0f0;
    box-shadow:0 0 100px #0f0;
    z-index:99999;
  `;

  const html = `
    <div style="${style}">
      <div>CALCULATOR</div>
      <div style="font-size:36px;margin-top:40px;opacity:0.8">LATTICE AWAKE</div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', html);
})();