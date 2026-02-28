import React, { useState, useEffect } from 'react';

function App() {
  const [documents, setDocuments] = useState([]);
  const [currentDoc, setCurrentDoc] = useState({ title: '', content: '' });

  const handleSave = () => {
    if (currentDoc.title && currentDoc.content) {
      setDocuments([...documents, currentDoc]);
      setCurrentDoc({ title: '', content: '' });
      tinymce.get('editor').setContent('');
    }
  };

  useEffect(() => {
    if (window.tinymce) {
      tinymce.init({
        selector: '#editor',
        plugins: 'advlist autolink lists link image charmap print preview anchor',
        toolbar_mode: 'floating',
        setup: (editor) => {
          editor.on('init', () => {
            editor.setContent(currentDoc.content);
          });
          editor.on('change', () => {
            setCurrentDoc({ ...currentDoc, content: editor.getContent() });
          });
        }
      });
    }
  }, []);

  return (
    <div>
      <h1>Mon Service de Documents</h1>
      <div>
        <input
          type="text"
          placeholder="Titre du document"
          value={currentDoc.title}
          onChange={(e) => setCurrentDoc({ ...currentDoc, title: e.target.value })}
        />
        <textarea id="editor" placeholder="Contenu du document"></textarea>
        <button onClick={handleSave}>Sauvegarder</button>
      </div>
      <div>
        <h2>Mes Documents</h2>
        <ul>
          {documents.map((doc, index) => (
            <li key={index}>
              <h3>{doc.title}</h3>
              <div dangerouslySetInnerHTML={{ __html: doc.content }}></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;