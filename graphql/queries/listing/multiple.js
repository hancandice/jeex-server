import { GraphQLList } from "graphql";
import ListingModel from "../../../models/listing";
import listingType from "../../types/listing";

export default {
  type: new GraphQLList(listingType),
  args: {},
  resolve(root, params, options) {
    return ListingModel.find().exec();
  },
};
