import { serve } from "inngest/next";
import { inngest } from "@/config/inngest";
import {
  syncUserCreated,
  syncUserDeletion,
  syncUserUpdated,
  createUserOrder,
} from "@/config/inngest";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreated,
    syncUserDeletion,
    syncUserUpdated,
    createUserOrder,
  ],
});