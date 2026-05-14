# 🚀 TechWave Store - E-commerce API

## 📝 Planejamento do Projeto

### Sprint 1: Levantamento de Requisitos
1. **Requisitos Funcionais**
   - RF01 - Cadastro e Login (Implementado)
   - RF02 - Gestão de Produtos CRUD (Implementado)
   - RF03 - Catálogo de Produtos (Implementado)
   - *RF04/05/06 - (Próximas fases)*

2. **Requisitos Não Funcionais**
   - RNF01 - Banco de Dados MySQL
   - RNF03 - Comunicação via JSON
   - RNF04 - Versionamento via GitHub

### Sprint 2: Modelagem de Dados (MySQL)
- **Usuarios**: id, nome, email, senha, tipo.
- **Produtos**: id, nome, descricao, preco, estoque, categoria_id.

---

## Implementação Técnica (Sprints 3 - 6)

Nesta fase, o projeto foi transformado em uma API funcional com segurança e documentação.

### Novas Tecnologias Implementadas
* **JWT (JSON Web Token)**: Segurança nas rotas de produtos.
* **Bcrypt**: Criptografia de senhas para segurança do usuário.
* **Swagger**: Documentação interativa da API.
* **CORS**: Permissão de acesso para o Frontend.

### Estrutura do Projeto Atualizada
* `/src/controllers`: Lógica de autenticação e produtos.
* `/src/routes`: Definição dos caminhos e documentação Swagger.
* `/src/middlewares`: Proteção de rotas (Token).
* `/public`: Interface do usuário (Frontend/Catálogo).

## Como Executar e Testar
1. Instale as dependências: `npm install`
2. Inicie o servidor: `npm start`

### Links de Acesso (Servidor Local)
* **Catálogo Visual (Frontend):** [http://localhost:3000/index.html](http://localhost:3000/index.html)
* **Documentação Técnica (Swagger):** [http://localhost:3000/api-docs](http://localhost:3000/api-docs)