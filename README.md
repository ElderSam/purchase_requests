# Aplicação de Pedido de Compras desenvolvida em ReactJS, Node.js e PostgreSQL
OBS: Por enquanto só desenvolvi parte do backend (node.js)

## DER (Diagrama Entidade Relacionamento):
![alt text](/DER.png "ER (view of the relationship entity)")

OBS: O DER (Diagrama Entidade Relacionamento) foi criado em https://app.sqldbm.com/PostgreSQL/Draft/, mas também pode ser gerado no próprio PgAmin 4 em Tools -> New ERD Project

---------------------
## Descrição do Desafio
### Esta Atividade tem como Objetivo Avaliar os Participantes do Processo Seletivo da Tempo Telecom para Desenvolvedor de Software. Desenvolva sua solução com a lógica de Front-end separada de Back-end. Critérios a serem analisados:


* Lógica de Programação
* Orientação a Objetos
* Desenvolvimento em Camadas (MVC)
* Aplicação das Regras de Negócio apresentadas
* Boas práticas de programação

### Regras de participação

    * O participante terá 48h para desenvolvimento após recebimento da atividade (Caso não conclua toda a atividade nos envie no prazo o que estiver pronto).
    * O participante deverá colocar sua atividade em repositório público (Github ou Bitbucket) e compartilhar conosco o link de acesso.
    * O participante poderá escolher a linguagem de programação que achar mais adequada, porem deverá disponibilizar no README instruções claras de instalação do projeto (inclusive Banco de Dados).
    * Use git e tente fazer commits pequenos e bem descritos.

### Pedidos
Esta atividade tem como objetivo, possibilitar que um usuário realize um pedido de produtos.

#### Pré-Condição (Deverá ser implementada antes dos Pedidos)
    • Produto previamente cadastrado e com situação ativo
    • Cliente cadastrado e com situação ativo

#### Cenário
    1. Usuário acessa o sistema e clica no menu Pedidos
    2. O sistema exibe os pedidos realizados
    3. O usuário clica no Botão Novo
    4. O sistema exibe o formulário de pedido
    5. O usuário preenche o formulário e clica em Salvar
    6. O sistema grava o pedido e exibe a listagem de pedidos 


### Regras de Negócio
#### RN01:  No formulário de cadastro de Cliente, o formulário deverá possuir os seguintes campos:
    • Nome (campo obrigatório)
    • Telefone (campo obrigatório)
    • Data de Nascimento (campo obrigatório)

#### RN02: No formulário de cadastro de Produto, o formulário deverá possuir os seguintes campos:
    • Nome (campo obrigatório)
    • Valor (campo obrigatório)

#### RN03: No cadastro de Pedido:
    • Cliente (Irá listar todos os clientes ativos no sistema) (campo obrigatório)
    • Produto (irá listar todos os produtos ativos no sistema) (campo obrigatório)
    • Valor (Exibir o valor do produto selecionado)
    • O pedido poderá possuir um ou mais produtos.
    • O sistema deverá gravar a data e hora da realização do pedido
    • Deverá ser demonstrado o valor total do pedido.

#### RN04: Na listagem de pedidos deverá possuir as seguintes informações:
    • Número do Pedido
    • Cliente
    • Valor Total
    • Data

#### RN05: Na exibição do pedido deverá ser listados todas as informações do pedido.


### Glossário
*RN: Regra de Negócio