# Ê-Bot / Ê-Sistemas Website

Site institucional e landing pages para os produtos da Ê-Sistemas.

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Deploy com Coolify](#-deploy-com-coolify)
- [Deploy Manual com Docker](#-deploy-manual-com-docker)
- [Configuração da API Groq](#-configuração-da-api-groq)
- [Segurança](#-segurança)
- [Variáveis de Ambiente](#-variáveis-de-ambiente)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Contato](#-contato)

## 🚀 Sobre o Projeto

Site da Ê-Sistemas com landing pages para:
- **Ê-Bot API**: Solução de mensageria com IA
- **Ê-Bot Panel**: CRM e gestão de atendimento
- **Ê-Bot Clinical**: Solução para área da saúde
- **Ê-Bot Explorer**: Ferramenta de exploração de dados

## 📁 Estrutura do Projeto

```
├── *.html                    # Páginas do site
├── css/                      # Estilos CSS
├── js/                      # Scripts JavaScript
│   ├── chat-widget.js       # Chat com IA
│   └── env-config.js        # Variáveis de ambiente
├── assets/                  # Imagens e fontes
├── nginx.conf              # Configuração nginx
├── Dockerfile               # Build Docker
├── docker-compose.yml       # Orquestração
├── .env.example            # Template de variáveis
└── README.md
```

## ☁️ Deploy com Coolify (Recomendado)

### Passo 1: Configurar Repositório no Coolify

1. Acesse seu painel Coolify
2. Clique em **New Resource** → **Application**
3. Conecte seu repositório GitHub
4. Selecione a branch principal

### Passo 2: Configurar Build

1. **Build Pack**: Selecione `Dockerfile` ou `Nixpacks`
2. **Port**: `80`
3. **Exposed Port**: `80`

### Passo 3: Configurar Variáveis de Ambiente

No Coolify, vá em **Environment Variables** e adicione:

| Variável | Valor |
|----------|-------|
| `GROQ_API_KEY` | `sua_chave_aqui` |
| `WHATSAPP_NUMBER` | `5546999130505` |
| `SITE_URL` | `https://seu-dominio.com` |

### Passo 4: Deploy

1. Clique em **Deploy**
2. Aguarde o build finalizar
3. Acesse via HTTPS pelo domínio configurado

### ⚠️ Importante

- A porta **não** deve ser exposta manualmente - o Coolify gerencia o proxy
- Use `expose: "80"` no docker-compose (já configurado)
- O SSL é configurado automaticamente pelo Coolify

## 🐳 Deploy Manual com Docker

### Pré-requisitos
- Docker instalado
- Docker Compose instalado

### Configuração

```bash
# 1. Clone o repositório
git clone <repo-url>
cd SITE5

# 2. Crie o arquivo .env
cp .env.example .env
# Edite o .env e adicione sua GROQ_API_KEY

# 3. Build e start
docker-compose up -d --build

# 4. Ver logs
docker-compose logs -f
```

### Variáveis de Ambiente

Crie um arquivo `.env` com:

```env
GROQ_API_KEY=sua_chave_aqui
WHATSAPP_NUMBER=5546999130505
SITE_URL=https://seu-dominio.com
```

## 🔑 Configuração da API Groq

### Obtendo a API Key

1. Acesse [console.groq.com](https://console.groq.com)
2. Faça login ou crie uma conta
3. Vá em **API Keys** → **Create API Key**
4. Copie a chave gerada

### Modelos Disponíveis (Gratuitos)

O chat utiliza fallback automático entre:
1. `llama-3.3-70b-versatile`
2. `mixtral-8x7b-32768`
3. `deepseek-r1-distill-qwen-32b`
4. `llama-3.1-8b-instant`
5. `gemma-7b-it`

## 🔒 Segurança

### Headers Implementados (nginx.conf)

- `X-Frame-Options: SAMEORIGIN`
- `X-Content-Type-Options: nosniff`
- `Content-Security-Policy` (restrito)
- `Referrer-Policy`

### Boas Práticas

1. **API Key**: Jamais commite no Git
2. Use variáveis de ambiente no Coolify/Docker
3. HTTPS é configurado automaticamente pelo proxy

### Arquivos Protegidos

O nginx bloqueia acesso a:
- `.env`, `.git`, arquivos de backup
- Arquivos de sistema

## 📝 Variáveis de Ambiente

| Variável | Descrição | Obrigatório |
|----------|-----------|-------------|
| `GROQ_API_KEY` | Chave da API Groq | **Sim** |
| `WHATSAPP_NUMBER` | Número WhatsApp | Não |
| `SITE_URL` | URL base do site | Não |

## 🛠 Tecnologias

- HTML5, CSS3 (Glassmorphism)
- JavaScript ES6+
- Nginx + Docker
- Leaflet.js (Mapas)
- Marked.js (Markdown)
- Google Fonts (Inter)
- Groq API (Chat IA)

## 📞 Contato

**Ê-Sistemas**
- **WhatsApp/Telefone**: (46) 99913-0505
- **E-mail**: comercial.ebot@esistemas.dev.br
- **Endereço**: R. Pedro Alvares Cabral, 905 - Centro Norte, Dois Vizinhos - PR
- **CNPJ**: 53.695.158/0001-90

---

Desenvolvido para a **Ê-Sistemas © 2024-2025**.
