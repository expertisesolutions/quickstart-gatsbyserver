
FROM node:12.14.0-slim
RUN yarn global add gatsby-cli

# The port gatsby runs on
EXPOSE 8000

WORKDIR /web_dados

COPY ./package.json .
COPY ./yarn.lock .
COPY . .

RUN yarn

CMD ["gatsby", "develop", "-H", "0.0.0.0" ]