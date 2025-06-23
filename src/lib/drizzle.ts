import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

const connectionString = process.env.DATABASE_URL as string;

if (!connectionString) {
  throw new Error("DATABASE_URL environment variable is not set");
}

const sql = neon(connectionString);

export const db = drizzle(sql);

// =======================================

// import { drizzle } from "drizzle-orm/node-postgres";

// const db = drizzle(process.env.DATABASE_URL!);

// export { db as default };

// src/db.ts
// import { drizzle } from "drizzle-orm/node-postgres";

// import { config } from "dotenv";

// config({ path: ".env" }); // or .env.local

// export const db = drizzle(process.env.DATABASE_URL!);
