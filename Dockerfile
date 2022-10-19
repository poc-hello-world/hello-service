FROM node:19

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json .
COPY package-lock.json .

RUN npm ci
RUN node --max-old-space-size=4096 $(which npm) install react-scripts -g --silent

COPY . .

CMD ["npm", "start"]
