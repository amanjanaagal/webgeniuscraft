document.addEventListener('DOMContentLoaded', function() {
    var countdownElement = document.getElementById('countdown');
    var launchDate = new Date('2024-02-18T00:00:00Z'); // Set your launch date and time
  
    function updateCountdown() {
      var now = new Date().getTime();
      var distance = launchDate - now;
  
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      countdownElement.innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';
  
      if (distance < 0) {
        countdownElement.innerHTML = 'Launch Day!';
      }
    }
  
    // Update the countdown every second
    setInterval(updateCountdown, 1000);
  
    // Initial call to set the initial countdown
    updateCountdown();
  });
  
