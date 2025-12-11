import { Knex } from "knex";
import { RoleEnum } from "../src/enums/RoleEnum";

export function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();

    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.string("email").notNullable().unique();
    table.string("phone").notNullable();
    table.string("password").notNullable();
    table.string("confirm_password").notNullable();

    // Changed from JSON → STRING
    table.string("country").notNullable();  
    table.string("state").notNullable();
    table.string("city").notNullable();

    table.boolean("is_mobile_verified").defaultTo(false);
table.timestamp("mobile_verified_at").nullable();

    table.enum("role", [
      RoleEnum.SUPER_ADMIN,
      RoleEnum.NDIS_PARTICIPANT,
      RoleEnum.SUPPORT_WORKER,
      RoleEnum.SERVICE_PROVIDER,
      RoleEnum.BUSINESS_OWNER,
      RoleEnum.LAC
    ]).notNullable();

    table.boolean("is_physically_disabled").defaultTo(false);
    table.string("disability_unique_id").nullable();

    table.boolean("is_active").defaultTo(true);
    table.timestamps(true, true);
  });
}

export function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("users");
}
