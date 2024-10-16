import mongoose from 'mongoose';

const fridgeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  products: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    default: [],
  },
});

const Fridge = mongoose.model('Fridge', fridgeSchema);

export default Fridge;
