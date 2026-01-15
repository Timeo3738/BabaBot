form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const mcname = form.mcname.value;
    const discordname = form.discordname.value;
    const description = form.description.value;
    const types = Array.from(form.querySelectorAll('input[name="type"]:checked')).map(cb => cb.value);

    const webhookData = {
        embeds: [{
            title: "📝 Nouveau formulaire reçu",
            color: 0x00FF00,
            fields: [
                { name: "Minecraft", value: mcname, inline: true },
                { name: "Discord", value: discordname, inline: true },
                { name: "Type", value: types || "Aucun" },
                { name: "Description", value: description }
            ],
            timestamp: new Date()
        }]
    };

    try {
        await fetch("https://discordapp.com/api/webhooks/1461390593220411522/3OfAEFpZGWhpJQ0r3hvFYnl9bNdmC3KGw6rs4SdfTPJcxG27ond8c9RP1pcH4AMq6ZaJ", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(webhookData)
        });
        successMsg.style.display = 'block';
        form.reset();
    } catch (error) {
        console.error(error);
        alert("Erreur lors de l'envoi !");
    }
});
