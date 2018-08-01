var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: .5}});

// menu Highlights
var instaScene = new ScrollMagic.Scene({triggerElement: "#background", duration: $('#background').height()})
        .setClassToggle( "nav ul li:nth-child(1) a", "active")
        .addTo(controller);
var instaScene = new ScrollMagic.Scene({triggerElement: "#platform", duration: $('#platform').height()})
        .setClassToggle( "nav ul li:nth-child(2) a", "active")
        .addTo(controller);
var instaScene = new ScrollMagic.Scene({triggerElement: "#benefits", duration: $('#benefits').height()})
        .setClassToggle( "nav ul li:nth-child(3) a", "active")
        .addTo(controller);
var instaScene = new ScrollMagic.Scene({triggerElement: "#contact", duration: $('#contact').height()})
        .setClassToggle( "nav ul li:nth-child(6) a", "active")
        .addTo(controller);