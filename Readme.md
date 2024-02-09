# Always True

This repository contains a simple proxy server implemented using Node.js and Express. The purpose of this server is to respond to all incoming requests with a 200 status code and a JSON payload indicating suc

## Getting Started


### Run using npx

```
npx always-true
```



### Run image from docker hub

```
docker run -d -p 3000:3000 abhijithababhijith/always-true
```

### Run image locally

```
git clone https://github.com/abhisawesome/always-true.git
cd always-true
docker build -t always-true .
docker run -d -p 3000:3000 always-true
```

