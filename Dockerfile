From node:latest

RUN mkdir /src

RUN npm install nodemon -g

WORKDIR /src
ADD . /src

RUN npm install

EXPOSE 3000

CMD ["nodemon", "/src/app.js"]

