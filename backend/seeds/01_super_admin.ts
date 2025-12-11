import { hashPassword } from "../src/utils/password";

export async function seed(knex: any) {
  // Check if admin already exists
  const exists = await knex("users")
    .where({ email: "admin@ablemates.com" })
    .first();

  if (exists) {
    console.log("Super Admin Already Exists");
    return;
  }

  // Hash Password
  const hashedPassword = await hashPassword("Admin@123");

  // Insert Admin
  await knex("users").insert({
    first_name: "Super",
    last_name: "Admin",
    email: "admin@ablemates.com",
    phone: "0000000000",
    password: hashedPassword,

    country: JSON.stringify({ name: "Australia" }),
    state: JSON.stringify({ name: "Victoria" }),
    city: "Melbourne",

    role: "super_admin",
    is_physically_disabled: false,
    disability_unique_id: null,
    is_active: true,

    // Required for login
    is_mobile_verified: true,
    mobile_verified_at: new Date().toISOString(),

    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  });

  console.log("Super Admin Created Successfully");
}
