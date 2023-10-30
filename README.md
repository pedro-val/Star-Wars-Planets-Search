# Boas-vindas ao repositório do projeto Star Wars Planets Search!

Foi desenvolvida uma lista com filtros de planetas do universo de Star Wars usando Context API e Hooks para controlar os estados globais.

**Aqui está o link do deploy do modelo do projeto: [Exemplo do Projeto](http://trybe-starwars-exemplo.surge.sh/)**

## 📝 Habilidades

Nesse projeto, você desenvolveu:

- Utilização da Context API do React para gerenciar estado.
- Utilização dos React Hooks useState;
- Utilização dos React Hooks useContext;
- Utilização dos React Hooks useEffect;
- Criação de React Hooks customizados.
- Escrita de testes para garantir que a aplicação possua uma boa cobertura de testes.



**1 - Fez uma requisição para o endpoint /planets da API de Star Wars e preencheu uma tabela com os dados retornados, com exceção dos dados da coluna residents**

Ilustração da tabela:

- A tabela foi renderizada por um componente chamado Table:
- A coluna residents de cada planeta foi apagada antes de salvar os dados recebidos da API no contexto.
- A requisição foi feita em um componente separado do componente da tabela.
- A API foi consultada através desse link. Foi feito um fetch para a URL https://swapi.dev/api/planets.
- A primeira linha da tabela continha os headers de cada coluna. As demais linhas foram as informações de cada planeta recebido da API.

**2 - Criou um filtro de texto para a tabela**

A tabela foi atualizada com os planetas que se encaixavam no filtro à medida que o nome foi digitado, sem a necessidade de apertar em um botão para efetuar a filtragem. Por exemplo, se fosse digitado "Tatoo" no campo de texto, o planeta "Tatooine" foi exibido, como demonstrado na ilustração:

**Observações técnicas**

- O campo de texto possuía a propriedade data-testid='name-filter' para que a avaliação automatizada funcionasse;
- Foi utilizado Context API e Hooks para fazer o gerenciamento do estado da aplicação, facilitando o desenvolvimento dos próximos requisitos.

**3 - Criou um filtro para valores numéricos**

**4 - Implementou múltiplos filtros numéricos**

**5 - Desenvolveu testes para atingir 30% de cobertura total da aplicação**

**6 - Não utilizou filtros repetidos**

**7 - Apagou um filtro de valor numérico ao clicar no ícone X de um dos filtros e apagou todas filtragens numéricas simultaneamente ao clicar em outro botão de Remover todas filtragens**

**8 - Desenvolveu testes para atingir 60% de cobertura total da aplicação**

**9 - Ordenou as colunas de forma ascendente ou descendente**

**10 - Desenvolveu testes para atingir 90% de cobertura total da aplicação**

