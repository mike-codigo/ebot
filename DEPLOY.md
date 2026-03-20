# Deploy no Coolify - Ê-BOT Site

## Problemas Corrigidos

1. **"No available server"**: Configuração correta para Coolify
2. **"Porta já utilizada"**: Usando porta 3000 (alta) ao invés de 80 para evitar conflito com Traefik
3. **Healthcheck falhando**: Aumentado `start_period` de 5s para 40s
4. **Dockerfile otimizado**: Adicionado wget/curl e healthcheck nativo

## Como o Coolify Funciona

O Coolify usa um proxy reverso (Traefik) que:
- Usa as portas 80/443 do servidor para roteamento
- Roteia o tráfego baseado no domínio configurado para a porta do seu container
- Gerencia certificados SSL automaticamente

Por isso, mapeamos para porta 3000 (ou outra porta alta disponível) no host: `3000:80`
- **3000**: Porta no servidor (host) - é o que o Coolify/Traefik vai acessar
- **80**: Porta interna do container (nginx)

## Configuração no Coolify

### 1. Variáveis de Ambiente Obrigatórias

No painel do Coolify, configure em "Environment Variables":

```
GROQ_API_KEY=sua_chave_aqui
WHATSAPP_NUMBER=5546999130505
SITE_URL=https://ebot.murilosilva.com
```

### 2. Configurações Gerais

- **Build Pack**: Docker Compose
- **Domain**: https://ebot.murilosilva.com
- **Port**: 3000 (porta externa mapeada no docker-compose.yml)
- **Servidor**: Selecione um servidor disponível

**IMPORTANTE**: No Coolify, configure a porta como **3000** nas configurações do projeto.

### 3. Servidor

Certifique-se de que:
- Você tem um servidor configurado no Coolify
- O servidor está online e acessível
- Há recursos suficientes (CPU/RAM/Disco)
- O servidor tem Docker instalado

### 4. Deploy

1. Faça commit das alterações
2. Push para o repositório
3. No Coolify, clique em "Deploy"
4. Aguarde o build e deploy (pode levar alguns minutos)

## Verificação

Após o deploy, verifique:

1. **Logs**: Verifique se não há erros nos logs
2. **Health**: O container deve estar "healthy" após ~40 segundos
3. **Acesso**: Teste o acesso via domínio configurado

## Troubleshooting

### "Port already in use" / "Porta já utilizada"
✅ **RESOLVIDO**: Agora usando porta 3000 ao invés de 80
- Porta 80/443 são usadas pelo Traefik (proxy do Coolify)
- Mapeamos para porta 3000: `3000:80`
- Configure a porta 3000 nas configurações do Coolify

### Container reiniciando constantemente
- Verifique os logs no Coolify
- Confirme que todas as variáveis de ambiente estão configuradas
- Verifique se o arquivo js/env-config.js existe

### 503 Service Unavailable
- Aguarde o `start_period` do healthcheck (40s)
- Verifique se a porta 80 está exposta (não mapeada)
- Confirme que o nginx está rodando dentro do container

### Build falhando
- Verifique se todos os arquivos necessários estão no repositório
- Confirme que o Dockerfile e docker-compose.yml estão corretos
- Verifique os logs de build no Coolify

### "No available server"
- Vá em "Servers" no Coolify
- Certifique-se de ter pelo menos um servidor configurado
- Verifique se o servidor está online (status verde)
- No projeto, selecione o servidor disponível
