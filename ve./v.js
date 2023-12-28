

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.sukuna',
            start: '10% 5%',
            end: '200% 5%',
            scrub: true,
            markers: true,
            pinSpacing: false,
        }
    })
    var sukuna = document.querySelector('.sukuna2');
    sukuna.style.opacity=0;
    sukuna.style.rotate=15;
    tl.to(['#h', '#v',], {
      x: 0,
  });
  

  

    let tv = gsap.timeline({
        scrollTrigger: {
            trigger: '.sukuna',
            start: '300% 20%',
            end: '450% 0%',
            scrub: true,
            markers: true,
            pinSpacing: false,
        }
    })
    let tn = gsap.timeline({
      scrollTrigger: {
          trigger: '.sukuna',
          start: '330% 20%',
          end: '450% 0%',
          scrub: true,
          markers: true,
          pinSpacing: false,
      }
  })
    let tz = gsap.timeline({
      scrollTrigger: {
          trigger: '.sukuna',
          start: '420% 20%',
          end: '440% 0%',
          scrub: true,
          markers: true,
          pinSpacing: false,
      }
  })
  let tm = gsap.timeline({
    scrollTrigger: {
        trigger: '.sukuna',
        start: '450% 20%',
        end: '500% 0%',
        scrub: true,
        markers: true,
        pinSpacing: false,
    }
    })
    
    tv.to(['.hand'], {
      scale: 0.4,
      rotate:-15,
      x:-140,
      y:-800,
      opacity:0,
    });
    tv.to(['#v',], {
      rotate: -10,
      y:100,
  });
  tn.to(['.sukuna2'], {
    scale: 1.2,
    rotate:-10,
    y:-600,
    opacity:1,
  });
    tz.to(['.hand'], {
      opacity:0,
    });

  ScrollTrigger.create({
  
    trigger: '.sukuna',
    start: '70% center',
    end: 'max',
    pin: true,
    pinSpacing: false
    
  })




  
  const myText = new SplitType('#domain')
  gsap.to('.char',{
    opacity: 1,
    delay: 0.2,
    duration: 1.5,
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
