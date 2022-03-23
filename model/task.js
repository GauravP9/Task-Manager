const mongoose = require('mongoose');



// Schema (Column)- Setting structure of the data  Only element defined in schema will be forwarded to DB
const TaskSchema = new mongoose.Schema({            // Setting Schema Format for the data    
    // name: String ,  completed: Boolean           //Simple format
    name: {                         // Validation   // Complex format - passing object as argument
        type: String,                               // Datatype 
        required: [true,'Must provide the name'],       // necesary, if not message will pop up
        trim: true,
        maxlength:[20,'Max 20 char allow']
    },
    completed: {
        type: Boolean,
        default: false 

    }
})

// Model (Table) - represenation of collection
// Create update  Queries from model

module.exports = mongoose.model('Task',TaskSchema);
