// import swaggerJsdoc from "swagger-jsdoc";

// const options: swaggerJsdoc.Options = {
//   definition: {
//     openapi: "3.0.0",
//     info: {
//       title: "CROPSOL_AGRO API",
//       version: "1.0.0",
//       description: "API documentation using Swagger + TypeScript",
//     },
//     servers: [
//       {
//         url: "http://localhost:5000",
//       },
//     ],
//   },
//   apis: [
//     "./src/api/**/*.ts",
//   ],
// };

// const swaggerSpec = swaggerJsdoc(options);

// export default swaggerSpec;

import swaggerJsdoc from "swagger-jsdoc";
import dotenv from "dotenv";

dotenv.config();

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Backend API (MySQL)",
      version: "1.0.0",
      description: "API Documentation using Swagger and TypeScript",
    },
    servers: [
      {
        url: process.env.BASE_URL || "http://localhost:5000",
      },
    ],
  },

  // IMPORTANT — include TS + JS
  apis: [
    "./src/api/**/*.ts",
    "./dist/api/**/*.js"
  ],
};

const swaggerSpec = swaggerJsdoc(options);
export default swaggerSpec;
