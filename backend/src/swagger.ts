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

const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Backend API (MySQL)",
      version: "1.0.0",
    },
  },
  apis: ["./src/api/**/*.ts"],
});

export default swaggerSpec;
