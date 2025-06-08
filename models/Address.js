import mangoose from "mongoose";

const addressSchema = new mangoose.Schema({
  userId: { type: String, required: true },
  fullName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  pincode: { type: Number, required: true },
  area: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
});

const Address =
  mangoose.models.Address || mangoose.model("Address", addressSchema);

export default Address;
