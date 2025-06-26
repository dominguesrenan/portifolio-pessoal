# Etapa 1: Build da aplicação
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json* bun.lockb* ./
RUN npm install

COPY . .

RUN npm run build

# Etapa 2: Servir arquivos estáticos com nginx
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

# Remove a configuração default do nginx
RUN rm /etc/nginx/conf.d/default.conf

# Adiciona uma configuração customizada para SPA
COPY nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
