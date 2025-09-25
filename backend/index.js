import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// health + version
app.get('/health', (_req, res) => res.json({ ok: true }));
app.get('/version', (_req, res) => res.json({ version: process.env.GIT_COMMIT || 'dev' }));

// placeholder endpoints
app.post('/extract', (req, res) => res.json({ ok: true, received: req.body || null }));
app.post('/draft', (req, res) => res.json({ ok: true, received: req.body || null }));

app.listen(PORT, () => console.log('API listening on :' + PORT));

