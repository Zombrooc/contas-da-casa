import { betterAuth } from "better-auth";
import { organization } from "better-auth/plugins";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";

export const auth = betterAuth({
  baseURL: process.env.NEXT_PUBLIC_APP_URL as string,
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  user: {
    additionalFields: {
      isOnboardingCompleted: {
        type: "boolean",
        input: false,
        default: false,
      },
    },
  },
  socialProviders: {
    google: {
      accessType: "offline",
      prompt: "select_account consent",
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60, // Cache duration in seconds
    },
  },
  rateLimit: {
    window: 10, // time window in seconds
    max: 100, // max requests in the window
  },
  trustedOrigins: [
    "http://localhost:3000",
    "https://contas-da-casa.vercel.app",
    "https://localhost:3000",
    "https://turbo-funicular-96p9gvw5wj9cx4jx-3000.app.github.dev",
  ],
  account: {
    accountLinking: {
      enabled: true,
    },
    encryptOAuthTokens: true,
  },
  logger: {
    disabled: false,
    disableColors: false,
    level: "error",
    log: (level, message, ...args) => {
      // Custom logging implementation
      console.log(`[${level}] ${message}`, ...args);
    },
  },

  plugins: [organization()],
});
