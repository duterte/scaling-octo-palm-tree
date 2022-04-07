FROM node
ENV MONGO_DB_USERNAME=admin MONGO_DB_PWD=password DEBUG=http:server
RUN mkdir -p /home/app
WORKDIR /home/app
COPY . ./
RUN npm install
RUN npm run build
CMD ["node", "/home/app/dist"]