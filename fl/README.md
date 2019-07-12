# Docker

To build.

```bash
docker build --no-cache -t demo-fl:local .
```

To run.

```bash
docker run -i -t -p 82:80 --rm demo-fl:local
```