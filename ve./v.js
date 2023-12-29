
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {


  /*function updateZIndexOnWidth() {
    var spans = document.getElementsByClassName('v');
    var l = spans.length;

    for (var i = 0; i < l; i++) {
        // Force a reflow
        // Now check the width
        var height = spans[i].getBoundingClientRect().height

        // Check if the width is below a certain value (e.g., 350 pixels)
        if (height > 330) {
            // Set z-index to -1 or perform other actions

            spans[i].classList.add('hover');
        } else {
            // Reset z-index to its default value or perform other actions
            spans[i].style.opacity = 1; // or spans[i].style.zIndex = 1; // or any other value
            spans[i].classList.remove('hover');
        }
    }
}

// Call the function initially
updateZIndexOnWidth()
setInterval(updateZIndexOnWidth, 100);*/
   const myText = new SplitType('#domain')

  let textanimation = gsap.timeline({
    paused: true, // Set the timeline to initially paused
  });
  
 
  textanimation.to('.char',{
    opacity: 1,
    delay: 0.2,
    duration: 1.5,
  })

textanimation.play();
setTimeout(() => {
  textanimation.reverse();
}, 3000);


  
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.sukuna',
            start: '10% 5%',
            end: '200% 5%',
            scrub: true,
            markers: false,
            pinSpacing: false,
        }
    })
    var sukuna = document.querySelector('.sukuna2');
    sukuna.style.opacity=0;
    sukuna.style.rotate=15;
    sukuna.style.zIndex=100;

    /*var slid = document.querySelector('.domain2');
    slid.style.opacity = 0,*/

    tl.to(['#h', '#v',], {
      x: 0,
  });
  
    let ult = gsap.timeline({
      scrollTrigger: {
          trigger: '.domain2',
          start: '-1000% 20%',
          end: 'max%',
          scrub: true,
          markers: false,
          pinSpacing: false,
      }
  })

    let tv = gsap.timeline({
        scrollTrigger: {
            trigger: '.sukuna',
            start: '300% 20%',
            end: '450% 0%',
            scrub: true,
            markers: false,
            pinSpacing: false,
        }
    })
    let tn = gsap.timeline({
      scrollTrigger: {
          trigger: '.sukuna',
          start: '330% 20%',
          end: '450% 0%',
          scrub: true,
          markers: false,
          pinSpacing: false,
      }
  })
    let tz = gsap.timeline({
      scrollTrigger: {
          trigger: '.sukuna',
          start: '420% 20%',
          end: '440% 0%',
          scrub: true,
          markers: false,
          pinSpacing: false,
      }
  })
  let tb = gsap.timeline({
    scrollTrigger: {
        trigger: '.sukuna',
        start: '450% 20%',
        end: '530% 20%',
        scrub: true,
        markers: false,
        pinSpacing: false,
    }
})

  let tm = gsap.timeline({
    scrollTrigger: {
      trigger: '.sukuna',
      start: '370% 20%',
      end: '450% 0%',
      scrub: true,
      markers: false,
      pinSpacing: false,
    }
    })
    let tp = gsap.timeline({
  scrollTrigger: {
      trigger: '.sukuna',
      start: '530% 20%',
      end: '570% 0%',
      scrub: true,
      markers: true,
      pinSpacing: false,
  }
})
let ts = gsap.timeline({
  scrollTrigger: {
      trigger: '.domain2',
      start: '-100% 20%',
      end: '2000% 0%',
      scrub: true,
      markers: true,
      pinSpacing: false,
  }
})

/*ult.to(['.slid'], {
  keyframes: [
    { transform: 'perspective(1000px)' },
    { transform: 'perspective(1000px)' }
  ],
});*/
    tv.to(['.hand'], {
      scale: 0.4,
      
      rotate:-15,
      x:-140,
      y:-800,
      opacity:0,
    });
    tv.to(['.domain2'], {
      opacity:1,
    });
    
      tm.to(['#v'], {
        rotate: -50,
        y:400,
    });

    tn.to(['.sukuna2'], {
      scale: 1.5,
      rotate:-10,
      y:-700,
      opacity:1,
    });

    tz.to(['.hand'], {
      opacity:0,
    });
 
    tp.to(['.domain2'], {
      scale: 1.5,

    });

    tb.to(['.domain2'], {
      scale: 1.75,
      rotate: -5,
      y:0,
    });
    tv.to(['.im'], {
      opacity:0.7,
    });
    tv.to(['.open'], {
      y: -100,
      x:-100,
    });
    tv.to(['.navbar'], {
      y: 10,
    });
    ts.to(['.slid'], {
      rotate:30,
      y:-100,
      rotateY: 360,
    });
  ScrollTrigger.create({
  
    trigger: '.sukuna',
    start: '70% center',
    end: '5000',
    pin: true,
    markers:true,
    pinSpacing: false
    
  })
  ScrollTrigger.create({
    trigger: '.domain2',
    start: '-10% center',
    end: '4500',
    scrub: true,
    markers: false,
    pin: true,
    pinSpacing: false,
  })


  

}
)


const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
