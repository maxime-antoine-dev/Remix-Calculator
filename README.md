# Remix Calculator API

## Description

The **Remix Calculator API** project is a REST API that allows users to perform mathematical operations such as addition, subtraction, multiplication, division and more.
The application is built with Remix, uses Tailwind CSS for the landing page design, and Prisma ORM with a SQLite database to store the operation history.

## Features

- **Addition**: Adds two given numbers.
Ex: `/add?x=2&y=3` returns `5`.
- **Subtraction**: Subtracts one number from another.
Ex: `/subtract?x=5&y=3` returns `2`.
- **Multiplication**: Multiplies two numbers.
Ex: `/multiply?x=3&y=4` returns `12`.
- **Division**: Divides one number by another.
Ex: `/divide?x=10&y=2` returns `5`.
- **Square root**: Returns the square root of a number.
Ex: `/sqrt?x=9` returns `3`.
- **Power**: Returns x to the power y.
Ex: `/pow?x=3&y=3` returns `27`.
- **Modulo**: Returns x modulo y.
Ex: `/modulo?x=10&y=3` returns `1`.
- **History**: Returns the history of performed operations.

## Technical Decisions

### 1. Choice of Remix

Remix is a modern framework that allows for creating fast and performant web applications with server-side rendering (SSR). Remix makes it easy to manage routes, data loading, and offers excellent support for client-server transitions. Its focus on user experience was a key factor in this choice.

### 2. Use of Tailwind CSS

Tailwind CSS is a utility-first CSS framework that allows for rapidly designing modern and responsive user interfaces. It provides great flexibility by using utility classes instead of creating custom CSS files, which simplifies development while maintaining visual consistency.

### 3. Prisma ORM with SQLite

Prisma is a modern ORM (Object-Relational Mapping) that simplifies database interactions. SQLite was chosen for its simplicity and ease of integration with Prisma, making it an ideal choice for a small-scale project or prototype. Prisma also allows easy migration to other databases if needed in the future.

### 4. Project Structure

- **API Routes**: The API routes are organized based on mathematical operations. Each route performs the corresponding operation and records the result in the database.
- **Landing Page**: The landing page is designed with Tailwind CSS to be responsive and modern, presenting a simple and straightforward user interface.
- **Database**: A SQLite database is used to store the history of operations, with Prisma handling migrations and queries.

### 5. Operation Logging

Operation logging is managed by Prisma, which stores each operation in the database. This ensures that users can view the complete history of calculations performed via the API.

### 6. Deployment

The project can be deployed on platforms like Vercel or Netlify, which provide strong support for Remix and Prisma. Since SQLite is file-based, it integrates well with lightweight deployments.

## Installation and Usage

1. **Clone the repository**:
```bash
git clone https://github.com/maxime-antoine-dev/Remix-Calculator.git
cd remix-calculator-api
```

2. **Install dependencies:**:
```bash
npm install
```

3. **Initialize the database**:

```bash
npx prisma migrate dev --name init
```

4. **Start the server**:

```bash
npm run dev
```
