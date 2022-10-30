FROM node:16 AS CLient-build

WORKDIR /Users/FILIPE/Desktop/MUZ/Front
COPY package.json ./
RUN npm install
COPY src/ ./src
COPY public/ ./public
RUN npm run build

From node:16 AS server-build

WORKDIR /Users/FILIPE/Desktop/MUZ
COPY --from=CLient-build /Users/FILIPE/Desktop/MUZ/Front/build/ ./Front/build
WORKDIR /Users/FILIPE/Desktop/MUZ/

COPY package.json ./
RUN npm install

COPY Server.js ./

EXPOSE 8888

CMD ["node","Server.js"]