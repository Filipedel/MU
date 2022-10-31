FROM node:16 AS Client-build

ENV NODE_ENV=client

WORKDIR /MUZ/Front

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

CMD ["sh","-c","npm run start:client"]