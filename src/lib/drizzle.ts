import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

const connectionString = process.env.DATABASE_URL as string;

if (!connectionString) {
  throw new Error("DATABASE_URL environment variable is not set");
}

const sql = neon(connectionString);

const db = drizzle(sql);

export { db as default };

// =======================================

// import { drizzle } from "drizzle-orm/node-postgres";

// const db = drizzle(process.env.DATABASE_URL!);

// export { db as default };
