mcNewsom.controller('AdminController', function(AdminFactory, RsvpFactory, $location){
    self = this;
    var pw = prompt('ENTER THE PASSWORD')
    if(pw !== 'asdf')
        $location.url('/home')
    AdminFactory.index(function(query){
        self.responses = query.data;
    })
    AdminFactory.findNoResponse(function(query){
        self.noResponse = query.data;
    })
})
