# Deploy no Coolify - Ê-BOT Site

## ✅ Problemas Corrigidos

1. **Nginx não iniciando**: Corrigido o entrypoint script com logs de debug
2. **Porta já utilizada**: Usando `expose: 80` - Traefik faz o proxy automaticamente
3. **Healthcheck**: Configurado com 40s de start_period
4. **Docker otimizado**: Imagem Alpine com wget/curl para healthcheck

## 🏗️ Arquitetura

```
Internet → Traefik (80/443) → Container (porta 80 interna) → Nginx → Site
```

O Coolify/Traefik gerencia:
- SSL/TLS automático
- Roteamento por domínio
- Proxy reverso para o container

## 📋 Pré-requisitos

1. Servidor configurado no Coolify
2. Docker instalado no servidor
3. Domínio apontando para o servidor (DNS configurado)

## 🚀 Configuração no Coolify

### 1. Criar Novo Projeto

1. No Coolify, clique em "New Resource"
2. Selecione "Docker Compose"
3. Conecte ao seu repositório Git

### 2. Configurar Variáveis de Ambiente

No painel "Environment Variables", adicione:

```env
GROQ_API_KEY=sua_chave_groq_aqui
WHATSAPP_NUMBER=5546999130505
SITE_URL=https://ebot.murilosilva.com
```

**IMPORTANTE**: A variável `GROQ_API_KEY` é obrigatória!

### 3. Configurações Gerais

- **Name**: EBOT-SITE
- **Build Pack**: Docker Compose
- **Domain**: https://ebot.murilosilva.com
- **Port**: 80 (porta interna do container)
- **Servidor**: Selecione seu servidor disponível

### 4. Configurações Avançadas (Opcional)

Se necessário, ajuste:
- **Health Check Path**: `/`
- **Health Check Interval**: 30s
- **Health Check Timeout**: 10s
- **Health Check Retries**: 3

### 5. Deploy

1. Salve todas as configurações
2. Clique em "Deploy"
3. Aguarde o build (pode levar 2-5 minutos)
4. Verifique os logs durante o deploy

## 🧪 Testar Localmente (Opcional)

Antes de fazer deploy, você pode testar localmente:

### Linux/Mac:
```bash
chmod +x test-docker.sh
./test-docker.sh
```

### Windows (Git Bash):
```bash
bash test-docker.sh
```

### Teste Manual:
```bash
# Build
docker build -t ebot-site-test .

# Run
docker run -d --name ebot-test -p 8888:80 \
  -e GROQ_API_KEY=test_key \
  -e WHATSAPP_NUMBER=5546999130505 \
  -e SITE_URL=http://localhost:8888 \
  ebot-site-test

# Verificar logs
docker logs ebot-test

# Testar
curl http://localhost:8888

# Limpar
docker stop ebot-test && docker rm ebot-test
```

## 🔍 Verificação Pós-Deploy

### 1. Verificar Logs

No Coolify, vá em "Logs" e procure por:

```
Starting entrypoint script...
Replacing environment variables in env-config.js...
GROQ_API_KEY replaced
WHATSAPP_NUMBER replaced
SITE_URL replaced
Starting nginx...
```

### 2. Verificar Health Status

O container deve mostrar status "healthy" após ~40 segundos.

### 3. Testar o Site

Acesse seu domínio: https://ebot.murilosilva.com

## 🐛 Troubleshooting

### Container não inicia / Reinicia constantemente

**Verificar:**
```bash
# No servidor, via SSH
docker ps -a | grep ebot
docker logs <container_id>
```

**Possíveis causas:**
- Variável `GROQ_API_KEY` não configurada
- Erro no nginx.conf
- Arquivo index.html não encontrado

**Solução:**
- Verifique os logs no Coolify
- Confirme que todas as variáveis estão configuradas
- Verifique se o build foi concluído com sucesso

### 503 Service Unavailable

**Causa:** Healthcheck falhando ou nginx não respondendo

**Solução:**
1. Aguarde 40 segundos (start_period do healthcheck)
2. Verifique logs: procure por "Starting nginx..."
3. Teste manualmente no servidor:
   ```bash
   docker exec <container_id> wget -O- http://localhost/
   ```

### Build falhando

**Possíveis causas:**
- Dockerfile com erro de sintaxe
- Arquivos necessários não commitados
- Falta de recursos no servidor (RAM/Disco)

**Solução:**
1. Verifique os logs de build no Coolify
2. Confirme que todos os arquivos estão no repositório:
   - Dockerfile
   - docker-compose.yml
   - nginx.conf
   - index.html
   - js/env-config.js
3. Teste o build localmente primeiro

### "No available server"

**Causa:** Nenhum servidor selecionado ou servidor offline

**Solução:**
1. Vá em "Servers" no Coolify
2. Verifique se há servidores configurados
3. Verifique se o servidor está online (status verde)
4. No projeto, selecione o servidor nas configurações

### Domínio não resolve / SSL não funciona

**Causa:** DNS não configurado ou propagação pendente

**Solução:**
1. Verifique se o DNS aponta para o IP do servidor:
   ```bash
   nslookup ebot.murilosilva.com
   ```
2. Aguarde propagação DNS (pode levar até 48h)
3. No Coolify, force renovação do certificado SSL

### Variáveis de ambiente não aplicadas

**Sintomas:** Chat não funciona, WhatsApp não abre

**Causa:** env-config.js não foi substituído

**Solução:**
1. Verifique logs: procure por "replaced"
2. Teste dentro do container:
   ```bash
   docker exec <container_id> cat /usr/share/nginx/html/js/env-config.js
   ```
3. Deve mostrar valores reais, não `{{GROQ_API_KEY}}`

## 📝 Checklist de Deploy

- [ ] Servidor configurado e online no Coolify
- [ ] DNS apontando para o servidor
- [ ] Variáveis de ambiente configuradas (especialmente GROQ_API_KEY)
- [ ] Domínio configurado no projeto
- [ ] Build concluído sem erros
- [ ] Container com status "healthy"
- [ ] Site acessível via domínio
- [ ] SSL/HTTPS funcionando
- [ ] Chat funcionando (teste com uma mensagem)
- [ ] WhatsApp abrindo corretamente

## 🔄 Atualizar o Site

Para atualizar após mudanças:

1. Faça commit e push das alterações
2. No Coolify, clique em "Redeploy"
3. Aguarde o novo build e deploy

## 📚 Recursos

- [Documentação Coolify](https://coolify.io/docs)
- [Nginx Alpine Docker](https://hub.docker.com/_/nginx)
- [Docker Compose Reference](https://docs.docker.com/compose/compose-file/)
