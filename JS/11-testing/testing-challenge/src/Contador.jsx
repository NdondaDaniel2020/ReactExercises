import { useState } from 'react';

export default function Contador() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '20px', border: '1px solid gray', borderRadius: '8px', maxWidth: '300px', margin: '20px auto', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '10px' }}>Cliques: {count}</h2>
      <button 
        onClick={() => setCount(count + 1)}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        Somar
      </button>
    </div>
  );
}
