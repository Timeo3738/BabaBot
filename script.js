// Récupère le formulaire et le message de succès
const form = document.getElementById('contactForm');
const successMsg = document.getElementById('successMsg');

form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    // Récupère les valeurs du formulaire
    const formData = {
        mcname: form.mcname.value,
        discordname: form.discordname.value,
        description: form.description.value,
        type: Array.from(form.querySelectorAll('input[name="type"]:checked'))
                    .map(cb => cb.value)
                    .join(', ')
    };

    try {
        // Envoie les données au serveur Flask
        const res = await fetch('https://falling-unit-2ae1.timeo-coussegal.workers.dev/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        const text = await res.text();
console.log("Réponse serveur :", text);


        if(result.success){
            // Affiche le message de succès
            successMsg.style.display = 'block';
            form.reset(); // Vide le formulaire
        } else {
            alert("Erreur lors de l'envoi : " + (result.error || "Inconnue"));
        }

    } catch (err) {
        console.error(err);
        alert("Erreur lors de l'envoi !");
    }
});
