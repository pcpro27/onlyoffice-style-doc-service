import React, { useState } from 'react';

function App() {
  const [documents, setDocuments] = useState([]);
  const [currentDoc, setCurrentDoc] = useState({ title: '', content: '' });

  const handleSave = () => {
    if (currentDoc.title && currentDoc.content) {
      setDocuments([...documents, currentDoc]);
      setCurrentDoc({ title: '', content: '' });
    }
  };

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
        <textarea
          placeholder="Contenu du document"
          value={currentDoc.content}
          onChange={(e) => setCurrentDoc({ ...currentDoc, content: e.target.value })}
        />
        <button onClick={handleSave}>Sauvegarder</button>
      </div>
      <div>
        <h2>Mes Documents</h2>
        <ul>
          {documents.map((doc, index) => (
            <li key={index}>
              <h3>{doc.title}</h3>
              <p>{doc.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;