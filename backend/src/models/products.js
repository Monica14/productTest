import * as mongoose from 'mongoose';
import UID from '../helpers/uid.helpers';

const { Schema } = mongoose;

const ProductSchema = new Schema({
  productID: {
    type: String,
    default: UID.create()
  },
  title: {
    type: String,
  },
  image: {
    type: String,
  },
  mrp: {
    type: Number,
  },
  rating: {
    type: Number
  }
});

const Products = mongoose.model('Products', ProductSchema);
export { Products };
