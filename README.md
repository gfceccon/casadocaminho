Esse é um projeto para uma instituição de caridade, com funcionalidades específicas para uso interno.
Projeto feito em [Next.js](https://nextjs.org), [Prisma](https://www.prisma.io), [Zod](https://zod.dev), [tRPC](https://trpc.io) e [shadcn](https://ui.shadcn.com)

## Funcionalidades

### Famílias
* Criação e atualização
* Desabilitar (sem perda de histórico)
* Criação de membros
* Atribuição o membro principal

### Membros da Família
* Criação, atualização e remoção
* Resumo de dependentes
* Participação em eventos
* Validação

### Eventos
* Criação e Atualização e Remoção
* Resumo

### Relatórios
* Frequência
* Filtro por tipo
* Filtro por # de participações
* Geração de PDF de carteirinhas
* Geração de PDF de assinaturas

## Como Rodar
* Instalar o projeto
  `npm install`
* Gerar o banco de dados
  `npm run prisma:push`
* Rodar o projeto em desenvolvimento
  `npm run dev`
* Rodar em modo de produção
  `npm run start`