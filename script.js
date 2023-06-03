//your JS code here. If required.


document.addEventListener('DOMContentLoaded', function() {
  // Your code here
	document.addEventListener('DOMContentLoaded', function() {
  // Get the form and input elements
  const preferencesForm = document.getElementById('preferencesForm');
  const fontSizeInput = document.getElementById('fontsize');
  const fontColorInput = document.getElementById('fontcolor');

  // Set the form values based on the stored preferences
  fontSizeInput.value = getCookie('fontsize') || '16';
  fontColorInput.value = getCookie('fontcolor') || '#000000';

  // Add event listener to handle form submission
  preferencesForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get the selected values
    const fontSize = fontSizeInput.value;
    const fontColor = fontColorInput.value;

    // Set the cookies with the selected values
    setCookie('fontsize', fontSize);
    setCookie('fontcolor', fontColor);

    // Apply the selected preferences
    document.documentElement.style.setProperty('--fontsize', fontSize + 'px');
    document.documentElement.style.setProperty('--fontcolor', fontColor);
  });

  // Function to set a cookie
  function setCookie(name, value) {
    document.cookie = `${name}=${value}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
  }

  // Function to get a cookie value
  function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  }
});

});