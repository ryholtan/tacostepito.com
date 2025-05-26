const car = document.querySelector('.logo-car');

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('nav-links').classList.toggle('active');
  });

  document.getElementById('year').textContent = new Date().getFullYear();

  

});

let resizeTimeout;
let driveInProgress = false;





window.addEventListener('load', () => {


  function getDriveTime() {
    return Math.round(window.innerWidth * 2.37 + 3176);
  }

  function startDriveCycle() {
    const duration = getDriveTime();
    driveInProgress = true;
    car.classList.add('animate-wheels');

    // setTimeout(() => {
    //   car.classList.add('invisible');
    // }, duration * 0.45);

    // setTimeout(() => {
    //   car.classList.remove('invisible');
    // }, duration * 0.75);

  }

  car.addEventListener('animationend', (e) => {
    if (e.animationName === 'driveCartoon') {
      car.classList.remove('animate-wheels');
      if (driveInProgress) {
        driveInProgress = false;
        // add optional pause between loops here
        setTimeout(startDriveCycle, 5000); // 400ms delay between cycles
      }
    }
  });

  function handleResize() {
    document.body.classList.add('no-animation');
    car.classList.remove('animate-wheels');
    clearTimeout(resizeTimeout);

    resizeTimeout = setTimeout(() => {
      document.body.classList.remove('no-animation');
      startDriveCycle(); // restart loop properly
    }, 500);
  }

  // let circleText;

  // function updateCircleText() {
  //   const el = document.getElementById('underTag');

  //   if (window.innerWidth > 768) {
  //     if (!circleText && el) {
  //       circleText = new CircleType(el).radius(Math.min(window.innerWidth / 2, 300));
  //     }
  //     if (!circleTextUnder && underEl) {
  //       circleTextUnder = new CircleType(underEl).radius(800);
  //     }
  //   } else {
  //     if (circleText) {
  //       circleText.destroy();
  //       circleText = null;
  //     }
  //   }
  // }

  window.addEventListener('resize', () => {
    handleResize();
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      handleResize();
      updateCircleText();
    }, 200);
  });

  startDriveCycle(); // initial launch
});




// add resize handling

  // const car = document.querySelector('.logo-car');
  // let resizeTimeout;

  // function getDriveTime() {
  //   return Math.round(window.innerWidth * 2.37 + 3176);
  // }

  // window.addEventListener('resize', () => {
  //   document.body.classList.add('no-animation');
  //   car.classList.remove('animate-wheels');
  //   clearTimeout(resizeTimeout);

  //   resizeTimeout = setTimeout(() => {
  //     // Give the layout a bit of buffer time to settle
  //     setTimeout(() => {
  //       document.body.classList.remove('no-animation');
  //       startDriveCycle(); // restart animation cleanly
  //     }, 2000); // Adjust this if needed
  //   }, getDriveTime()); // Wait for resize to finish
  // });


  // function startDriveCycle() {
  //   const removeStyleDelay = getDriveTime();
  //   car.classList.remove('animate-wheels');

  //   void car.offsetWidth;

  //   setTimeout(() => {
  //     car.classList.add('animate-wheels');

  //     setTimeout(() => {
  //       car.classList.remove('animate-wheels');
  //     }, removeStyleDelay); 
  //   }, 100);
  // }

  // console.log(getDriveTime());
  // setInterval(startDriveCycle, getDriveTime());