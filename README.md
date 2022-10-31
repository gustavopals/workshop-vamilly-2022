# WorkshopVamilly2022

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.7.

### Passo a passo

## Requisitos

- Node +16

## Criar novo projeto do zero

Instalar Angular/CLI

`npm i -g @angular/cli@14`

Novo projeto

`ng new workshop-vamilly-2022 --skip-install`

Instalar dependencias

`npm install`

Adicionar pacotes @po-ui/ng-components

`ng add @po-ui/ng-components`

Adicionar pacotes @po-ui/ng-templates

`ng add @po-ui/ng-templates`

Adicionar pacotes do tema de cores oficial da totvs

`npm i @totvs/po-theme`

Em seguida, atualize o arquivo angular.json para utilizar o tema.

```json
	"styles": [
	"node_modules/@totvs/po-theme/css/po-theme-default-variables.min.css",
	"node_modules/@totvs/po-theme/css/po-theme-default.min.css",
	"node_modules/@po-ui/style/css/po-theme-core.min.css",
]
```

## Rode seu projeto

`ng serve`
