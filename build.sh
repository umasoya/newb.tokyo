#!/bin/bash

docker run -t -w /hugo -v $(pwd):/hugo --rm --name hugo umasoya/hugo hugo
