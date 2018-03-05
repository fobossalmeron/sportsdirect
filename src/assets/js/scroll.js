import {TweenMax, Power2, TimelineLite} from "gsap";

var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: .5}});

// Nav
var instaScene = new ScrollMagic.Scene({triggerElement: "#video", offset: 10})
        .setClassToggle( "#sportsNavLogo", "reveal")
        .addTo(controller);