import { router } from "@/server-trpc/trpc";
import { sendMessageFromContactPage } from "@/server-trpc/routers/public/sendMessageFromContactPage";
import { healthCheck } from "@/server-trpc/routers/public/healthCheck";

export const publicAppRouter = router({
  sendMessageFromContactPage,
  healthCheck,
});
