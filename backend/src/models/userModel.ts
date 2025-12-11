import knex from "../config/database";

export const userModel = {
  createUser(data: any) {
    return knex("users").insert(data);
  },

 async countUsers() {
  const result = await knex("users").count("* as total");
  return Number(result[0].total); // <-- FIX : convert to number
}
,

  findByEmail(email: string) {
    return knex("users").where({ email }).first();
  },

  findByPhone(phone: string) {
    return knex("users").where({ phone }).first();
  },

  updateById(id: number, data: any) {
    return knex("users").where({ id }).update(data);
  },

  findById(id: number) {
    return knex("users").where({ id }).first();
  },
};
