# Cloud Workshop

A hands-on workshop repo to explore modern web cloud architectures.

## Goals

* Understand how Node.js web servers integrate with edge layers like HAProxy and Varnish.
* Experiment with caching, load balancing, and reverse proxies.
* Build practical skills in deploying and debugging cloud traffic flows.

---

## Clone the Repository

```bash
git clone git@github.com:SeanPlusPlus/cloud-workshop.git
cd cloud-workshop
```

---

## Project Structure

```
cloud-workshop/
├── README.md
├── server.js
├── haproxy.cfg
```

---

## Running the Node.js Server

Install dependencies (if using pure Node.js HTTP, none required):

```bash
node server.js
```

Visit:

```
http://localhost:3000
```

You should see:

```
Hello from Node.js server!
```

---

## HAProxy Setup

### haproxy.cfg

Minimal example:

```
frontend http-in
    bind *:8080
    default_backend node-backend

backend node-backend
    server node1 127.0.0.1:3000
```

### How to Run HAProxy

Make sure HAProxy is installed. Then run:

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

## Next Steps

* Add Varnish configuration and test caching.
* Add multiple Node.js servers and test load balancing.
* Inspect and modify HTTP headers through HAProxy or Varnish.
* Experiment with Docker Compose to run services together.

---

Happy cloud hacking 🚀
