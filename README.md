# Tela de Login/Cadastro Refugiada

## Aluno: Gabriel Negreiros Piffer
## Matrícula: 202299905
## Turma: CC1Mb

### Tive como objetivo fazer a parte de Login, Cadastro e Esqueceu a senha, então somente essas partes estão funcionais a página da Org foi utilizada somente como demonstração após o login, então ela se encontra simples

### HTML
#### Nos códigos HTML utilizei os comandos de: 
* div 
* img 
* input  
* a href

### JavaScript
#### Utilizei como base a aula do dia 10/05 que foi de Local Storage, alterei as informaçãos desta aula e coloquei as corretas, criei 3 funcões:
* A primeira foi a função "salvar", onde contem as variáveis "email" e "senha" e salvando elas no 'localStorage' com as chaves "user" e "content" após isso redireciona para a página principal de login, no caso o index
* A segunda foi a função "enviar", onde quando ela era clicada ela mandava um 'alert' e redireciona para a página principal de login, no caso o index
* A terceira foi a função "verificar", onde contem as variáveis "lemail" e "lsenha", contem também um 'if' que compara o "lemail" e a "lsenha" e se for compatível aparece um 'alert' dizendo "Bem Vindo" e o usuário é redirecionado para a página da org, temos também um 'else if' que compara e quando incorretos emite um 'alert' dizendo "Ops, errou algo, tente novamente"
