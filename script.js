//Cookiebanner
// Kontrollera om cookies redan är accepterade
if (localStorage.getItem('cookiesAccepted')) {
  document.getElementById('cookie-banner').style.display = 'none';
}

// Hantera knappklick
document.getElementById('accept-cookies').addEventListener('click', function () {
  localStorage.setItem('cookiesAccepted', 'true'); // Spara användarens val i localStorage
  document.getElementById('cookie-banner').style.display = 'none'; // Dölj bannern
});




document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function(e) {
      e.preventDefault();

      console.log('Formuläret skickas...');

      const formData = new FormData(form);
      formData.append('email', 'b.hoogesteyn@gmail.com'); // Lägg till din e-postadress här

      fetch('https://formsubmit.co/ajax', {
          method: 'POST',
          body: formData,
      })
      .then(response => {
          if (!response.ok) {
              throw new Error('Nätverksrespons var inte OK');
          }
          return response.json();
      })
      .then(data => {
          console.log('Formuläret skickades framgångsrikt:', data);
          window.location.href = 'thank-you.html'; // Ändra till din tack-sida URL
      })
      .catch(error => {
          console.error('Ett fel inträffade:', error);
      });
  });
});
