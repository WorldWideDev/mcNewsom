mcNewsom.controller('HomeController', function(RsvpFactory){
    self = this;
    self.background = '';
    (function randomBackground(){
        switch (getRandomInt(1,4)) {
            case 1:
                self.background = "../img/vegas-banner-01.png";
                self.text_color = "rgb(97, 255, 0)";
                break;
            case 2:
                self.background = "../img/vegas-banner-02.png";
                self.text_color = "rgb(20, 146, 241)";
                break;
            case 3:
                self.background = "../img/vegas-banner-03.png";
                self.text_color = "rgb(229, 233, 31)";
                break;

        }
    })();
    (function randomMessage(){
        switch (getRandomInt(1,6)) {
            case 1:
                self.message = "#BLESSED";
                break;
            case 2:
                self.message = "#BASED";
                break;
            case 3:
                self.message = "#FAMLY";
                break;
            case 4:
                self.message = "#VEGAS";
                break;
            case 5:
                self.message = "#JOIN US";
                break;

        }
    })();
    (function randomAnim(){
        switch (getRandomInt(1,6)) {
            case 1:
                self.anim = "bounceInDown";
                break;
            case 2:
                self.anim = "bounceInLeft";
                break;
            case 3:
                self.anim = "bounceInRight";
                break;
            case 4:
                self.anim = "rotateIn";
                break;
            case 5:
                self.anim = "slideInUp";
                break;

        }
    })();
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
})
