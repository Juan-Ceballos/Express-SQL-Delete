# Express-SQL-Delete

A simple demonstration of how to implement DELETE operations in an Express.js application with SQL databases.

## Description

This repository shows how to create a RESTful API with Express.js that can delete records from a SQL database. It focuses specifically on the DELETE HTTP method implementation.

## Getting Started

### Prerequisites

- Node.js
- npm
- PostgreSQL database

### Installation

1. Clone the repository
   ```
   git clone https://github.com/Juan-Ceballos/Express-SQL-Delete.git
   cd Express-SQL-Delete
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Create a `.env` file with your database connection details
   ```
   DB_NAME=your_database
   DB_USER=your_username
   DB_PASSWORD=your_password
   PORT=3000
   ```

4. Start the server
   ```
   npm start
   ```

## API Usage

### Delete a user
```
DELETE /api/users/:id
```

### Delete a post
```
DELETE /api/posts/:id
```

## Learn More

This repo is part of a series on building Express.js applications with SQL databases.

Check out related repositories:
- [Express-SQL-Intro](https://github.com/Juan-Ceballos/Express-SQL-Intro)

## Author

[Juan Ceballos](https://github.com/Juan-Ceballos)
