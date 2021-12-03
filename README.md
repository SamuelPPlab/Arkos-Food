# Projeto Arkos Food

Bem-vindo ao Read-me do projeto Arkos Food. Aqui você encontra informações sobre o projeto.

## Ideia do projeto: 

A ideia por trás do projeto Arkos Food é criar uma aplicação que permita que o usuário se cadastra, faça login, tenha acesso aos produtos que a API fake products oferece. Também é necessário que o usuário consiga adicionar os produtos no carrinho, e que quando na página de checkout seja mostrado o preço total dos produtos e que tenha a opção de comprar.


## Telas:


### Tela de Login



A primeira coisa que você verá quando abrir o projeto.

Ela possui campos para coletar o email e a senha de usuários já cadastrados.

Avisa quando o nome tem números, e quando a senha é muito curta.

Também há o botão para logar, que fica desativado caso algum dos requisitos acima não sejam cumpridos.

Quando o botão "Entrar" é ativado e você já está cadastrado, você será redirecionado pra página principal.

Ela também avisa quando o email digitado não está cadastrado.

E por último, ela mostra uma opção para ir para a tela de cadastro.



### Tela de cadastro



Se for a sua primeira vez usando o Arkos Food, você vai acabar chegando aqui.

Essa tela possui campos para coletar o nome completo, email, senha e confirmação de senha do usuário.

Ela avisa sobre o nome conter números, senhas muito curtas ou diferentes entre os dois campos, e também caso o formato de email esteja errado.

O botão de cadastro também fica desativado caso algum aviso esteja na tela.

Quando o botão "Cadastrar" é ativado, você será redirecionado pra página principal.

Ela também tem a opção de voltar pra tela de login caso você tenha vindo sem querer.



### Tela Principal



Assim que for redirecionado pra cá, você verá um ícone de "carregando" enquanto a página busca as informações necessárias para ser populada.

No topo direito, há o ícone de um carrinho de compras que mostra o número de itens atualmente no carrinho e se clicado redireciona para a página de checkout. Vou explicar ela depois.

Logo ao lado do ícone do carrinho, há uma mensagem cumprimentando o usuário no formato "Olá, Leitor!", e o seu nome caso clique nele vai abrir um menu.

O menu mencionado acima tem duas opções: Editar os seus dados - que é uma outra página que vou explicar depois, e sair - que vai fazer os seus dados serem apagados da sessão atual, mas caso faça login novamente, todos eles vão estar lá.

Há também uma barra de busca, onde você pode buscar os produtos que a API fake products oferece.

Logo abaixo da barra de busca, ficam os cards dos produtos - oito deles.

Cada card informa o nome do produto, uma foto, avaliações, descrição, e também tem um botão com o preço que permite adicionar ao carrinho.



### Tela de edição de dados



A tela de edição de perfil tem um header igual ao da página principal, com o carrinho e menu mencionados anteriormente.

Tem uma barra de navegação que permite voltar à tela principal caso você não queira fazer mudanças nos seus dados.

Logo abaixo há três campos: Um com o nome completo do usuário logado - que permite a alteração do nome, outro que apenas mostra o email atual, e outro que permite a troca de email.

Todos têm os mesmos requisitos da pagina de login e cadastro para desbloquear o botão de alterar os dados.

Por último, há um botão que confirma as alterações dos dados.



### Tela de Checkout



A tela de checkout tem um header igual ao da tela de perfil e tela principal.

Ela também tem uma barra de navegação que permite que o usuário volte à loja para adicionar mais itens ao carrinho.

Cada item adicionado ao carrinho tem um card que mostra a sua foto, nome, avaliação, descrição, preço, e um botão para remover o item do carrinho.

No fim da lista de itens, há um texto com o total da compra, e um botão "Comprar" que limpa o carrinho, e redireciona pra página principal.


### Tecnologias usadas:

## Redux

Para gerenciar os estados.

## React

Para construir o front.
