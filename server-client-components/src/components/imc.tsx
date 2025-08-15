'use client';

import React from 'react';

export default function IMC() {
  const [peso, setPeso] = React.useState('');
  const [altura, setAltura] = React.useState('');
  const [imc, setImc] = React.useState('');

  function calcularIMC() {
    const alturaMetro = Number(altura) / 100;
    const total = (Number(peso) / (alturaMetro * alturaMetro)).toFixed(2);
    setImc(total);
  }

  return (
    <div>
      <label htmlFor="peso">Peso (kg)</label>
      <input 
        type="number" 
        id="peso" 
        name="peso"
        value={peso} 
        onChange={e => setPeso(e.target.value)} 
        />
      <label htmlFor="altura">Altura (m)</label>
      <input 
        type="number" 
        id="altura" 
        name="altura" 
        value={altura} 
        onChange={e => setAltura(e.target.value)} 
      />
      <button onClick={calcularIMC}>Calcular</button>
      <p>IMC: {imc}</p>
    </div>
  );
}