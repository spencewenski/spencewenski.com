import { appProcedure } from "@/server-trpc/trpc";

export const healthCheck = appProcedure.query(async () => "success");
