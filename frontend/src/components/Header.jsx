import React from 'react';
import './app.css';

function Header({ user, onCreateProject, onSaveProject, onRunCode, onLogout, currentProject }) {
  const isSaveDisabled = !currentProject;

  return (
    <header className="navbar">
      <div className="nav">
        <h2 className="nav-title">React Code Editor</h2>
        {user && <p className="nav-user">Welcome, {user.name}</p>}
      </div>

      <nav className="nav2">
        <button onClick={onCreateProject} className="btn btn-success">
          New Project
        </button>
        <button
          onClick={onSaveProject}
          disabled={isSaveDisabled}
          className="btn btn-primary"
          style={{ opacity: isSaveDisabled ? 0.5 : 1 }}
        >
          Save
        </button>
        <button onClick={onRunCode} className="btn btn-warning">
          Run Code
        </button>
        <button onClick={onLogout} className="btn btn-danger">
          Logout
        </button>
      </nav>
    </header>
  );
}

export default Header;