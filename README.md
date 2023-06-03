# User Authentication

This project provides user authentication functionality for web applications. It allows users to register and sign in securely, with protection for authorized routes. It ensures user privacy and data security while simplifying the authentication process.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)

## Introduction

The User Authentication project provides a secure way to handle user authentication in web applications. It allows users to register, sign in, and access protected parts of the application. By using techniques like password hashing and token-based authentication, it ensures that user data is kept safe and authentication is efficient. Built with modern web technologies and the user-friendly Express.js framework, this project helps enhance the security and user experience of your web application.

## Installation

To install and run the User Authentication project, follow these steps:

1. Install the project dependencies by running the following command:

```bash
    npm install
```

2. Create a database for the project and update the `config.json` file with your database credentials.

3. Run the database migrations to set up the required tables by executing the following command:

```bash
    npx sequelize-cli db:migrate
```

4. Update the environment configuration file (`.env`) by adding the following variables:

- `PORT`: The port on which the application will run.
- `JWT_SECRET`: The secret key used for signing JSON Web Tokens (JWTs).

5. Start the application by running the following command:
