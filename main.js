function videoconanimation() {
    var videocon = document.querySelector("#video-container")
    var playbtn = document.querySelector("#play")

    videocon.addEventListener("mouseenter", function() {
        gsap.to(playbtn, {
            scale: 1,
            opacity: 1
        })

    })
    videocon.addEventListener("mouseleave", function() {
        gsap.to(playbtn, {
            scale: 0,
            opacity: 0
        })
    })
    videocon.addEventListener("mousemove", function(dets) {
        gsap.to(playbtn, {
            left: dets.x - 50,
            top: dets.y - 100
        })
    })
}
videoconanimation()

function loadinganimation() {
    gsap.from("#page1 h1", {
        y: 100,
        opacity: 0,
        delay: 0.5,
        duration: 0.9,
        stagger: 0.2

    })
    gsap.from("#page1 #video-container", {
        scale: 0.9,
        opacity: 0,
        delay: 1.3,
        duration: 0.4,


    })
}
loadinganimation()

function cursoranimation() {
    document.addEventListener("mousemove", function(dets) {
        gsap.to("#cursor", {
            left: dets.x,
            top: dets.y
        })
    })
    document.querySelector("#child1").addEventListener("mouseenter", function() {
        gsap.to("#cursor", {
            transform: "translate(-50%, -50%)scale(1)",
            // zIndex: 1


        })
    })

    document.querySelector("#child1").addEventListener("mouseleave", function() {
        gsap.to("#cursor", {
            transform: "translate(-50%, -50%)scale(0)",
            // zIndex: 1


        })
    })
    document.querySelector("#child2").addEventListener("mouseenter", function() {
        gsap.to("#cursor", {
            transform: "translate(-50%, -50%)scale(1)",
            // zIndex: 1


        })
    })

    document.querySelector("#child2").addEventListener("mouseleave", function() {
        gsap.to("#cursor", {
            transform: "translate(-50%, -50%)scale(0)",
            // zIndex: 1


        })
    })
    document.querySelector("#child3").addEventListener("mouseenter", function() {
        gsap.to("#cursor", {
            transform: "translate(-50%, -50%)scale(1)",
            // zIndex: 1


        })
    })

    document.querySelector("#child3").addEventListener("mouseleave", function() {
        gsap.to("#cursor", {
            transform: "translate(-50%, -50%)scale(0)",
            // zIndex: 1


        })
    })
    document.querySelector("#child4").addEventListener("mouseenter", function() {
        gsap.to("#cursor", {
            transform: "translate(-50%, -50%)scale(1)",
            // zIndex: 1


        })
    })

    document.querySelector("#child4").addEventListener("mouseleave", function() {
        gsap.to("#cursor", {
            transform: "translate(-50%, -50%)scale(0)",
            // zIndex: 1


        })
    })

}
cursoranimation()



function locomotivAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });




    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}
locomotivAnimation()

function navbarAnimation() {
    gsap.to("#nav-part1 svg", {

        transform: "translateY(-100%)",
        scrollTrigger: {
            trigger: "#page1",
            scroller: "#main",
            // markers: true,
            start: "top 0%",
            end: "top -5%",
            scrub: true,
        }
    })
}
navbarAnimation()

function imgAnimation() {

    gsap.to(" #child1", {

        opacity: 1,
        x: 40,
        duration: 1,
        scrollTrigger: {
            trigger: "#child2",
            scroller: "#main",
            markers: false,
            start: "top 40%",
            end: "top 70%",
            scrub: 2,

        }


    })
    gsap.to(" #child2", {

        opacity: 1,
        x: -40,
        duration: 1,
        scrollTrigger: {
            trigger: "#child2",
            scroller: "#main",
            markers: false,
            start: "top 40%",
            end: "top 70%",
            scrub: 2,

        }


    })
    gsap.to(" #child3", {

        opacity: 1,
        x: 40,
        duration: 1,
        scrollTrigger: {
            trigger: "#child3",
            scroller: "#main",
            markers: false,
            start: "top 45%",
            end: "top 70%",
            scrub: 2,

        }


    })
    gsap.to(" #child4", {

        opacity: 1,
        x: -40,
        duration: 1,
        scrollTrigger: {
            trigger: "#child3",
            scroller: "#main",
            markers: false,
            start: "top 45%",
            end: "top 70%",
            scrub: 2,

        }


    })
}
imgAnimation()



function page4Animation() {
    gsap.to("#p4center", {

        opacity: 1,
        x: 100,
        scrollTrigger: {

            trigger: "#p4center",
            scroller: "#main",
            // markers: true,
            start: "top 80%",
            end: "top 10%",
            scrub: true

        }
    })
    gsap.to("#p4btn", {

        opacity: 1,
        x: -100,
        scrollTrigger: {

            trigger: "#p4center",
            scroller: "#main",
            // markers: true,
            start: "top 80%",
            end: "top 10%",
            scrub: true

        }
    })

    gsap.to("#btnbtm", {

        opacity: 1,
        x: -100,
        scrollTrigger: {

            trigger: "#p4center",
            scroller: "#main",
            // markers: true,
            start: "top 90%",
            end: "top 10%",
            scrub: true

        }
    })
}
page4Animation()

function page5Animation() {
    gsap.to("#page5 .lower2", {
        y: -180,

        opacity: 1,
        scrollTrigger: {
            trigger: ".lower2",
            scroller: "#main",
            // markers: true,
            start: "top 60%",
            end: "top 0",
            scrub: 2
        }
    })
}
page5Animation()


function page6animation() {
    gsap.to(" #centerpor  #centerimg ", {
        y: -90,
        duration: 1,

        opacity: 1,
        scrollTrigger: {
            trigger: "#centerpor",
            scroller: "#main",
            // markers: true,
            start: "top 90%",
            end: "top 50%",
            scrub: true

        }
    })

}
page6animation()