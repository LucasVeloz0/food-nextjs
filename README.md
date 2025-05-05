# 🍕 Cardápio Digital da Pizzaria

Este é um projeto didático desenvolvido com **Next.js**, que simula um cardápio digital para pizzarias, com funcionalidades modernas de autenticação e gerenciamento de perfil de usuário.

## 🔧 Funcionalidades

- ✅ Cadastro e login de usuários com e-mail e senha
- 🔐 Senhas criptografadas com **bcrypt**
- 📧 Login via Gmail utilizando **NextAuth**
- 📝 Edição de perfil
- 🌐 Conexão com banco de dados **MongoDB**
- 💡 Interface moderna utilizando React e Next.js

## 🧰 Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [MongoDB + Mongoose](https://mongoosejs.com/)
- [NextAuth.js](https://next-auth.js.org/)
- [Bcrypt](https://github.com/kelektiv/node.bcrypt.js)

## 🚀 Como rodar o projeto localmente

### 1. Clone o repositório

```bash
git clone https://github.com/LucasVeloz0/food-nextjs.git
cd food-nextjs
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto com o seguinte conteúdo:

```env
MONGODB_URI=seu_mongodb_uri
GOOGLE_CLIENT_ID=seu_id_google
GOOGLE_CLIENT_SECRET=sua_senha_google
NEXTAUTH_SECRET=uma_chave_aleatória
NEXTAUTH_URL=http://localhost:3000
```

> Obs: Para o login com Google funcionar, crie credenciais OAuth 2.0 na [Google Cloud Console](https://console.cloud.google.com/).

### 4. Rode o projeto

```bash
npm run dev
```

Acesse em `http://localhost:3000`

## 📂 Estrutura do Projeto

```
/pages          → Páginas principais e rotas
/components     → Componentes reutilizáveis
/lib            → Funções auxiliares (ex: auth, db)
/models         → Modelos do banco de dados com Mongoose
/public         → Imagens e arquivos públicos
/styles         → Estilos globais
```

## 👨‍🏫 Objetivo

Projeto criado com fins educacionais, acompanhando tutoriais do YouTube e expandido com autenticação, criptografia de senhas e integração com MongoDB.

---

Feito com ❤️ por [Lucas Velozo](https://github.com/LucasVeloz0)