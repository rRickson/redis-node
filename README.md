# Redis NodeJs - JavaScript

Redis com NodeJS - JavaScript, configurado funcionando, projeto gerado atraves do **[YEOMAN - Generator-oss-project](https://github.com/robertoachar/generator-oss-project)**.

>Projeto feito com a premissa de ajudar e sanar duvidas relacionadas ao NodeJs e Redis.


## Pacotes

 - [IOREDIS](https://github.com/luin/ioredis)
 - [CORS](https://github.com/expressjs/cors)
 - [EXPRESS](https://github.com/expressjs/express)
 - [UUID](https://github.com/kelektiv/node-uuid)
 
 ## Utilizando
	#NodeJS
		node .\src\index.js

	#Postman
	> Post
	'	>localhost:8180/cacheUser
		>Body: RAW  = {"values":{"name":"Teste Redis Node", "email":"rickson.vasc@gmail.com", "department":"ADMIN"}}
		>Res: UUID
	>Get
		>localhost:8180/getUser/:UUID
		> Res: Informação inserida vinda do redis.