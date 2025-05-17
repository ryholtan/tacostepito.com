window.addEventListener('DOMContentLoaded', () => {
  const car = document.querySelector('.logo-car');

  let resizeTimeout;

  window.addEventListener('resize', () => {
    document.body.classList.add('no-animation');
    car.classList.remove('animate-wheels');
    clearTimeout(resizeTimeout);

    resizeTimeout = setTimeout(() => {
      // Give the layout a bit of buffer time to settle
      setTimeout(() => {
        document.body.classList.remove('no-animation');
        startDriveCycle(); // restart animation cleanly
      }, 2000); // Adjust this if needed
    }, getDriveTime()); // Wait for resize to finish
  });

  function getDriveTime() {
    return Math.round(window.innerWidth * 2.37 + 3176);
  }

  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('nav-links').classList.toggle('active');
  });

  document.getElementById('year').textContent = new Date().getFullYear();



  function startDriveCycle() {
    const removeStyleDelay = getDriveTime();
    car.classList.remove('animate-wheels');

    void car.offsetWidth;

    setTimeout(() => {
      car.classList.add('animate-wheels');

      setTimeout(() => {
        car.classList.remove('animate-wheels');
      }, removeStyleDelay); 
    }, 100);
  }

  setTimeout(() => {
    startDriveCycle();
  }, getDriveTime());
  setInterval(startDriveCycle, 12000);
});