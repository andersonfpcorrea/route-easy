FROM node:18-alpine
EXPOSE 3001
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm i
COPY . .
ENTRYPOINT ["npm", "run"]
CMD ["dev"]