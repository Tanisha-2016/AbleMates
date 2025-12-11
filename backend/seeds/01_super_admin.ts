import { hashPassword } from "../src/utils/password";

export async function seed(knex: any) {
  const exists = await knex("users")
    .where({ email: "admin@ablemates.com" })
    .first();

  if (exists) return;

  const hashed = await hashPassword("Admin@123");

  await knex("users").insert({
    first_name: "Super",
    last_name: "Admin",
    email: "admin@ablemates.com",
    phone: "0000000000",
    password: hashed,

    country: JSON.stringify({ name: "Australia" }),
    state: JSON.stringify({ name: "Victoria" }),
    city: "Melbourne",

    role: "super_admin",
    is_physically_disabled: false,
    disability_unique_id: null,
    is_active: true,
  });

  console.log("Super Admin Created Successfully");
}
