
FROM node:12.14.0-slim
# The port gatsby runs on
EXPOSE 8000

WORKDIR /web_dados

COPY . .

RUN npm install

CMD ["npm", "run", "develop"]
