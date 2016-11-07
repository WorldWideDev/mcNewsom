mcNewsom.controller('MainController', function(MainFactory, $location, $timeout){
    self = this;
    self.results = [];
    function getFullName(item, idx){
        var fullName = [item.firstName, item.lastName].join(" ");
        return fullName
    }
    MainFactory.index(function(query){
        self.invitees = query;
        self.results = self.invitees.map(getFullName);
    })
    self.noResults = false;
    self.candidate = '';
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
    self.checkInvitee = function(){
        console.log('checking...', self.candidate);
        var arr = self.candidate.split(' '),
            thisInv = {
                firstName: arr[0],
                lastName: arr[1]
            }
        MainFactory.checkName(thisInv, function(query){
            self.thisPerson = query;
            console.log(self.thisPerson, 'is queried person');
        });
    }
    self.toRSVP = function(){
        MainFactory.toRSVP(self.thisPerson._id, self.rsvp, function(query){
            console.log(query, 'is rsvp query');
            if(query.Error){
                self.rsvpErr = query;
            }else{
                $timeout(function(){
                    $location.url('/home')
                },200)
            }
        })

    }
    self.addPeople = function(){
        MainFactory.addPeople();
    }

})
