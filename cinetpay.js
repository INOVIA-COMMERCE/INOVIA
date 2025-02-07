document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("btn-payer");
    if (!button) {
        console.error("❌ ERREUR: Le bouton 'btn-payer' n'a pas été trouvé !");
        return;
    }

    button.addEventListener("click", function () {
        console.log("✅ Clic détecté sur le bouton Payer");
        checkout();
    });

    function checkout() {
        CinetPay.setConfig({
            apikey: '101488277067a594c6ab76d7.05068804', // Ton API Key
            site_id: 105887404, // Ton Site ID
            notify_url: 'https://ton-site.com/notify/', // URL de notification
            mode: 'SANDBOX'
        });

        CinetPay.getCheckout({
            transaction_id: Math.floor(Math.random() * 100000000).toString(),
            amount: 100,
            currency: 'XAF',
            channels: 'ALL',
            description: 'Achat sur Inovia',
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

        CinetPay.waitResponse(function (data) {
            if (data.status === "REFUSED") {
                alert("❌ Votre paiement a échoué !");
            } else if (data.status === "ACCEPTED") {
                alert("✅ Paiement réussi !");
            }
        });

        CinetPay.onError(function (data) {
            console.error("❌ Erreur CinetPay:", data);
        });
    }
});
