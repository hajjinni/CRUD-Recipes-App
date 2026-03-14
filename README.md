# Recipes CRUD API

## Project Description

The Recipes CRUD API is a backend application built using Node.js, Express.js, and MongoDB. It allows users to create, read, update, and delete recipe records. The project follows the MVC (Model-View-Controller) architecture and provides RESTful API endpoints to manage recipe data.

This application demonstrates backend development concepts such as API design, database integration, error handling, and API documentation using Postman.

---

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Postman

---

## Features

* Create a new recipe
* Retrieve all recipes
* Retrieve a recipe by ID
* Update an existing recipe
* Delete a recipe
* MVC architecture implementation
* Error handling and validation
* API documentation using Postman

---

## Installation and Setup

1. Clone the repository

git clone <repository-url>

2. Navigate to the project folder

cd recipes-api

3. Install dependencies

npm install

4. Start the server

npm run dev

The server will run on:

http://localhost:5000

---

## API Endpoints

| Method | Endpoint         | Description         |
| ------ | ---------------- | ------------------- |
| POST   | /api/recipes     | Create a new recipe |
| GET    | /api/recipes     | Get all recipes     |
| GET    | /api/recipes/:id | Get recipe by ID    |
| PUT    | /api/recipes/:id | Update recipe       |
| DELETE | /api/recipes/:id | Delete recipe       |

---

## Example Request (Create Recipe)

POST /api/recipes

Request Body:

{
"title": "Chicken Biryani",
"ingredients": ["Chicken", "Rice", "Spices"],
"instructions": "Cook chicken and rice together",
"cookingTime": 45,
"difficulty": "Medium"
}

---

## Postman Documentation

All API endpoints have been tested and documented using Postman.
The Postman collection includes sample requests and responses for each CRUD operation.


