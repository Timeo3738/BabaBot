const form = document.getElementById('contactForm');
const successMsg = document.getElementById('successMsg');
successMsg.style.display='none';

// décocher les autres checkbox
const checkboxes = form.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(ch => { 
  ch.addEventListener('change', () => { 
    if(ch.checked) { checkboxes.forEach(c => { if(c!==ch) c.checked=false; }); }
  }); 
});

// POST vers ton backend / bot Discord
form.addEventListener('submit', async e => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  // Remplace TON_BACKEND_URL par l'URL de ton bot Flask ou webhook
  await fetch("TON_BACKEND_URL_ICI", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  successMsg.style.display='block';
  form.reset();
  setTimeout(()=>{ successMsg.style.display='none'; }, 3000);
});
