const mongoose = require('mongoose');

const eventShema = new mongoose.Schema({
      evenType: {
            type: String,
            required: true,
          },
          title: {
            type: String,
            required: true,
          },
          description: {
            type: String,
            required: true,
          },
          picture: {
            public_id: {
              type: String,
              required: true,
            },
            url: {
              type: String,
              required: true,
            },
          },
          createDate: {
            type: String,
            default: Date.now,
          },
          
        
})




const eventModel = new mongoose.model('Event' , eventShema)


module.exports = eventModel