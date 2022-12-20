import mongoose from "mongoose";
import isAlpha from "validator/lib/isAlpha";

const deliverySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Client must have name"],
    trim: true,
    maxLength: [40, "Client' name must have up to 40 characters"],
    minLength: [2, "Client's name must have at least 2 characters"],
    validate: {
      validator: (name: string) => isAlpha(name, "pt-BR", { ignore: " " }),
      message: "Client's name must contain only letters",
    },
  },
  weigth: { type: Number, required: [true, "Weight must be provided"] },
  address: {
    type: {
      street: { type: String, required: [true, "Street must be provided"] },
      number: String,
      neighbourhood: String,
      complement: String,
      city: { type: String, required: [true, "City must be provided"] },
      state: String,
      country: { type: String, required: [true, "State must be provided"] },
      geolocation: {
        type: {
          latitude: { type: Number, required: [true, "Latitude required"] },
          longitude: { type: Number, required: [true, "Longitude required"] },
        },
        required: [true, "Geolocation required"],
      },
      placeId: {
        type: String,
        required: [true, "PlaceId is required"],
        unique: true,
      },
    },
    required: true,
  },
});

const Delivery = mongoose.model("Delivery", deliverySchema);

export default Delivery;
