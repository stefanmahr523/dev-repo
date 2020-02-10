### STAGE 1: Build ###
FROM node:alpine AS build
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
 
### STAGE 2: Run ###
FROM nginx:alpine
COPY --from=build /usr/src/app/dist/test-ui /usr/share/nginx/html
