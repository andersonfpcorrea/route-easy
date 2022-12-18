FROM node:18-alpine
EXPOSE 3001
WORKDIR /usr/src/app
COPY . .
RUN npm i
ENTRYPOINT ["npm", "run"]
CMD ["dev"]