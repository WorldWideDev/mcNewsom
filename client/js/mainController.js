mcNewsom.controller('MainController', function(MainFactory){
    self = this;
    MainFactory.index(function(query){
        self.invitees = query;
    })
    self.createInvitee = function(){
        MainFactory.create(self.newInvitee, function(query){
            self.invitees = query;
            self.newInvitee = '';
            self.isChecked = false;
        });
    }
    self.checked = function(){
        console.log('checked func fired');
        self.isChecked = self.newInvitee.hasPlus;
    }
})
