// import { drizzle } from "drizzle-orm/node-postgres";

// const db = drizzle(process.env.DATABASE_URL!);

// export { db as default };

// src/db.ts
import { drizzle } from "drizzle-orm/node-postgres";

// import { config } from "dotenv";

// config({ path: ".env" }); // or .env.local

export const db = drizzle(process.env.DATABASE_URL!);
