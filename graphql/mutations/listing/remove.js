import { GraphQLID, GraphQLNonNull } from "graphql";
import ListingModel from "../../../models/listing";
import listingType from "../../types/listing";

export default {
  type: listingType,
  args: {
    _id: {
      name: "_id",
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  async resolve(root, params, options) {
    const removedListing = await ListingModel.findByIdAndRemove(
      params._id
    ).exec();

    if (!removedListing) {
      throw new Error("Error at Removing listing");
    }

    return removedListing;
  },
};
