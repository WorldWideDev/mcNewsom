var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var InviteeSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
    isSolo: {
        type: Boolean,
        default: true
    },
    plusOne:{
        firstName: {
            type: String,
            required: false
        },
        lastName: {
            type: String,
            required: false
        }
    }
});

var Invitee = mongoose.model('Invitee', InviteeSchema);
