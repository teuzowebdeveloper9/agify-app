# Aplicativo Estimador de Idade

Este é um aplicativo simples feito em Svelte que estima a idade de uma pessoa com base no nome digitado, utilizando a API Agify.

## Funcionalidades

- Campo de input para digitar o nome
- Requisição automática à API após digitar (com debounce)
- Exibe a idade estimada para o nome informado
- Atualiza a URL com o nome digitado (querystring)
- Não faz requisição à API se o input estiver vazio
- Usa a função `load()` do SvelteKit para fazer a requisição
- Design responsivo com CSS puro personalizado

## Screenshots

![image](https://github.com/user-attachments/assets/002d7794-b4ec-404b-8a34-8a7b2c0dd399)

![image](https://github.com/user-attachments/assets/98a5adca-d1ec-4e2b-a8f6-c82585e506db)

![image](https://github.com/user-attachments/assets/620623b9-039d-4aa1-9d6d-5b318d2f7619)


## Como Rodar

### Pré-requisitos

- Node.js (versão 14 ou superior recomendada)
- npm (vem junto com o Node.js)

### Instalação

1. Clone o repositório:
git clone [url-do-seu-repositorio]


plainText

2. Entre na pasta do projeto:
cd agify-app


plainText

3. Instale as dependências:
npm install


plainText

### Executando o Aplicativo

Para rodar o servidor de desenvolvimento, use:

```
npm run dev

```
Depois, abra no navegador o endereço:
```
http://localhost:5173
```


## Como Funciona

- O usuário digita um nome no campo de texto.
- Após o usuário parar de digitar por cerca de 700ms (debounce), o aplicativo atualiza a URL com o nome digitado na querystring.
- A função `load()` do SvelteKit é usada para fazer a requisição à API Agify, buscando a idade estimada para o nome.
- Se o campo estiver vazio, a página não faz a requisição nem recarrega.
- O resultado é exibido automaticamente na tela, sem necessidade de apertar Enter ou clicar em botão.

## Tecnologias Usadas

- SvelteKit (Svelte 4 ou 5)
- JavaScript puro
- CSS puro dentro do componente Svelte (`<style>`)
- ESLint para manter a identação e qualidade do código
- Git para controle de versão

## Observações

- A URL atualiza dinamicamente para que possa ser copiada e colada, mantendo o resultado da consulta.
- O CSS foi feito manualmente, sem frameworks ou preprocessadores, para estilizar o input e o layout de forma simples e agradável.
