import mongoose, { Schema, Document } from "mongoose";

export interface IProperty extends Document {
  agentId: mongoose.Types.ObjectId;
  title: string;
  propertyImages: string[];
  price: string;
  size: string;  
  address: string;
  phoneNumber: string;
  bedrooms: number;
  bathrooms: number;
  propertyDescription: string;
  additionalDetails: {
    BuildingAge: string;
    PropertyType: string;
    PropertyStatus: string;
    Gas: string;
    Heating: string;
    Storage: string;
  };
  amenities: string[];
  viewVideoUrl: string;
  mapLocation: string;
  createdAt: Date;
}

const PropertySchema: Schema = new Schema({
  agentId: { type: mongoose.Types.ObjectId, ref: "Agent", required: true },
  title: { type: String, required: true },
  propertyImages: { type: [String], required: true },
  price: { type: String, required: true },
  size: { type: String, required: true },  
  address: { type: String, required: true },
  phoneNumber: { type: String, required: true,validate: /^\d{10}$/ },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  propertyDescription: { type: String, required: true },
  additionalDetails: {
    BuildingAge: { type: String, required: true },
    PropertyType: { type: String, required: true },
    PropertyStatus: { type: String, required: true },
    Gas: { type: String, required: true },
    Heating: { type: String, required: true },
    Storage: { type: String, required: true },
  },
  amenities: [{ type: String }], 
  viewVideoUrl: { type: String, required: true },
  mapLocation: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Property = mongoose.model<IProperty>("Property", PropertySchema);

export default Property;