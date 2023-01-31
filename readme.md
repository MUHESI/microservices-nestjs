# Nest.js Microservices

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

In this project In this short tutorial, I create a Nest.js project with Microservices along with an API Gateway.

<br/>
we have 3 projects :

- sample-backend : To create user, emit data and getAnalytics
- sample-communication : To handle a user created from sample-backend 
- sample-analytic: To save a user in an analytic's array and resend, also send allAnalytics via a MessagePattern

<br/>

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run dev

# production mode
$ npm run start:prod
```

## DataBase

No any database implemented, just some constantes.
