FROM node:20.11.1-alpine as builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:1.25.4-alpine AS proxy

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /app/dist/healthy/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
