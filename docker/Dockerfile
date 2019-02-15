FROM golang:1.11.5-alpine AS build

ENV HUGO_VERSION 0.54.0

WORKDIR /tmp

RUN apk update && \
        apk add git gcc libc-dev g++ && \
        git clone https://github.com/gohugoio/hugo.git

WORKDIR /tmp/hugo

RUN go install --tags extended

FROM golang:1.11.5-alpine

COPY --from=build /go/bin/hugo /go/bin/hugo
