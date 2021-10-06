# Especificações Do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Contexto.md"> Documentação de Contexto</a></span>

> Definimos os problemas e os pontos mais relevantes a serem tratados neste projeto, através de uma pesquisa com participação de usuários que teriam interesse na questão levantada pelos membros do grupo, através de perguntas e pesquisas. Levantamos estes dados em forma de personas e histórias dos potenciais usuários, e apresentamos requisitos e restrições em forma de prioridades.

## Personas

Júlia tem 15 anos, é estudante. Pensa em estudar bastante pois tem medo de não ser bem sucedida,
mas tem muita dificuldade para escolher o caminho que quer seguir, é solteira e sonha em encontrar
um grande amor, é altamente influenciada pelas redes sociais e gosta muito de sair para festas
e assistir as séries do momento.

Cecília tem 37 anos, é engenheira civil. Bem sucedida e viciada em trabalho, possui um filho e 
vários hobbies, gosta muito de viajar, frequentar bons restaurantes com as amigas, mas como 
trabalha muito, gosta de chegar em casa e assistir alguma série para relaxar e distrair a mente.

Nicolas tem 23 anos, é estudante em uma universidade. Correndo sempre atrás de estabilidade financeira, tem medo de se formar e não conseguir um bom emprego,
tem uma boa relação com a familia e os amigos, gosta de comprar roupas de marca e jogos de computador, principalmente de ação. Nas horas vagas costuma jogar
jogos online e ver alguma série ou filme com os amigos.

Paulo tem 68 anos, já está aposentado. Ainda é casado, e foi apresentado ao mundo virtual através de sua família, no qual compreendeu as grandes vantagens
de poder se ver o filme favorito a hora que quiser, mas ainda não está acostumado com a tecnologia, e possui outros hobbies como cuidar de suas plantas, 
assistir TV aberta entre outros, gostaria de assistir o filme que quiser, a hora que quiser, com a sua família.

## Histórias de Usuários

Com base na análise das personas foram identificadas as seguintes histórias de usuários:

|EU COMO...  PERSONA | QUERO/PRECISO ... FUNCIONALIDADE   |PARA ... MOTIVO/VALOR                   |
|--------------------|------------------------------------|----------------------------------------|
|Júlia               | Registrar o que já assisti         | Me organizar melhor                    |
|Júlia               | Recomendações                      | Saber o que assistir depois            |
|Cecília             | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Cecília             | Alterar permissões de acesso       | Controlar quem usa minha conta         |
|Nicolas             | Organização                        | Lembrar o que já assistiu              |
|Nicolas             | Recomendações                      | Receber e recomendar aos amigos        |
|Paulo               | Acesso facilitado                  | Conseguir ver o filme sem dificuldades |
|Paulo               | Disponibilidade de plataforma      | Poder ver na TV ou no Notebook         |
|Administrador       | Controle de acesso                 | Permitir que possam administrar contas |
|Administrador       | Acesso ao fluxo de usuários        | Saber o que está dando certo e errado  |


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário escolha o filme/série. | ALTA | 
|RF-002| O site deve apresentar na página principal as opções disponíveis.  | ALTA |
|RF-003| O site deve apresentar, para cada filme ou série, uma imagem correspondente. | ALTA |
|RF-004| O site deve oferecer uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar um texto específico que será informado na caixa de pesquisa.      | ALTA | 
|RF-005| O site deve permitir salvar os filmes preferidos        | MÉDIA |
|RF-006| O site deve oferecer recomendações de acordo com o gosto do usuário      | BAIXA | 
|RF-007| O site deve permitir avaliação do usuário em relação ao que assistiu        | BAIXA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deve ser responsivo para rodar em dispositivos móveis | ALTA | 
|RNF-002| O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge)  | ALTA |
|RNF-003| O site deve ser publicado em um ambiente acessível publicamente na Internet (Repl.it, GitHub Pages, Heroku) | ALTA | 
|RNF-004| O site deve ser seguro para o usuário em relação a suas informações pessoais | ALTA | 
|RNF-005| Deve processar requisições do usuário em no máximo 3s | MÉDIA | 
|RNF-006| O site deve ter o máximo de idiomas em dublagem e legenda disponíveis | MÉDIA | 



## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre. |
|02| Não pode ser desenvolvido um módulo de backend.        |
|03| A equipe não pode subcontratar o desenvolvimento do trabalho. |
|04| Limitações técnicas dos desenvolvedores                |
