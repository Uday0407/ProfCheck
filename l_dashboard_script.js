document.addEventListener('DOMContentLoaded', function () {
  const presenceButton = document.getElementById('presenceButton');
  const locationButton = document.getElementById('locationButton');
  const overlay = document.getElementById('overlay');
  const popup = document.getElementById('popup');
  const yesButton = document.getElementById('yesButton');
  const noButton = document.getElementById('noButton');
  const logoutButton = document.getElementById('logoutButton');

  locationButton.addEventListener('click',function(event) {
    event.preventDefault();
    window.location.href = "https://g.co/sharelocation";
  });

  presenceButton.addEventListener('click', () => {
    overlay.style.display = 'block';
    popup.style.display = 'block';
  });

  yesButton.addEventListener('click', () => {
    alert('You are present in cabin');
    overlay.style.display = 'none';
    popup.style.display = 'none';
  });

  noButton.addEventListener('click', () => {
    alert('You are not present in cabin');
    overlay.style.display = 'none';
    popup.style.display = 'none';
  });
  logoutButton.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "lecturerlogin.html";
  });

  
});


