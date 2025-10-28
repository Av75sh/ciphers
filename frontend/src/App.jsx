import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Editor from './components/Editor';
import { authAPI, projectAPI } from './utils/api';
import { DEFAULT_CODE } from './config/constants';

export default function App() {
  const [user, setUser] = useState(null);
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState(null);
  const [code, setCode] = useState(DEFAULT_CODE);
  const [previewKey, setPreviewKey] = useState(0);
  const [view, setView] = useState('login');

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const res = await authAPI.checkAuth();
      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
        setView('editor');
        loadUserProjects();
      }
    } catch (err) {
    }
  };

  const login = async (email, password) => {
    const res = await authAPI.login(email, password);
    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
      setView('editor');
      loadUserProjects();
    } else {
      throw new Error(data.message || 'Login failed');
    }
  };

  const register = async (name, email, password) => {
    const res = await authAPI.register(name, email, password);
    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
      setView('editor');
      loadUserProjects();
    } else {
      throw new Error(data.message || 'Registration failed');
    }
  };

  const logout = async () => {
    await authAPI.logout();
    setUser(null);
    setProjects([]);
    setCurrentProject(null);
    setCode(DEFAULT_CODE);
    setView('login');
  };

  const loadUserProjects = async () => {
    const res = await projectAPI.getAll();
    if (res.ok) {
      const data = await res.json();
      setProjects(data.projects || []);
    }
  };

  const createNewProject = async () => {
    const name = prompt('Project name:');
    if (!name) return;

    const res = await projectAPI.create(name, code);
    if (res.ok) {
      const data = await res.json();
      setProjects([...projects, data.project]);
      setCurrentProject(data.project);
    }
  };

  const openProject = async (id) => {
    const res = await projectAPI.getById(id);
    if (res.ok) {
      const data = await res.json();
      setCurrentProject(data.project);
      setCode(data.project.code);
      setPreviewKey(prev => prev + 1);
    }
  };

  const saveCurrentProject = async () => {
    if (!currentProject) {
      alert('Create a project first!');
      return;
    }

    await projectAPI.update(currentProject._id, code);
    alert('Saved!');
  };

  const deleteProject = async (id) => {
    if (!confirm('Delete this project?')) return;

    await projectAPI.delete(id);
    setProjects(projects.filter(p => p._id !== id));
    if (currentProject?._id === id) {
      setCurrentProject(null);
    }
  };

  const runPreview = () => {
    setPreviewKey(prev => prev + 1);
  };

  return (
    <>
      {view === 'login' && !user && (
        <Login onLogin={login} onSwitchToRegister={() => setView('register')} />
      )}

      {view === 'register' && !user && (
        <Register onRegister={register} onSwitchToLogin={() => setView('login')} />
      )}

      {user && (
        <Editor
          user={user}
          projects={projects}
          currentProject={currentProject}
          code={code}
          previewKey={previewKey}
          onCodeChange={setCode}
          onCreateProject={createNewProject}
          onSaveProject={saveCurrentProject}
          onRunCode={runPreview}
          onLogout={logout}
          onLoadProject={openProject}
          onDeleteProject={deleteProject}
        />
      )}
    </>
  );
}