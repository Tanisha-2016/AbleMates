import knex from "../config/database";

export const userModel = {
  createUser(data: any) {
    return knex("users").insert(data);
  },

  findByEmail(email: string) {
    return knex("users").where({ email }).first();
  },
  findByPhone(phone: string) {
  return knex("users").where({ phone }).first();
},


  findById(id: number) {
    return knex("users").where({ id }).first();
  },
};
