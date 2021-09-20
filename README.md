# PRODUCT SCRAP
## Install Docker desktop for your OS
[Docker](https://www.docker.com/products/docker-desktop)

## Inside the main project's folder execute the commands bellow

1. To download the mongo container
```docker-compose pull ServiceName```

2. To build the project
```docker-compose build```

3. To run container in detached mode
````docker-compose up -d```

4. Access the route bellow to more information
```http://localhost:3009/api/scrap?url=[product_URL] ```


## The aplication

A aplicação dinamicamente analisa qual foi a URL informada, selecionando assim qual algoritmo de scraper utilizar devido a particularidade de cada página.

## Justifications - BR

1. Foi utilizado nodeJS como backend juntamemente com docker-compose para containerização da solução.
2. Como biblioteca de scraper, foi utilizado o Cheerio para demostrar que mesmo uma biblioteca não muito complexa é possível conseguir resultados interessantes. Acredito que um ponto de melhoria seria utilizar o [Selenium](https://www.selenium.dev/).
3. Foi utilizado o mongoDB por sua simplicidade e performance para este tipo de dado.
4. Foi utilizado o [Jest](https://jestjs.io/) juntamente com o supertest para testes unitários bem como de endpoint assíncronos. Foram desenvolvidos poucos testes unitários pelo pouco tempo que possuo para o desenvolvimento do desafio.

## Suggestions

1. Utilização do eslint
2. Utilização do git actions
