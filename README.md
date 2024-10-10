# ThermoSync App

Aplicação para monitoramento de freezers, através de dashboards

Front consome informação dos freezers através de uma API exposta pela ThermoSync

## Grupo composto por:

- João Vitor Figueiredo Espindola
- Arthur Ghizi
- José Gabriel Souza de Castro
- Iuri de Lima Marques
- Eduardo Domingos

## Objetivo

```
Desenvolver um sistema de monitoramento em tempo real para refrigeradores industriais, que consome dados de uma API para exibir de forma clara e intuitiva informações como temperatura e status de operação.
```

## Estrutura do projeto

### 1. Tela de Login

- **Descrição**: Tela inicial onde o usuário insere suas credenciais (nome de usuário e senha) para acessar o sistema.
- **Funcionalidades**:

  - Validação de credenciais.
  - Redirecionamento para o dashboard em caso de sucesso.

  ### 2. Tela de Dashboard

- **Descrição**: Tela principal que exibe os dados em tempo real dos refrigeradores.
- **Funcionalidades**:

  - Gráfico interativo mostrando a temperatura e os dias que a ultima temperatura foi registrada, dos refrigeradores.
  - Notificações de alerta críticas de temperatura.

  ### 3. Tela de CRUD (Create, Read, Update, Delete)

- **Descrição**: Tela para gerenciar os refrigeradores, permitindo ao usuário adicionar, visualizar, editar e remover registros.
- **Funcionalidades**:

  - Formulários para entrada de dados.
  - Listagem de refrigeradores com opções de edição e exclusão.

## Cliente ou Público-alvo

```
O público-alvo do nosso aplicativo são empresas e profissionais que utilizam refrigeradores industriais, como distribuidores de alimentos, indústrias de bebidas e restaurantes. Esses usuários necessitam de um sistema que permita monitorar a temperatura e o estado dos refrigeradores em tempo real para garantir a qualidade e a segurança dos produtos armazenados. A necessidade de uma solução eficiente se torna evidente devido a:
```

- **Conformidade Regulamentar**: Muitas indústrias são obrigadas a seguir normas de segurança alimentar que exigem o monitoramento constante das temperaturas de armazenamento.
- **Prevenção de Perdas**: A monitorização contínua ajuda a prevenir a deterioração de produtos e reduz perdas financeiras associadas a falhas no equipamento.
- **Manutenção Proativa**: Com dados em tempo real, os usuários podem realizar manutenções preventivas, evitando falhas inesperadas e prolongando a vida útil dos refrigeradores.

## Tecnologias, Bibliotecas e Frameworks

Para o desenvolvimento do nosso projeto, decidimos utilizar a seguinte tecnologia:

- **React**: Para criar interfaces de usuário dinâmicas e responsivas. O React nos permite construir componentes reutilizáveis e gerenciar o estado da aplicação de forma eficaz, proporcionando uma experiência fluida ao usuário.
- **Chart.js**: Utilizado para criar gráficos e visualizações de dados, permitindo que os usuários acompanhem as temperaturas dos refrigeradores de forma visual e intuitiva.
- **React Toastify**: Biblioteca para exibir notificações de forma simples e estilizada, proporcionando feedback instantâneo aos usuários sobre alertas críticos de temperatura.

Nosso sistema de monitoramento de refrigeradores possui características e diferenciais que o tornam uma solução valiosa para os usuários. Alguns dos pontos-chave incluem:

- **Interface Intuitiva**: A navegação simples e a organização clara das informações garantem que os usuários consigam acessar dados importantes rapidamente, reduzindo o tempo de resposta em situações críticas.
- **Atualizações em Tempo Real**: A capacidade de monitorar a temperatura em tempo real permite que os usuários identifiquem imediatamente qualquer variação que possa afetar a qualidade dos produtos.

- **Alertas Personalizados**: O sistema poderá enviar notificações em caso de desvios de temperatura, permitindo que os usuários ajam proativamente e evitem perdas.

- **Acessibilidade**: O uso de práticas de design inclusivo garantirá que o sistema seja acessível para todos os usuários, independentemente de suas habilidades.

## Configuração

```
npm install
```

```
npm run dev
```

Recomendo o uso da extensão [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments) para ter o highlight nos comentários
