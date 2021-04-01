FROM node:alpine
EXPOSE 8000

WORKDIR /web_dados

COPY . .

RUN npm install --dev

CMD ["npm", "run", "develop"]
