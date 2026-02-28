const express = require('express');
const app = express();
app.use(express.json());

// Exemple d'API pour lister les documents
app.get('/docs', (req, res) => {
    res.json([{ id: 1, title: "Document 1", content: "Contenu..." }]);
});

// Exemple d'API pour sauvegarder un document
app.post('/docs', (req, res) => {
    const { title, content } = req.body;
    console.log(`Document sauvegardé : ${title}`);
    res.json({ success: true });
});

app.listen(3001, () => console.log('Serveur démarré sur http://localhost:3001'));