# Mermaid Renderer Server

A simple and efficient HTTP server that renders Mermaid diagrams to PNG images. Built with Bun runtime and optimized for Docker environments.


```bash
git clone https://github.com/ZhengJi128/mermaid-graph-download.git
cd mermaid-renderer-server

docker compose up -d
```
### frontend

http://localhost:18000

### API Usage

Send a POST request to `/render` endpoint with your Mermaid diagram definition:

```bash
curl -X POST http://localhost:3022/render \
  -H "Content-Type: application/json" \
  -d '{
    "diagram": "graph TD\nA[Client] --> B[Load Balancer]\nB --> C[Server01]\nB --> D[Server02]"
  }' \
  --output diagram.png
```

### 
backend from 
https://github.com/erik-balfe/mermaid-renderer-server.git