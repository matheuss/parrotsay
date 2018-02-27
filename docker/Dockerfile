FROM node:9.6-alpine
MAINTAINER hypergig@gmail.com
RUN apk add --no-cache fortune && \
    npm install --global parrotsay && \
    fortune | parrotsay
COPY ep.sh .
ENTRYPOINT ["/ep.sh"]
