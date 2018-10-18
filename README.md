# turma-faculdade-api

Lucas Hipérides de Oliveira Freire - RA: 140503

Uma RESTFul API em Node JS.
---

1) Clone ou baixe este repositório.

2) Estando no diretório do projeto, abra o console: 
`npm install`

3) Para executar, estando no diretório do projeto, abra o console: 
`npm start`

4) Para testar as requisições, utilize o software de sua preferência ([Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop), por exemplo) e acesse:
`http://localhost:8080`

## Exemplo de requisição (POST):

URL:
`localhost:8080/turma`

Body (JSON):
```
Turma
{
	"disciplina": "Nome da disciplina",
	"nomeProfessor": "João",
	"turno": "matutino",
	"numeroTurma": "7",
	"matriculados": "15",
	"qtdDiponivel": "30"
}

URL:
`localhost:8080/usuario`

Body (JSON):

Usuario
{
	"nome" : "João",
	"senha" : "123",
	"telefone" : "8554545",
	"email" : "joao@api",
	"cpf" : "45678912300"
}

URL:
`localhost:8080/carro`

Body (JSON):

Carro
{
	"modelo" : "fiat",
	"preco" : "10.000",
	"ano" : "2008"
}

URL:
`localhost:8080/sorvete`

Body (JSON):

Sorvete
{
	"sabor" : "morango",
	"preco" : "5"
}

URL:
`localhost:8080/suco`

Body (JSON):

Suco
{
	"sabor" : "laranja",
	"preco" : "3"
}
```

	

