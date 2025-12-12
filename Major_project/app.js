import express from 'express';
import crypto from 'crypto';
import fs from 'fs/promises';

const app = express();
const PORT = 3000;
const DATA_FILE = 'links.json';

app.use(express.json());
app.use(express.static('public'));

const loadLinks = async () => {
    try {
        const data = await fs.readFile(DATA_FILE, 'utf-8');
        return JSON.parse(data);
    } catch {
        await fs.writeFile(DATA_FILE, '{}');
        return {};
    }
};

const saveLinks = async (links) => {
    await fs.writeFile(DATA_FILE, JSON.stringify(links, null, 2));
};

app.post('/shorten', async (req, res) => {
    const { url } = req.body;
    if (!url) return res.status(400).json({ error: 'URL required' });
    
    const links = await loadLinks();
    const shortCode = crypto.randomBytes(3).toString('hex');
    links[shortCode] = { url, clicks: 0 };
    await saveLinks(links);
    
    res.json({ shortCode, shortUrl: `http://localhost:${PORT}/${shortCode}` });
});

app.get('/:shortCode', async (req, res) => {
    const links = await loadLinks();
    const link = links[req.params.shortCode];
    if (!link) return res.status(404).send('Not found');
    
    link.clicks++;
    await saveLinks(links);
    res.redirect(link.url);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));