const form = document.getElementById('contactForm');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

fetch("http://51.75.118.171:20058/submit-form", {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: new URLSearchParams(data)
});


  document.getElementById('successMsg').style.display = 'block';
  form.reset();
  setTimeout(() => {
    document.getElementById('successMsg').style.display = 'none';
  }, 3000);
});
