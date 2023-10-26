FROM node:16-alpine as builder
WORKDIR '/app'
COPY . .
RUN npm install
EXPOSE 5173
CMD ["npm", "run", "dev"]