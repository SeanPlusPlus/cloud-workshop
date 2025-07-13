# ☁️ Cloud Workshop

*This repo is built iteratively and very granularly by Sean and ChatGPT. We tackle small steps one at a time, building the repo piece by piece. This method is a tool for me to deeply learn how each part of modern web cloud architecture works, by writing code, configuring tools, and documenting everything along the way. It's part of a series of AI-assisted tutorials. Check out other workshops at [https://seans-workshops.vercel.app/](https://seans-workshops.vercel.app/).*

---

## 🎯 Goals

* Understand how Node.js web servers integrate with edge layers like HAProxy and Varnish.
* Experiment with caching, load balancing, and reverse proxies.
* Build practical skills in deploying and debugging cloud traffic flows.

---

## 📝 Clone the Repository the Repository

```bash
git clone git@github.com:SeanPlusPlus/cloud-workshop.git
cd cloud-workshop
```

---

## 📁 Project Structure

```
cloud-workshop/
├── README.md
├── server.js
├── haproxy.cfg
```

---

## ▶️ Running the Node.js Server the Node.js Server

This project uses a minimal Node.js server with the native `http` module.

Run the server:

```bash
node server.js
```

Visit:

```
http://localhost:3000
```

Expected output:

```
Hello from Node.js server!
```

---

## 🔀 HAProxy Setup Setup

### haproxy.cfg

A minimal HAProxy configuration:

```
frontend http-in
    bind *:8080
    default_backend node-backend

backend node-backend
    server node1 127.0.0.1:3000
```

### Running HAProxy

Ensure HAProxy is installed, then start it with:

```bash
haproxy -f haproxy.cfg
```

Now visit:

```
http://localhost:8080
```

✅ You should see:

```
Hello from Node.js server!
```

---

## 🚀 Next Steps Steps

* Add Varnish configuration and test caching.
* Add multiple Node.js servers and test load balancing.
* Inspect and modify HTTP headers through HAProxy or Varnish.
* Experiment with Docker Compose to run services together.
* Dive deeper into modern cloud architecture patterns.

---

Happy cloud hacking 🚀
