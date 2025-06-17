import { Inngest } from "inngest";
import connectDB from "./db";
import User from "@/models/User";
import Order from "@/models/Order";

export const inngest = new Inngest({ id: "tenunalus" });

//inngest  function to save user data to database
export const syncUserCreated = inngest.createFunction(
  {
    id: "sync-user-from-clerk",
  },
  { event: "clerk/user.created" },
  async ({ event }) => {
    const { id, email_addresses, first_name, last_name, image_url } =
      event.data;
    const userData = {
      _id: id,
      email: email_addresses[0].email_address,
      name: first_name + " " + last_name,
      imageUrl: image_url,
    };
    await connectDB();
    await User.create(userData);
  }
);

// inngest function to updata data to database
export const syncUserUpdated = inngest.createFunction(
  {
    id: "update-user-from-clerk",
  },
  { event: "clerk/user.updated" },
  async ({ event }) => {
    const { id, email_addresses, first_name, last_name, image_url } =
      event.data;
    const userData = {
      _id: id,
      email: email_addresses[0].email_address,
      name: first_name + " " + last_name,
      imageUrl: image_url,
    };
    await connectDB();
    await User.findByIdAndUpdate(id, userData);
  }
);

// inngest function to delete data to database
export const syncUserDeleted = inngest.createFunction(
  {
    id: "delete-user-from-clerk",
  },
  { event: "clerk/user.deleted" },
  async ({ event }) => {
    const { id } = event.data;
    await connectDB();
    await User.findByIdAndDelete(id);
  }
);

// inngest function to create user order
export const createUserOrder = inngest.createFunction(
  {
    id: "create-user-order",
    batchEvents: {
      maxSize: 5,
      timeout: "5s",
    },
  },
  { event: "order/created" },
  async ({ events }) => {
    try {
      const orders = events.map((event) => {
        return {
          userId: event.data.userId,
          products: event.data.items.map((item) => ({
            product: item.product,
            quantity: item.quantity,
          })),
          address: event.data.address,
          amount: event.data.amount,
          date: event.data.date,
        };
      });

      await connectDB();
      await Order.insertMany(orders);
      return { success: true, message: "Orders created successfully" };
    } catch (error) {
      throw new Error(`Failed to create orders: ${error.message}`);
    }
  }
);
