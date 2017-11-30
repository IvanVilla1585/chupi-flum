FROM node:latest
LABEL Name=api-gateway Version=0.0.1
COPY package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /usr/src && cp -ar /tmp/node_modules /usr/src

WORKDIR /usr/src
COPY . /usr/src

ENV PORT 6379
EXPOSE 6379
ENV PRODUCTION true
CMD npm run dev
