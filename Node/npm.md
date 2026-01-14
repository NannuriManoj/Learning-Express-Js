# NPM 
```
npm --version
```

### local dependency - use it only in this particular project
```
npm i <package-name>
```

### global dependency - use it in any project
```
npm install -g <package-name>
sudo npm install -g <package-name>
```

### About package.json

- package.json - manifest file (stores important info about the project/package)
- manual approach (create package.json in the root, create properties etc)
- npm init (step by step, press enter to skip)
- npm init -y (everything by default)

- The **scripts** dictionary inside package.json is used to define custom command shortcuts for running tasks like starting the server, running tests, building the project, etc.

### Share code
when we push our code into the github or a remote repo we will be ingnoring the **node modules**, but when someone cloned our repo - How will they install the dependencies ?? 

That's where we the package.json helps us a lot. In the dependencies object in the package.json we will be having the required modules 

so if we run the **npm install** we will be able to run the application.

### Nodemon
- Nodemon basically watch our files and restart the server automatically
- Nodemon is installed as a **devDependency** rather than installing as a dependency, because we actually don't need the Nodemon in Production environment it is used for the development purposes.

