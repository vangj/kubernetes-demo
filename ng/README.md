# Docker

To build.

```bash
docker build --no-cache -t demo-ng:local .
```

To run.

```bash
docker run -p 81:80 --rm demo-ng:local
```