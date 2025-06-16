import { serve } from "inngest/next";
import {
  inngest,
  syncUserCreated,
  syncUserUpdated,
  syncUserDeletion,
  createUserOrder,
} from "@/config/inngest";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreated,
    syncUserUpdated,
    syncUserDeletion,
    createUserOrder,
  ],
});
