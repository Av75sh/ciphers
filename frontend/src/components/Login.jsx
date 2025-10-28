import React, { useState } from 'react';
import './app.css';

function Login({ onLogin, onSwitchToRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setError('');
    setIsLoading(true);

    try {
      await onLogin(email, password);
      setEmail('');
      setPassword('');
    } catch (e) {
      setError(e.message || 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === 'Enter') handleSubmit();
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="title">Login</h1>

        {error && <div className="error">{error}</div>}

        <div className="form">
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={handleKey}
              placeholder="you@example.com"
            />
          </div>

          <div className="field">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKey}
              placeholder="••••••••"
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="btn"
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </div>

        <p className="switch">
          No account?{' '}
          <button onClick={onSwitchToRegister} className="link">
            Register
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;