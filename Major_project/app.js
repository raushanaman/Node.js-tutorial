import http from 'http';
import fs from 'fs/promises';
import path from 'path';
import crypto from 'crypto';
import url from 'url';

const PORT = 3000;
const DATA_FILE = 'links.json';

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

const serveFile = async (res, filePath, contentType) => {
    try {
        const data = await fs.readFile(filePath);
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    } catch {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('File not found');
    }
};

const server = http.createServer(async (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    if (req.method === 'GET') {
        if (pathname === '/') {
            return serveFile(res, path.join('public', 'index.html'), 'text/html');
        }
        if (pathname === '/style.css') {
            return serveFile(res, path.join('public', 'style.css'), 'text/css');
        }
        
        const shortCode = pathname.slice(1);
        if (shortCode) {
            const links = await loadLinks();
            if (links[shortCode]) {
                links[shortCode].clicks++;
                await saveLinks(links);
                res.writeHead(302, { 'Location': links[shortCode].url });
                return res.end();
            }
        }
    }

    if (req.method === 'POST' && pathname === '/shorten') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', async () => {
            try {
                const { url } = JSON.parse(body);
                if (!url) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ error: 'URL required' }));
                }
                
                const links = await loadLinks();
                const shortCode = crypto.randomBytes(3).toString('hex');
                links[shortCode] = { url, clicks: 0 };
                await saveLinks(links);
                
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ 
                    shortCode, 
                    shortUrl: `http://localhost:${PORT}/${shortCode}` 
                }));
            } catch {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Invalid JSON' }));
            }
        });
        return;
    }

    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
});

server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));