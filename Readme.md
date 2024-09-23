# Always True

This repository contains a simple proxy server implemented using Node.js and Express. The server responds to incoming requests with a 200 status code and a JSON payload indicating success. It also serves a static website.

## Features

- Responds with a success JSON for the root ('/') and '/api' routes
- Serves a static website at the '/website' route
- CORS enabled
- Configurable port using environment variables

## Getting Started

### Run using npx

```
npx always-true
```

### Run image from Docker Hub

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

## Usage

Once the server is running, you can access it as follows:

- API Endpoints:
  - `http://localhost:3000/`: Returns a JSON response `{ status: "ok", success: true }`
  - `http://localhost:3000/api`: Returns the same JSON response as above
- Static Website:
  - `http://localhost:3000/website`: Serves the static website (index.html) from the public folder

## Configuration

The server listens on port 3000 by default. You can change this by setting the `PORT` environment variable.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).