FROM node:alpine
EXPOSE 8000

WORKDIR /web_dados

COPY . .

RUN npm install

CMD ["npm", "run", "develop"]
