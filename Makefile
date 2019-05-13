build:
	docker run -t -w /hugo -v `pwd`:/hugo --rm --name hugo umasoya/hugo hugo

server:
	docker run -t -w /hugo -p 1313:1313 -v `pwd`:/hugo --rm --name hugo umasoya/hugo hugo server --bind 0.0.0.0 -w
