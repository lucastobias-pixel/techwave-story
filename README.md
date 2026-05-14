TechWave Store

## Sprint 1: Levantamento de Requisitos

1. Requisitos Funcionais (O que o sistema faz)

RF01 - Cadastro e Login: O sistema deve permitir que usuários se cadastrem e façam login (Clientes e Administradores).
RF02 - Gestão de Produtos (CRUD): O administrador deve poder cadastrar, listar, atualizar e excluir produtos.
RF03 - Catálogo de Produtos: O cliente deve poder visualizar a lista de produtos disponíveis.
RF04 - Carrinho de Compras: O usuário deve poder adicionar, remover e alterar a quantidade de itens no carrinho.
RF05 - Finalização de Pedido: O sistema deve registrar o pedido do cliente e atualizar o estoque.
RF06 - Cálculo de Frete: O sistema deve integrar-se a uma API externa (ex: ViaCEP) para validar endereços e simular entrega.


2. Requisitos Não Funcionais (Como o sistema é)

RNF01 - Banco de Dados: O sistema deve utilizar o banco de dados relacional MySQL.
RNF02 - Persistência de Dados: O sistema deve garantir que as informações de produtos e usuários sejam armazenadas de forma permanente.
RNF03 - Padronização de Comunicação: A troca de dados entre o sistema e o cliente deve ser feita exclusivamente no formato JSON.
RNF04 - Ambiente de Desenvolvimento: O código-fonte deve ser versionado no GitHub.
RNF05 - Disponibilidade: A API deve ser desenvolvida para rodar em ambiente local (localhost) e estar preparada para deploy em nuvem.


## Sprint 2: Modelagem de Dados (MySQL)

### Entidades e Atributos:

1. **Usuarios**
   - `id`: INT (PK)
   - `nome`: VARCHAR(255)
   - `email`: VARCHAR(255) (UNIQUE)
   - `senha`: VARCHAR(255)
   - `tipo`: VARCHAR(50)

2. **Produtos**
   - `id`: INT (PK)
   - `nome`: VARCHAR(255)
   - `descricao`: TEXT
   - `preco`: DECIMAL(10,2)
   - `estoque`: INT