import {Schema, model, Model} from 'mongoose'

const ProductSchema = new Schema({
    name: {
        type: Schema.Types.String,
        required: [true, 'Product name is required'],
        minlength: 3,
        maxlength: 50,
        trim: true,
        lowercase: true
    },
    price: {
        type: Schema.Types.Number,
        required: [true, 'Product price is required'],
        min: 0.01,
    },
    image: {
        type: Schema.Types.String,
        required: [true, 'Product image is required'],
    }
})


/**
 * @type {Model}
 */
const Product = model('Product', ProductSchema)

export default Product