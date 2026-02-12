## What is Node??
- Environment to run JavaScript outside Browser
- Build on Chrome's V8 engine

## How Node.Js works ?
- V8 Js Engine
- Non-Blocking (doesn't depend on the I/O operations)
- Single Threaded
- Event Loop

## What is Node.Js is used for ?
- Build API's (Ex: RESTful and GraphQL)
- Server rendered Apps
- Real Time Applications
- Microservices 
- CLI Tools
- Bots
- Web Scraping
- Web Servers

- Not great for CPU intensive applications.

## Browser vs Server 

### Browser
- DOM 
- Window
- Interactive Apps
- No Filesystem 
- Interaction System
- Es6 Modules

Server (Node.js)
- No DOM
- No Window
- Server Side Apps
- File System 
- Versions 
- Common JS

Node REPL - Read Evaluate Print loop

## GLOBALS - variables/ function provided by Node.js runtime that can be accessed in anyfile. NO Window 
- __dirname - gives the current directory
- __filename - file name 
- requrie - function to use modules (CommonJS)
- module - info about current module (file)
- process - info about the env where the program is being executed
- setTimeOut/ setInterval - skip some time and execute

- CommonJs, every file is module (by default)
- Modules, Encapsulated code (only share minimum)

## Built in modules 
Some General Modules 
- OS
- FS
- Path 
- HTTP