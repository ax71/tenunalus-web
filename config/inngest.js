import { Inngest } from "inngest";
import connectDB from "./db";
import User from "@/models/User";
import Order from "@/models/Order";

export const inngest = new Inngest({ id: "tenunalus" });

export const syncUserCreated = inngest.createFunction(
  {
    id: "sync-user-from-clerk",
    retries: 3,
  },
  { event: "clerk/user.created" },
  async ({ event, attempt }) => {
    try {
      console.log(
        `🚀 [Attempt ${attempt}] User creation started for:`,
        event.data?.id
      );

      const { id, email_addresses, first_name, last_name, image_url } =
        event.data;

      if (!id) {
        throw new Error("User ID is missing from Clerk event");
      }

      if (!email_addresses || !email_addresses[0]?.email_address) {
        throw new Error("Email is missing from Clerk event");
      }

      const userData = {
        _id: id,
        email: email_addresses[0].email_address,
        name: `${first_name || ""} ${last_name || ""}`.trim() || "Unnamed User",
        imageUrl: image_url || "",
        cartItems: {},
      };

      console.log("💾 Creating user with data:", userData);

      await connectDB();
      console.log("✅ Database connected");

      const existingUser = await User.findById(id);
      if (existingUser) {
        console.log("⚠️ User already exists:", id);
        return { success: true, message: "User already exists" };
      }

      const newUser = await User.create(userData);
      console.log("🎉 User created successfully:", newUser._id);

      return {
        success: true,
        message: "User created successfully",
        userId: newUser._id,
      };
    } catch (error) {
      console.error(`❌ Error creating user (attempt ${attempt}):`, {
        message: error.message,
        stack: error.stack,
        eventData: event.data,
      });

      throw new Error(`Failed to create user: ${error.message}`);
    }
  }
);

export const syncUserUpdated = inngest.createFunction(
  {
    id: "update-user-from-clerk",
    retries: 3,
  },
  { event: "clerk/user.updated" },
  async ({ event, attempt }) => {
    try {
      console.log(
        `🔄 [Attempt ${attempt}] User update started for:`,
        event.data?.id
      );

      const { id, email_addresses, first_name, last_name, image_url } =
        event.data;

      if (!id) {
        throw new Error("User ID is missing from Clerk event");
      }

      const updateData = {
        email: email_addresses?.[0]?.email_address,
        name: `${first_name || ""} ${last_name || ""}`.trim() || "Unnamed User",
        imageUrl: image_url || "",
      };

      await connectDB();

      const updatedUser = await User.findByIdAndUpdate(id, updateData, {
        new: true,
      });

      if (!updatedUser) {
        throw new Error(`User with ID ${id} not found`);
      }

      console.log("✅ User updated successfully:", updatedUser._id);
      return { success: true, message: "User updated successfully" };
    } catch (error) {
      console.error(
        `❌ Error updating user (attempt ${attempt}):`,
        error.message
      );
      throw new Error(`Failed to update user: ${error.message}`);
    }
  }
);

export const syncUserDeletion = inngest.createFunction(
  {
    id: "delete-user-from-clerk",
    retries: 3,
  },
  { event: "clerk/user.deleted" },
  async ({ event, attempt }) => {
    try {
      console.log(
        `🗑️ [Attempt ${attempt}] User deletion started for:`,
        event.data?.id
      );

      const { id } = event.data;

      if (!id) {
        throw new Error("User ID is missing from Clerk event");
      }

      await connectDB();

      const deletedUser = await User.findByIdAndDelete(id);

      if (!deletedUser) {
        console.log("⚠️ User not found for deletion:", id);
        return { success: true, message: "User not found (already deleted?)" };
      }

      console.log("✅ User deleted successfully:", deletedUser._id);
      return { success: true, message: "User deleted successfully" };
    } catch (error) {
      console.error(
        `❌ Error deleting user (attempt ${attempt}):`,
        error.message
      );
      throw new Error(`Failed to delete user: ${error.message}`);
    }
  }
);

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
      console.log("✅ Orders created successfully");
      return { success: true, message: "Orders created successfully" };
    } catch (error) {
      console.error("❌ Error creating orders:", error);
      throw new Error(`Failed to create orders: ${error.message}`);
    }
  }
);
