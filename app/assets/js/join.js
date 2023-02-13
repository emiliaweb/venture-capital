// window.addEventListener('DOMContentLoaded', () => {
//     if (window.innerWidth < 768) {
//         new SimpleBar(document.getElementById('joinWrap'), {
//             autoHide: false
//         });
//     }
// })

// = custom scrollbar ============
const scrollBar = document.querySelector(".join-scrollbar");
const handler = document.querySelector("#scrollbarHandle");
const scroller = document.querySelector("#scrolledContent");
let barLength = scrollBar.offsetWidth - handler.offsetWidth;
// let maxScroll = ScrollTrigger.maxScroll(scroller, true);
let maxScroll = scroller.scrollWidth - scroller.offsetWidth;
let trigger, dragging;

// this ScrollTrigger will use onUpdate whenever any scroll happens to move the handler to the corresponding ratio according to the scroll position of the scroller
// and calling an onRefresh when the page resizes to record the maximum scroll value for the scroller and the scrollBar size
// when dragging, the scroller will be scrolled to the corresponding ratio

trigger = ScrollTrigger.create({
  scroller: scroller,
  horizontal: 'true',
  start: 'left',
  end: 'max',
  onRefresh: onResize,
  onUpdate: updateHandler
});

dragging = Draggable.create(handler, {
    type: "x",
    bounds: ".join-scrollbar",
    onDrag: function() {
      trigger.scroll(this.x / barLength * maxScroll); // this.x / barLength * maxScroll
    //   console.log(scroller.scrollWidth - scroller.offsetWidth);
    }
  })[0];
  
  function onResize() {
    if (trigger) {
      maxScroll = scroller.scrollWidth - scroller.offsetWidth; 
      barLength = scrollBar.offsetWidth - handler.offsetWidth; 
      updateHandler();
    }
  }
  
  function updateHandler() {
    gsap.set(handler, {x: barLength * trigger.scroll() / maxScroll});
  }