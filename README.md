# Portifólio Pessoal

## Aplicar todas as permissões

1. Leitura, escrita e execução:

```bash
sudo chmod -R 777 ~/portifolio-pessoal
```

## Execute o docker-compose

```bash
docker-compose up --build -d
```

## Verifique os arquivos

```bash
docker-compose exec web ls -la /app/src/data/
```

## Build

```bash
docker-compose exec web npm run build
```

## Acesso ao app

1. Acesse o app em: [http://localhost:3000](http://localhost:3000)

## Docker

1. Remover todos os conteiners:

```bash
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
docker rmi $(docker images -q)
docker volume rm $(docker volume ls -q)
docker network prune -f
clear
```

## Atualização do repositório

### Enviar atualização para branch `main`

1. Enviar atualização para branch `main`:

```bash
git add .

git status

git commit -m "Add/Imp | Portifolio Pessoal | $(date '+%d/%m/%Y - %H:%M:%S')"

git push -uf origin main
```

---

## Links

- [GitHub](https://github.com/dominguesrenan/portifolio-pessoal)
- [LinkedIn](https://www.linkedin.com/in/renan-domingues-4808b2172/)