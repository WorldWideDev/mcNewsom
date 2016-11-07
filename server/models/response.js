var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ResponseSchema = new Schema({
    _invitee: {
        type: Schema.Types.ObjectId,
        ref: 'Invitee'
    },
    isComing: {
        type: Boolean,
        default: false
    },
    isPlusComing: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: new Date
    }
})

var Response = mongoose.model('Response', ResponseSchema);
