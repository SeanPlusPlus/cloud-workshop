# ☁️ Cloud Workshop

*This repo is built iteratively and very granularly by Sean and ChatGPT. We tackle small steps one at a time, building the repo piece by piece. This method is a tool for Sean to deeply learn how each part of modern web cloud architecture works, by writing code, configuring tools, and documenting everything along the way. It's part of a series of AI-assisted tutorials. Check out other workshops at [https://seans-workshops.vercel.app/](https://seans-workshops.vercel.app/).*

---

## 🎯 Goals

* Build a minimal Node.js web server.
* Understand how to layer HAProxy in front of it.
* Learn modern cloud architecture fundamentals.

---

## 📝 Getting Started

### Initialize the Project

```bash
mkdir cloud-workshop
cd cloud-workshop
npm init -y
```

### Install Express

```bash
npm install express
```

### Create `server.js`

**server.js**

```js
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});
```

> If using CommonJS, replace with:
>
> ```js
> const express = require('express');
> const app = express();
>
> app.get('/', (req, res) => {
>   res.send('Hello from Express!');
> });
>
> app.listen(3000, () => {
>   console.log('Express server running on http://localhost:3000');
> });
> ```

### Run the Server

```bash
node server.js
```

Visit:

```
http://localhost:3000
```

✅ You should see:

```
Hello from Express!
```

---

## 🔀 Installing and Running HAProxy

### Install HAProxy (macOS)

```bash
brew install haproxy
```

### Create `haproxy.cfg`

**haproxy.cfg**

```
global
    log 127.0.0.1 local0 debug

defaults
    log     global
    mode    http
    option  httplog
    timeout connect 5s
    timeout client 30s
    timeout server 30s

frontend http-in
    bind *:8080
    default_backend node-backend

backend node-backend
    server node1 127.0.0.1:3000
```

### Run HAProxy

Run HAProxy in the foreground for easier debugging:

```bash
haproxy -db -f haproxy.cfg
```

Then visit:

```
http://localhost:8080
```

✅ You should see:

```
Hello from Express!
```

---

## 🚀 Next Steps

* Add multiple Node.js servers and test load balancing.
* Explore caching with Varnish.
* Experiment with Docker Compose for running services together.
