# Ê-Bot / Ê-Sistemas Website

Projeto premium desenvolvido em HTML5, CSS3 e JavaScript puro com foco em performance, responsividade e layout "Glassmorphism" profissional.

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Variáveis de Ambiente](#-variáveis-de-ambiente)
- [Configuração da API Groq](#-configuração-da-api-groq)
- [Deploy com Docker](#-deploy-com-docker)
- [Deploy Estático](#-deploy-estático)
- [Segurança](#-segurança)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Funcionalidades](#-funcionalidades)
- [Compatibilidade](#-compatibilidade)
- [Contato](#-contato)

## 🚀 Sobre o Projeto

Site institucional e landing pages para os produtos da Ê-Sistemas, incluindo:
- **Ê-Bot API**: Solução de mensageria com IA
- **Ê-Bot Panel**: CRM e gestão de atendimento
- **Ê-Bot Clinical**: Solução para área da saúde
- **Ê-Bot Explorer**: Ferramenta de exploração de dados

## 📁 Estrutura do Projeto

```
SITE5/
├── index.html              # Página inicial
├── contato.html            # Página de contato
├── produtos.html           # Lista de produtos
├── ebot-api.html          # Landing page Ê-Bot API
├── ebot-panel.html        # Landing page Ê-Bot Panel
├── ebot-clinical.html     # Landing page Ê-Bot Clinical
├── ebot-explorer.html     # Landing page Ê-Bot Explorer
├── privacidade.html        # Termos e política de privacidade
├── nossa_historia.html     # História da empresa
│
├── css/                    # Estilos CSS modular
│   ├── variables.css       # Variáveis CSS (cores, fontes, etc)
│   ├── typography.css      # Tipografia e estilos de texto
│   └── ...
│
├── js/                     # Scripts JavaScript
│   ├── main.js             # Script principal
│   ├── chat-widget.js      # Widget de chat com IA
│   ├── env-config.js       # Configuração de env vars (runtime)
│   └── ...
│
├── assets/
│   ├── fonts/              # Fontes do projeto
│   └── images/             # Imagens do projeto
│
├── nginx.conf             # Configuração do nginx
├── Dockerfile              # Configuração Docker
├── docker-compose.yml       # Orquestração Docker
├── .env.example            # Template de variáveis de ambiente
│
├── documentação/           # Scripts de desenvolvimento
│   └── opencode_changes/   # Histórico de alterações
│
└── README.md               # Este arquivo
```

## 🔐 Variáveis de Ambiente

O projeto utiliza variáveis de ambiente para configuração sensível. Crie um arquivo `.env` na raiz do projeto:

```bash
cp .env.example .env
```

### Variáveis Disponíveis

| Variável | Descrição | Obrigatório |
|----------|-----------|-------------|
| `GROQ_API_KEY` | Chave da API do Groq para o chat de IA | **Sim** |
| `WHATSAPP_NUMBER` | Número do WhatsApp (formato: 5546999999999) | Não |
| `SITE_URL` | URL base do site | Não |

### ⚠️ Importante: Segurança da API Key

**NUNCA** exponha a `GROQ_API_KEY` no código fonte ou repositório Git!

A chave é injetada via:
1. Variável de ambiente no Docker
2. Arquivo `.env` (não commitado)

## 🔑 Configuração da API Groq

1. Acesse [console.groq.com](https://console.groq.com)
2. Crie uma conta ou faça login
3. Vá em **API Keys** → **Create API Key**
4. Copie a chave gerada
5. Adicione ao seu `.env`:
   ```
   GROQ_API_KEY=gsk_xxxxx
   ```

### Modelos Groq Disponíveis (Gratuitos)

O chat de IA utiliza fallback automático entre os seguintes modelos:
1. `llama-3.3-70b-versatile` (prioridade)
2. `mixtral-8x7b-32768`
3. `deepseek-r1-distill-qwen-32b`
4. `llama-3.1-8b-instant`
5. `gemma-7b-it`

## 🐳 Deploy com Docker (Recomendado)

### Pré-requisitos
- Docker instalado
- Docker Compose instalado

### Deploy Rápido

```bash
# 1. Clone o repositório
git clone <repo-url>
cd SITE5

# 2. Configure as variáveis de ambiente
cp .env.example .env
# Edite o .env e adicione sua GROQ_API_KEY

# 3. Build e start
docker-compose up -d

# 4. Verifique o status
docker-compose ps

# 5. Acesse http://localhost:8080
```

### Configuração do Docker Compose

```yaml
# docker-compose.yml
version: '3.8'
services:
  web:
    build: .
    restart: unless-stopped
    ports:
      - "8080:80"
    environment:
      - GROQ_API_KEY=${GROQ_API_KEY}
      - WHATSAPP_NUMBER=${WHATSAPP_NUMBER:-5546999130505}
    env_file:
      - .env
```

### Variáveis de Ambiente via CLI

```bash
# Opção 1: Via arquivo .env
docker-compose --env-file .env up -d

# Opção 2: Via variável de ambiente
export GROQ_API_KEY=sua_chave_aqui
docker-compose up -d

# Opção 3: Inline
GROQ_API_KEY=sua_chave docker-compose up -d
```

### Logs e Debug

```bash
# Ver logs
docker-compose logs -f

# Ver logs de um serviço específico
docker-compose logs -f web

# Reiniciar
docker-compose restart

# Rebuild após alterações
docker-compose up -d --build
```

## 🌐 Deploy Estático

### Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=.
```

### Vercel

```bash
npm install -g vercel
vercel --prod
```

### Apache/Nginx Manual

```bash
# Copie arquivos (excluindo .env)
rsync -avz --exclude='.env' --exclude='.git' ./ user@server:/var/www/html/

# Configure o nginx.conf fornecido
scp nginx.conf user@server:/etc/nginx/conf.d/ebot.conf
```

## 🔒 Segurança

### Headers de Segurança Implementados

O `nginx.conf` inclui:
- `X-Frame-Options: SAMEORIGIN`
- `X-Content-Type-Options: nosniff`
- `X-XSS-Protection`
- `Content-Security-Policy`
- `Referrer-Policy`

### Boas Práticas

1. **API Key**: Jamais commite no Git
2. **Docker**: Use secrets ou variáveis de ambiente
3. **HTTPS**: Configure SSL no proxy reverso
4. **Rate Limiting**: Considere adicionar para APIs públicas
5. **CORS**: APIs externas configuradas apenas para origens necessárias

### Arquivos Protegidos

O nginx bloqueia acesso a:
- Arquivos `.env`
- Arquivos `.git`
- Arquivos de backup (`.bak`, `.backup`)
- Arquivos de sistema (`Thumbs.db`, `.DS_Store`)

## 🛠 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Glassmorphism, Flexbox, Grid
- **JavaScript ES6+**: Vanilla JS
- **Nginx**: Servidor web
- **Docker**: Containerização
- **Leaflet.js**: Mapas (OpenStreetMap)
- **Marked.js**: Markdown parsing
- **Google Fonts**: Inter
- **Font Custom**: Cocogoose Pro Bold

## ✨ Funcionalidades

### Chat de IA
- Integração com API Groq
- Fallback automático entre 5 modelos gratuitos
- Interface com animações de digitação
- Limite de interações por sessão

### Formulário de Contato
- Integração direta com WhatsApp
- Validação de campos
- Redirecionamento seguro

### Mapas
- Leaflet.js + OpenStreetMap
- Sem necessidade de API key
- Marker personalizado

### Animações
- Scroll animations (IntersectionObserver)
- Parallax effects
- Loading counters

## 📱 Compatibilidade

- **Navegadores**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Dispositivos**: 100% Responsivo
- **Telas**: Mobile até Ultra-wide

## 📞 Contato

**Ê-Sistemas**
- **WhatsApp/Telefone**: (46) 99913-0505
- **E-mail Comercial**: comercial.ebot@esistemas.dev.br
- **Endereço**: R. Pedro Alvares Cabral, 905 - Centro Norte, Dois Vizinhos - PR, 85660-000
- **CNPJ**: 53.695.158/0001-90

---

Desenvolvido para a **Ê-Sistemas © 2024-2025**.
