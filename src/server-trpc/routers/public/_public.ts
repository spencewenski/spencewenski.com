import { router } from "@/server-trpc/trpc";
import { sendMessageFromContactPage } from "@/server-trpc/routers/public/sendMessageFromContactPage";

export const publicAppRouter = router({
  sendMessageFromContactPage,
});
