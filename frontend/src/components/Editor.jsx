import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import CodePreview from './CodePreview';
import './app.css';

function Editor({
  user,
  projects,
  currentProject,
  code,
  previewKey,
  onCodeChange,
  onCreateProject,
  onSaveProject,
  onRunCode,
  onLogout,
  onLoadProject,
  onDeleteProject,
}) {
  const projectName = currentProject ? currentProject.name : 'Untitled Project';

  return (
    <div className="editor-root">
      <Header
        user={user}
        currentProject={currentProject}
        onCreateProject={onCreateProject}
        onSaveProject={onSaveProject}
        onRunCode={onRunCode}
        onLogout={onLogout}
      />

      <div className="editor-body">
        <Sidebar
          projects={projects}
          currentProject={currentProject}
          onLoadProject={onLoadProject}
          onDeleteProject={onDeleteProject}
        />

        <section className="editor-panel">
          <header className="panel-header">
            <span className="panel-title">{projectName}</span>
          </header>
          <textarea
            className="code-textarea"
            value={code}
            onChange={(e) => onCodeChange(e.target.value)}
            placeholder="Write your React code here..."
          />
        </section>

        <section className="preview-panel">
          <header className="panel-header">
            <span className="panel-title">Preview</span>
          </header>
          <CodePreview code={code} key={previewKey} />
        </section>
      </div>
    </div>
  );
}

export default Editor;