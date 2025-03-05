

// const menu_icon = document.querySelector(".menu-icon")
// const cross_icon = document.querySelector(".cross-icon")


//     menu_icon.addEventListener("click",()=>{
       
//         list.classList.toggle("menu-in")

//     })

// cross_icon.addEventListener("click",()=>{
//     list.classList.toggle("menu-out")
// })

// function breakTheText(){
//     var h1 = document.querySelector("h1")
    
//     var h1Text = h1.textContent

//      var splittedText = h1Text.split("")

//      var clutter = ""

//      splittedText.forEach(function(elem){
//          clutter += `<span>${elem}</span>`
//      })
//      h1.innerHTML = clutter
// }
// breakTheText()


// var tl = gsap.timeline()

// tl.from("h1 span",{
//    scale:20,
//     duration:1.1,
//     opacity:0,
//     stagger:0.15
// })
// tl.to(".heading",{
//     delay:1.1,
//     scale:1.1,
//     scurb:2,
//     duration:0.9,
//     repeat:1,
//     yoyo:true

// })
// gsap.to(".intro-section",{
//     delay:5.9,
//     opacity:0
// })

//  var menu = document.querySelector(".menu-icon")

//  var cross = document.querySelector(".cross-icon")
//  const list = document.querySelector(".list")
//  var nav = gsap.timeline()

//  nav.to(".list",{
//      right:0,
//      duration:0.2
//  })

//   nav.from(".list li",{
//      x:150,
//       stagger:0.3,
//      opacity:0,
//      duration:0.7,
//  })
//    nav.from(".list i",{
//        opacity:0
//    })
//  nav.pause()

//  menu.addEventListener("click",function(){
//      nav.play()
//  })

//  cross.addEventListener("click",function(){
//      nav.reverse()
//  })

// var menu = document.querySelector(".menu-icon");
// var close = document.querySelector(".close-icon");
// var list = document.querySelector(".list");

// const tl = gsap.timeline({ paused: true, reversed: true }); // Ensure it's paused at the start

// tl.to(".list", {
//     right: 0,
//     duration: 0.2
// });

// tl.from(".list li", {
//     x: 150,
//     stagger: 0.3,
//     opacity: 0,
//     duration: 0.7
// });

// tl.from(".list i", {
//     opacity: 0
// });

// Open menu on click
// menu.addEventListener("click", function () {
//     console.log("Menu button clicked");
//     tl.play(); // Plays the animation
// });

// // Close menu on click
// close.addEventListener("click", function () {
//     console.log("Cross button clicked");
//    tl.reverse(); // Reverses the animation
// });


var list = document.querySelector(".list");
var menu = document.querySelector(".menu-icon");
var cross = document.querySelector(".list i");

var tl = gsap.timeline()

  tl.to(".list",{
      right:0,
      duration:0.4
  })
//   tl.from(".list li",{
//       x:150,
//       stagger:0.3,
//       opacity:0,
//       duration:0.6
//   })
  tl.from(".list i",{
      opacity:0
  })
   tl.pause()

   menu.addEventListener("click",function(){
       tl.play()
   })
   cross.addEventListener("click",function(){
      tl.reverse()
   })
// gsap.to(".hero-section",{
//     y:-980,
//     duration:1,
//     delay:6
// })


// var path = "M 10 100 Q 500 100 990 80"

// var finalpath = "M 10 100 Q 500 100 990 80"

// var skills = document.querySelector(".skills")

// skills.addEventListener("mousemove",function(dets){
//     path = `M 10 100 Q ${dets.x} ${dets.y} 990 80`




// gsap.to("svg path",{
//     attr:{d:path},
//     duration:0.2,
//     ease:"power3.out"
// })})

// skills.addEventListener("mouseleave",function(){
   
//     gsap.to("svg path",{
//         attr:{d:finalpath},
//         duration:1.5,
//         ease:"elastic.out(1,0.2)"
//     })
// })