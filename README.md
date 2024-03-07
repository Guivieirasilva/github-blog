# GitHub Blog

Este é um projeto desenvolvido como parte da trilha de ReactJS do IGNITE, pela Rocketseat. O GitHub Blog é um sistema de busca e exibição de issues utilizando a [GitHub Users API](https://docs.github.com/pt/rest/users/users#get-a-user) e a [GitHub Search API](https://docs.github.com/pt/rest/search).

## Tecnologias Utilizadas

- **ReactJS**: Biblioteca JavaScript para construção de interfaces de usuário.
- **React Router DOM**: Para gerenciamento de rotas na aplicação.
- **Tailwind CSS**: Uma estrutura de estilo utilitário altamente configurável para estilização rápida e eficiente.
- **React Markdown**: Para renderização de conteúdo Markdown.
- **React Syntax Highlighter**: Para realce de sintaxe em blocos de código.
- **date-fns**: Para formatação de datas.
- **Axios**: Para fazer requisições HTTP para a API do GitHub.

## Funcionalidades

- **Pesquisa de Usuário**: Permite buscar usuários do GitHub pelo nome.
- **Exibição de Perfil**: Mostra informações detalhadas sobre o perfil do usuário, como avatar, nome, bio e número de seguidores.
- **Listagem de Issues**: Exibe as issues relacionadas ao repositório do usuário pesquisado.
- **Detalhes da Issue**: Permite visualizar detalhes de uma issue específica, incluindo título, corpo, data de criação e status.
- **Renderização de Conteúdo Markdown**: Suporte para renderizar conteúdo Markdown diretamente na aplicação.
- **Realce de Sintaxe**: Destaca a sintaxe de blocos de código dentro das issues.

## Páginas

### Blog

Nesta página, você encontrará a lista de issues do próprio repositório, exibindo seus títulos, datas de criação e uma breve descrição.

![GitHub Blog - Página Inicial](https://github.com/Guivieirasilva/github-blog/assets/95317866/e6fd84d9-0057-4271-b3b3-998f24dce122)

### Post

Aqui, você terá acesso aos detalhes de uma issue específica, incluindo seu conteúdo formatado.

![GitHub Blog - Detalhes da Issue](https://github.com/Guivieirasilva/github-blog/assets/95317866/51d9e3e5-117f-421e-bf60-768201456428)
