// Avoid exporting the entire t-object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.
import { initTRPC } from "@trpc/server";
import { Context } from "@/server-trpc/context";
import superjson from "superjson";

// todo: rename this file to avoid confusion with the one in utils/trpc

const t = initTRPC.context<Context>().create({
  transformer: superjson,
});

// Base router and procedure helpers
export const router = t.router;
export const mergeRouters = t.mergeRouters;
export const appProcedure = t.procedure;
