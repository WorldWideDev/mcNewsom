mcNewsom.controller('MainController', function(MainFactory){
    self = this;
    self.createInvitee = function(){
        MainFactory.create(self.newInvitee, function(query){
            self.invitees = query;
        });
    }
})
