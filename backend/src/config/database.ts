import knex from "knex";
import config from "../../knexfile";

const db = knex(config.development);

db.raw("SELECT 1")
  .then(() => console.log("✅ Database Connected Successfully"))
  .catch((err) => console.error("❌ DB Connection Error:", err));

export default db;
