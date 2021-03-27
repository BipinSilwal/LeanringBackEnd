const mongoose = require('mongoose');






const tourSchema = mongoose.Schema({

        name:{
                type:String,
                required:[true, 'A tour must have Name'],
                unique:true,
                trim:true

        },

        duration:{

            type:Number,
            required: [true, 'A tour must have a duration']
        },

        maxGrpSize:{
                type:Number,
                required:['true', 'A tour must have a group size']
        },

        difficulty:{

            type:String,
            required:[true, ' must have difficulty']

        },

        ratingAverage:{
                type:Number,
                default:4.5

        },

        ratingQuantity:{
            type:Number,
            default:0, 
            

    },
    price:{
            type:Number,
            required:[true, 'A tour must have a price']
           

    },

    priceDiscount:Number,

    summary:{

            type:String,
            trim:true,
            required:[true, 'A tour must have a description']

    },

    imageCover:{
            type:String,
            required:[true, 'A tour must have a cover image']

    },

    images:[String],


    createdAt:{
        type: Date,
        default: Date.now()

    },

    startDates:[Date]






},{timeStamp:true});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour