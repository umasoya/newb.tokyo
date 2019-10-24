# README

## build content

```sh
docker-compose run --rm hugo hugo
```

## live reload

```sh
# default port: 1313
# default live reload port: 443
docker-compose run --rm hugo hugo server -w
```

## build assets

```sh
docker-compose run --rm node npm run build
```
