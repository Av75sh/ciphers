export const API_URL = import.meta.env.PROD 
  ? 'https://ciphers-1.onrender.com/'  
  : 'http://localhost:5000/api';

export const DEFAULT_CODE = `function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Hello World!</h1>
      <p>Start editing to see changes</p>
    </div>
  );
}

export default App;`;