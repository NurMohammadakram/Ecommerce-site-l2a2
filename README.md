# Getting started

## To start the project in Development

    "start:dev": "ts-node-dev --respawn --transpile-only ./src/server.ts"

## To start the project in production

    "start:prod": "node ./dist/server.js"

## To convert typeScript to Js

    "build": "tsc --watch",

## eslint for linting

    "lint": "eslint .",
    "lint:fix": "eslint . --fix"

## prettier

    "prettier": "prettier --ignore-path .gitignore --write \"./src/**/*.+(js|ts|json)\"",
    "prettier:fix": "prettier --write src"

# API request endPoints

## Creating a new products

    send a POST request.
    api end points: POST /api/products

## Getting all products

    send a GET request
    api end points: GET /api/products

## Get a single product by \_id

    send a GET request.
    api end points: GET /api/products/:productId

## Update a product

    send a PUT request.
    api end points: PUT /api/products/:productId

## Delete a product

    send a DELETE request.
    api end points: DELETE /api/products/:productId

## Search a product

    send a GET request.
    api end point: GET /api/products?searchTerm=iphone

## Create a new order

    send a POST request.
    api end points: POST /api/orders

## Get all the orders

    send a GET request.
    api end points: GET /api/orders

## Retrieve orders by email

    send a GET request
    api end point: /api/orders?email=level2@programming-hero.com
