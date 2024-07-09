# Stage 1: Build React application
FROM node:16 as build

WORKDIR /client

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Serve built application using Nginx
FROM nginx:alpine

COPY --from=build /client/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
