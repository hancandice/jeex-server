import { GraphQLNonNull } from "graphql";
import ListingModel from "../../../models/listing";
import listingType from "../../types/listing";
import listingInputType from "../../types/listing-input";

export default {
  type: listingType,
  args: {
    data: {
      name: "data",
      type: new GraphQLNonNull(listingInputType),
    },
  },
  async resolve(root, params) {
    const listingModel = new ListingModel(params.data);
    const newListing = await listingModel.save();

    if (!newListing) {
      throw new Error("Error at Adding New listing");
    }
    return newListing;
  },
};
