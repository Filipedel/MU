FROM node:16 

WORKDIR /usr/src/app


RUN npm install react-router-dom
RUN npm install react-cookie-consent
RUN npm install react-cookie
RUN npm install react-tsparticles
RUN cd ..
RUN npm install nodemon
RUN npm install express


COPY . .

RUN npm run build


EXPOSE 8888

CMD ["node","Server.js"]