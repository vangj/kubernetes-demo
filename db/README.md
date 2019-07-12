# Docker

To build.

```bash
docker build --no-cache -t demo-db:local .
```

To run.

```bash
docker run \
  -i -t \
  -e MYSQL_ROOT_PASSWORD=admin \
  -e MYSQL_DATABASE=school \
  -e MYSQL_USER=python \
  -e MYSQL_PASSWORD=python \
  -p 3306:3306 \
  --rm demo-db:local
```