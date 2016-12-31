mcNewsom.controller('RsvpController', function(RsvpFactory, $location, $timeout){
    self = this;
    self.results = [];
    function getFullName(item, idx){
        var fullName = [item.firstName, item.lastName].join(" ");
        return fullName
    }
    RsvpFactory.index(function(query){
        self.invitees = query.data;
        self.results = self.invitees.map(getFullName);
    })
    self.noResults = false;
    self.candidate = '';
    self.createInvitee = function(){
        RsvpFactory.create(self.newInvitee, function(query){
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
        console.log(arr, thisInv);
        // if multiple names are found, split in to firstName as first array item, and rest of array as lastName
        // this doesn't work for multiple first names, but i know the data so its cool!
        if(arr.length > 2){
            var str = ''
            for (var i = 1; i < arr.length; i++) {
                i === 1 ? str += arr[i] : str += ' ' + arr[i];
            }
            console.log(str);
            thisInv = {
                firstName: arr[0],
                lastName: str
            }
        }else{
            thisInv = {
                firstName: arr[0],
                lastName: arr[1]
            }
        }
        RsvpFactory.checkName(thisInv, function(query){
            console.log(thisInv, 'is thisInv');
            console.log(query, 'is checkName query');
            self.thisPerson = query.data.person;
            // self.guestStatus = query.data.guestStatus;
            console.log(self.thisPerson, 'is queried person');
        });
    }
    self.toRSVP = function(){

        // validations
        if(!self.rsvp){
            self.rsvpErr = {"Error": "Please fill out all fields"};
        } else if ((self.thisPerson.hasPlus && !self.rsvp.isPlusComing) || !self.rsvp.isComing) {
            self.rsvpErr = {"Error": "Please fill out all fields"};
        } else {
            RsvpFactory.toRSVP(self.thisPerson._id, self.rsvp, function(query){
                console.log(query, 'is rsvp query');
                if(query.data.Error){
                    self.rsvpErr = query.data;
                }else{
                    $timeout(function(){
                        $location.url('/home')
                    },200)
                }
            })
        }

    }
    self.addPeople = function(){
        RsvpFactory.addPeople();
    }

})
