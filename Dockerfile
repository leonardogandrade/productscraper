FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
ENV PORT=3009
RUN npm install
COPY . .
EXPOSE 3009
CMD ["node", "start.js"]