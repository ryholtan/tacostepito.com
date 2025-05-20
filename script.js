window.addEventListener('DOMContentLoaded', () => {

  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('nav-links').classList.toggle('active');
  });

  document.getElementById('year').textContent = new Date().getFullYear();

});


window.addEventListener('load', () => {


  const car = document.querySelector('.logo-car');
  let driveInterval;
  let resizeTimeout;

  // Dynamically calculate the duration of the animation based on screen width
  function getDriveTime() {
    return Math.round(window.innerWidth * 2.37 + 3176);
  }

  // Start one full drive cycle
  function startDriveCycle() {
    const duration = getDriveTime();
    car.classList.remove('animate-wheels');
    void car.offsetWidth; // force reflow
    car.classList.add('animate-wheels');

      // HIDE just after drive off (~25%)
  setTimeout(() => {
    car.classList.add('invisible');
  }, duration * 0.45);

  // SHOW again before return begins (~30–35%)
  setTimeout(() => {
    car.classList.remove('invisible');
  }, duration * 0.60);

    // Remove class after duration so it can be re-triggered
    setTimeout(() => {
      car.classList.remove('animate-wheels');
    }, duration);
  }

  // Setup and start the repeating interval
  function setupDriveInterval() {
    clearInterval(driveInterval); // prevent duplicates
    driveInterval = setInterval(startDriveCycle, 12000);
  }

  // Handle resizes gracefully
  function handleResize() {
    document.body.classList.add('no-animation');
    car.classList.remove('animate-wheels');
    clearTimeout(resizeTimeout);

    resizeTimeout = setTimeout(() => {
      // Give the layout some time to finish reflowing
      document.body.classList.remove('no-animation');
      startDriveCycle();
      setupDriveInterval();
    }, 500);
  }

  startDriveCycle();        // start first cycle once everything is ready
  setupDriveInterval();     // begin loop
  window.addEventListener('resize', handleResize); // add resize handling

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
});
