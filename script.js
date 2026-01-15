const form = document.getElementById('contactForm');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  await fetch("https://TON_SERVEUR_API/submit-form", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  document.getElementById('successMsg').style.display = 'block';
  form.reset();
  setTimeout(() => {
    document.getElementById('successMsg').style.display = 'none';
  }, 3000);
});
