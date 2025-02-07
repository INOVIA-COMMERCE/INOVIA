document.addEventListener("DOMContentLoaded", function () {
    // Vérifie si CinetPay est défini
    if (typeof CinetPay === 'undefined') {
        console.error('CinetPay n\'est pas chargé correctement');
        return;
    }

    // Crée le bouton de paiement CinetPay
    let button = document.createElement("button");
    button.textContent = "Payer avec CinetPay"; // Texte du bouton
    button.id = "btn-payer"; // Ajoute un ID pour cibler le bouton

    // Ajoute un événement 'onclick' au bouton
    button.onclick = checkout;
    document.body.appendChild(button); // Ajoute le bouton à la page

    // Fonction qui lance le paiement
    function checkout() {
        CinetPay.setConfig({
            apikey: '101488277067a594c6ab76d7.05068804', // API key de CinetPay
            site_id: 105887404, // ID de ton site
            notify_url: 'https://ton-site.com/notify/', // URL de notification (change-la si nécessaire)
            mode: 'PRODUCTION'  // Mets 'SANDBOX' pour les tests
        });

        CinetPay.getCheckout({
            transaction_id: Math.floor(Math.random() * 100000000).toString(),
            amount: 100,  // Montant du paiement
            currency: 'XOF',
            channels: 'ALL',
            description: 'Achat sur Inovia', // Description de la commande
            customer_name: "Client",
            customer_surname: "Inovia",
            customer_email: "client@inovia.com",
            customer_phone_number: "677000000",
            customer_address: "BP 0024",
            customer_city: "Douala",
            customer_country: "CM",
            customer_state: "CM",
            customer_zip_code: "06510"
        });

        // Gestion des réponses de CinetPay
        CinetPay.waitResponse(function (data) {
            if (data.status === "REFUSED") {
                alert("Votre paiement a échoué");
            } else if (data.status === "ACCEPTED") {
                alert("Paiement réussi !");
            }
        });

        // Gestion des erreurs
        CinetPay.onError(function (data) {
            console.error(data);
        });
    }
});
