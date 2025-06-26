## 🌳 Portifólio Pessoal

- **frontend SPA**
- **Nginx**
- **React + Vite**
- **TailwindCSS**

## 📦 docker-compose.yml

Esse é o **orquestrador do container**.

* **version: "3.8"** → Versão do compose.
* **services > web** → Define o serviço “web”.

  * **build: .** → Usa o `Dockerfile` da raiz pra buildar a imagem.
  * **ports: "3000:80"** → Expor a porta 80 do container (nginx) na porta 3000 da sua máquina (localhost:3000).
  * **volumes:** → Sincroniza arquivos locais no host com dentro do container.

    * Para o desenvolvimento, pra não precisar rebuildar toda hora.
    * Ex: `./src:/app/src` → Pasta `src` local vai pro container em `/app/src`.
  * **environment:** → Define variáveis de ambiente.

    * `NODE_ENV=production` → Indica que é ambiente de produção.

> **Resumo:** Ele sobe um container baseado no Dockerfile, ouvindo na porta 3000, e mapeia os arquivos do projeto pra dentro do container para buildar a imagem.

---

## 🐳 Dockerfile

Aqui acontece a **mágica do build e deploy**:

### **Etapa 1: Build com Node**

* Usa **node:20-alpine** (leve e rápido).
* Cria e trabalha na pasta `/app`.
* Copia os arquivos de dependência (`package.json`, `bun.lockb` etc).
* Roda `npm install` pra instalar as dependências.
* Copia o restante dos arquivos do projeto.
* Executa `npm run build` → Gera os arquivos prontos pra produção (na pasta `/app/dist`).

### **Etapa 2: Servir com Nginx**

* Usa **nginx\:alpine** (também leve).
* Copia os arquivos buildados (`/app/dist`) pra pasta do nginx `/usr/share/nginx/html`.
* Remove a config default do nginx.
* Copia sua config customizada (`nginx.conf`) pra dentro do container.
* Expõe a porta 80 (que lá no compose é mapeada pra 3000).
* Comando final pra rodar o nginx.

> **Resumo:** Primeiro ele builda o app com Node (Vite), depois sobe um Nginx pra servir os arquivos estáticos gerados.

---

## 🌐 nginx.conf

Configuração do **servidor Nginx** pra rodar um **SPA (Single Page Application)**.

* Escuta na porta 80.
* Define o root como `/usr/share/nginx/html` (onde foi copiado o build).
* Quando acessar `/`, ele tenta servir arquivos diretamente.
* Se não achar, ele cai pro `/index.html` (padrão de SPAs, pra lidar com rotas client-side).

> **Resumo:** Garante que seu app funcione certinho em produção, mesmo com rotas tipo `/dashboard`, `/perfil`, etc.

---

## ✅ Em resumo geral:

➡️ **Dockerfile** constrói e serve o frontend pronto execução.
➡️ **docker-compose.yml** sobe o container e faz o mapeamento para acessar em `localhost:3000`.
➡️ **nginx.conf** garante que as rotas do frontend funcionem direito.
