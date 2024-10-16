import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  name: {
    type: String,
    required: true,
  },
  indegrients: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe;
