FROM node:alpine
EXPOSE 8000

RUN npm install -g gatsby-cli

USER 1000

WORKDIR /web_dados

CMD ["tail", "-F", "package.json"]
