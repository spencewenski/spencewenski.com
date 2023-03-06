import { mergeRouters } from "@/server-trpc/trpc";
import { publicAppRouter } from "@/server-trpc/routers/public/_public";

export const appRouter = mergeRouters(publicAppRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
