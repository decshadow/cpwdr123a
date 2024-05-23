## Project Overview

This project is a web application built with Next.js that interfaces with MongoDB's cloud-based "Sample Analytics Dataset." The application is designed to retrieve and display data, focusing on customer and account information as per the assignment requirements.

This is a [Next.js](https://nextjs.org/) + [Apollo GraphQL](https://www.apollographql.com/docs/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Key Features

- **Data Retrieval:** Data is fetched from MongoDB Atlas using mongoose schemas aligned with the specific collections within the "Sample Analytics Dataset."
- **Frontend Display:** The frontend is crafted to present the data in a user-friendly manner, accessible via the root URL.
- **API Integration:** Utilizes Next.js API routes to handle backend requests and serve data to the frontend.
- **Unit Testing:** Implement unit tests using Jest to ensure the reliability and correctness of the backend logic and API routes.
- **Containerization:** Use Docker to containerize the application, ensuring consistency across various development and production environments.

### Technical Structure

- **Database Schemas:** Three mongoose schemas correspond to the main collections in the MongoDB dataset. The application currently utilizes the 'customers' and 'accounts' collections.
- **API Routes:**
  - **GraphQL API:** Implemented at `/pages/api/graphql`, providing a structured data query capability using GraphQL.

### Navigating the Application

- **Homepage:** Visit `http://localhost:3000` to view the main interface.
- **Customers Data:** The customer data can be accessed by navigating to `/customers` on the local server.
- **API Access:**
  - GraphQL API: Interact with the GraphQL endpoint through `http://localhost:3000/api/graphql`

### Sample Data

For more details on the MongoDB dataset used, visit the [MongoDB Atlas Sample Analytics Dataset documentation](https://www.mongodb.com/docs/atlas/sample-data/sample-analytics/).

## Used Technologies

This project utilizes several key technologies:

- [Next.js](https://nextjs.org/) - A React framework for building server-side rendering and static web applications.
- [Apollo GraphQL](https://www.apollographql.com/) - A comprehensive GraphQL implementation, used to manage data between the cloud and UI.
- [Chakra UI](https://chakra-ui.com/) - A simple, modular and accessible component library that gives you the building blocks to build your React applications.
- [Mongoose](https://mongoosejs.com/) - An elegant mongodb object modeling for node.js.
- [Jest](https://jestjs.io/) - A delightful JavaScript Testing Framework with a focus on simplicity.
- [Docker](https://www.docker.com/) - A platform for developing, shipping, and running applications inside lightweight containers.



## Prerequisites
Ensure you have the following installed:
- [Node.js v22.2.0](https://nodejs.org/en)
- npm v10.7.0

## Installation
Clone the repository and install dependencies with the following commands:

```bash
git clone git@github.com:supermarioknight/compass-sample-analytics-dataset.git
cd compass-sample-analytics-dataset
npm install
```

## Getting Started

First, run the development server on Local:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Run the development server using Docker:
```bash
# building image
docker build -t image-name .  
# run container
docker run --rm -p 3000:3000 --name <container-name> <image-name>
# stop container
docker stop <container-name>
```