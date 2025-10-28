import { API_URL } from '../config/constants';

export const authAPI = {
  checkAuth: async () => {
    const response = await fetch(`${API_URL}/auth/me`, {
      method: 'GET',
      credentials: 'include',
    });
    return response;
  },

  login: async (email, password) => {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ email, password }),
    });
    return response;
  },

  register: async (name, email, password) => {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ name, email, password }),
    });
    return response;
  },

  logout: async () => {
    const response = await fetch(`${API_URL}/auth/logout`, {
      method: 'POST',
      credentials: 'include',
    });
    return response;
  },
};

export const projectAPI = {
  getAll: async () => {
    const response = await fetch(`${API_URL}/projects`, {
      method: 'GET',
      credentials: 'include',
    });
    return response;
  },

  create: async (name, code) => {
    const response = await fetch(`${API_URL}/projects`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ name, code }),
    });
    return response;
  },

  getById: async (projectId) => {
    const response = await fetch(`${API_URL}/projects/${projectId}`, {
      method: 'GET',
      credentials: 'include',
    });
    return response;
  },

  update: async (projectId, code) => {
    const response = await fetch(`${API_URL}/projects/${projectId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ code }),
    });
    return response;
  },

  delete: async (projectId) => {
    const response = await fetch(`${API_URL}/projects/${projectId}`, {
      method: 'DELETE',
      credentials: 'include',
    });
    return response;
  },
};
