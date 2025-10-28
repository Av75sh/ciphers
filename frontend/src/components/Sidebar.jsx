import React from 'react';
import './app.css';

function Sidebar({ projects, currentProject, onLoadProject, onDeleteProject }) {
  const isEmpty = projects.length === 0;

  return (
    <aside className="sidebar">
      <header className="sidebar-header">
        <h3 className="sidebar-title">My Projects</h3>
      </header>

      {isEmpty ? (
        <p className="empty-message">No projects yet. Create one!</p>
      ) : (
        <ul className="project-list">
          {projects.map((project) => {
            const isActive = currentProject?._id === project._id;

            return (
              <li
                key={project._id}
                className={`project-item ${isActive ? 'active' : ''}`}
                onClick={() => onLoadProject(project._id)}
              >
                <span className="project-name">{project.name}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDeleteProject(project._id);
                  }}
                  className="delete-btn"
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </aside>
  );
}

export default Sidebar;