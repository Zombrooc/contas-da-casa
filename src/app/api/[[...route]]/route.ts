import { Hono } from "hono";
import { handle } from "hono/vercel";

import wallets from "./wallets";
import transactions from "./transactions";
import categories from "./categories";
export const runtime = "nodejs";

const app = new Hono().basePath("/api");

app.route("/wallets", wallets);
app.route("/transactions", transactions);
app.route("/categories", categories);

export const POST = handle(app);
export const GET = handle(app);
export const PUT = handle(app);
export const DELETE = handle(app);
