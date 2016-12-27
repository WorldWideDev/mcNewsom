var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var InviteeSchema = new Schema({
    _response: {
        type: Schema.Types.ObjectId,
        ref: "Response"
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    hasPlus: {
        type: Boolean,
        default: false
    },
    firstNamePlus: {
        type: String,
        required: false
    },
    lastNamePlus: {
        type: String,
        required: false
    },
    hasRsvp: {
        type: Boolean,
        default: false
    },
    plusHasRsvp: {
        type: Boolean,
        default: false
    }
});

var Invitee = mongoose.model('Invitee', InviteeSchema);
