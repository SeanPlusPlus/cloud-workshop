# ☁️ Cloud Workshop

*This repo is built iteratively and very granularly by Sean and ChatGPT. We tackle small steps one at a time, building the repo piece by piece. This method is a tool for Sean to deeply learn how each part of modern web cloud architecture works, by writing code, configuring tools, and documenting everything along the way. It's part of a series of AI-assisted tutorials. Check out other workshops at [https://seans-workshops.vercel.app/](https://seans-workshops.vercel.app/).*

---

## 🎯 Goals

* Build a minimal Node.js web server.
* Understand how to layer HAProxy and Varnish in front of it.
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

Then visit:

```
http://localhost:3000
```

✅ You should see:

```
Hello from Express!
```

---

## 🚀 Next Steps

* Add HAProxy configuration to reverse-proxy to Node.js
* Explore caching with Varnish
* Experiment with Docker Compose
