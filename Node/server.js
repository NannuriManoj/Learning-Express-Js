import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';

const PORT = process.env.PORT;  // accessing the port from the .env

// Get current path 
const __filename = url.fileURLToPath(import.meta.url);   // gets the current file path
const __dirname = path.dirname(__filename);  // gets the current directory path

const server = http.createServer((req, res) => {
    try {
        if(req.method === 'GET'){
            if(req.url === '/'){
                res.writeHead(200, { 'content-type': 'text/html' });
                res.end('<h1> Home Page </h1>')
            } else if(req.url === '/about'){
                res.writeHead(200, { 'content-type': 'text/html' });
                res.end('<h1> About </h1>')
            }else{
                res.writeHead(404, { 'content-type': 'text/html' });
                res.end('<h1> About </h1>')
            }
        } else {
            throw new Error("Method not allowed")
        }
    } catch (error) {
        res.writeHead(500, { 'content-type': 'text/html' });
        res.end('Server Error')
    }
    
})

server.listen(PORT,()=>{
    console.log(`Running on ${PORT}`);
})