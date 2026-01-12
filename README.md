# 📚 Learning Tracker

O **Learning Tracker** é uma aplicação web desenvolvida para ajudar estudantes e desenvolvedores a organizarem seus estudos. O sistema permite criar "Trilhas de Conhecimento" e gerenciar tarefas de aprendizado dentro de cada trilha.

Este projeto foi construído para aplicar conceitos fundamentais de desenvolvimento Backend, como arquitetura **MVC**, padrão **Repository** e renderização dinâmica com **EJS**.

## 🚀 Tecnologias

- **Node.js**
- **Express.js**
- **EJS** (View Engine)
- **JavaScript** (ES6+)
- **ESLint & Prettier** (Padronização de código)

## ⚙️ Funcionalidades

- **Gerenciamento de Trilhas (CRUD):**
  - Criar novas trilhas de estudo (ex: "Aprender Node.js").
  - Listar todas as trilhas cadastradas.
  - Editar informações da trilha.
  - Excluir trilhas.
- **Gerenciamento de Tarefas:**
  - Adicionar tarefas específicas dentro de uma trilha.
  - Visualização do status das tarefas.

## 🛠️ Arquitetura do Projeto

O projeto segue a arquitetura **MVC (Model-View-Controller)** para garantir a separação de responsabilidades:

src/ 
├── controllers/
    # Lógica de controle das requisições 
├── models/ 
    # Definição das entidades (Track, Task) 
├── repositories/ # Camada de acesso a dados (In-Memory) 
├── routes/ # Definição das rotas da API 
├── views/ # Templates EJS para o Frontend 
└── server.js # Ponto de entrada da aplicação


## 🔧 Como rodar o projeto

### Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git], [Node.js].

### 🎲 Rodando a aplicação

```bash
# Clone este repositório
$ git clone https://github.com/leonarrdodev/learning-tracker.git

# Acesse a pasta do projeto no terminal/cmd
$ cd learning-tracker

# Instale as dependências
$ npm install

# Configure as variáveis de ambiente
# Crie um arquivo .env na raiz e defina a porta (ex: PORT=3000)

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor iniciará na porta:3000 - acesse <http://localhost:3000>
📝 Autor
Desenvolvido por Leo.
