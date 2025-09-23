import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {

  const updatedAt = new Date().toISOString();

  const databaseVersionResult = await prisma.$queryRaw`SHOW server_version;`

  const databaseVersionValue = databaseVersionResult[0].server_version

  const databaseMaxConnectionsResult = await prisma.$queryRaw`SHOW max_connections;`;
  const databaseMaxConnectionsValue = databaseMaxConnectionsResult[0].max_connections

  const databaseName = process.env.PGDATABASE;
  const databaseOpenedConnectionResult = await prisma.$queryRaw`SELECT count(*)::int FROM pg_stat_activity WHERE datname= ${databaseName};`
  const databaseOpenedConnectionValue = databaseOpenedConnectionResult[0].count

  return NextResponse.json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: databaseVersionValue,
        max_connections: parseInt(databaseMaxConnectionsValue),
        opened_connections: databaseOpenedConnectionValue
      }
    }
  });
}