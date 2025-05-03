const { default: mongoose } = require("mongoose");

const { Schema } = mongoose


let productSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please provide a product name'],
        trim: true,
        maxlength: [100, 'Name cannot be more than 100 characters']
    },
    description: {
        type: String,
        required: [true, 'Please provide a description'],
        trim: true
    },
    price: {
        type: Number,
        required: [true, 'Please provide a price'],
        min: [0, 'Price must be a positive number']
    },
    discountPrice: {
        type: Number,
        default: 0,
        min: [0, 'Discount price must be a positive number']
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: [true, 'Please provide a category']
    },
    images: {
        thumbnail: {
            type: String,
            default: 'no-image.jpg'
        },
        gallery: [String]
    },
    stockQuantity: {
        type: Number,
        default: 0,
        min: [0, 'Stock quantity cannot be negative']
    },
    weight: {
        type: Number,
        default: 0,
        min: [0, 'Weight cannot be negative']
    },
    dimensions: {
        length: Number,
        width: Number,
        height: Number
    },
    sku: {
        type: String,
        unique: true,
        sparse: true
    },
    barcode: String,
    isFeatured: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: true
    },
    safetyRating: {
        type: String,
        enum: ['high', 'medium', 'low'],
        default: 'high'
    },
    ageGroup: {
        type: String,
        enum: ['3+', '5+', '7+', '10+', '12+', '18+'],
        default: '10+'
    },
    tags: [String],
    metadata: {
        manufacturer: String,
        explosiveContent: String,
        noiseLevel: {
            type: String,
            enum: ['silent', 'low', 'medium', 'high']
        },
        duration: String
    },
    ratings: {
        average: {
            type: Number,
            default: 0,
            min: [0, 'Rating must be at least 0'],
            max: [5, 'Rating cannot exceed 5']
        },
        count: {
            type: Number,
            default: 0
        }
    },
    views: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Middleware to update `updatedAt` before saving
productSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});


let Product = mongoose.model('Product', productSchema);

module.exports = Product;