import { GraphQLID, GraphQLNonNull } from "graphql";
import ListingModel from "../../../models/listing";
import listingType from "../../types/listing";

export default {
  type: listingType,
  args: {
    id: {
      name: "id",
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve(root, params, options) {
    return ListingModel.findById(params.id).exec();
  },
};
