import React, { useState, useEffect } from 'react';
import './app.css';

function CodePreview({ code }) {
  const [doc, setDoc] = useState('');

  useEffect(() => {
    const cleaned = code.replace(/export\s+default\s+\w+;?\s*$/gim, '').trim();

    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
          <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
          <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
        </head>
        <body>
          <div id="root"></div>
          <script type="text/babel">
            const { useState, useEffect, useRef } = React;

            try {
              ${cleaned}

              const container = ReactDOM.createRoot(document.getElementById('root'));
              container.render(<App />);
            } catch (err) {
              document.getElementById('root').innerHTML = 
                '<div class="error-msg"><strong>Error:</strong><br/>' + err.toString() + '</div>';
              console.error('Preview Error:', err);
            }
          </script>
        </body>
      </html>
    `;

    setDoc(html);
  }, [code]);

  return (
    <iframe
      srcDoc={doc}
      title="code-preview"
      className="preview-iframe"
      sandbox="allow-scripts allow-same-origin"
    />
  );
}

export default CodePreview;