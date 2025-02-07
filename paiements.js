
document.addEventListener("DOMContentLoaded", function () {
    function checkout() {
        CinetPay.setConfig({
            apikey: "68265673267a5ae17cf5a08.79292594", // Ton API Key
            site_id: "105887404", // Ton Site ID
            notify_url: "https://ton-site.com/notify/",
            mode: "PRODUCTION"
        });

        CinetPay.getCheckout({
            transaction_id: Math.floor(Math.random() * 100000000).toString(),
            amount: 100,
            currency: "XOF",
            channels: "ALL",
            description: "Test de paiement",
            customer_name: "Joe",
            customer_surname: "Down",
            customer_email: "down@test.com",
            customer_phone_number: "088767611",
            customer_address: "BP 0024",
            customer_city: "Antananarivo",
            customer_country: "CM",
            customer_state: "CM",
            customer_zip_code: "06510",
        });
document.getElementById("btn-payer").addEventListener("click", function () {
    CinetPay.setConfig({
        apikey: '68265673267a5ae17cf5a08.79292594', // Remplace par ta vraie API Key
        site_id: 105887404, // Remplace par ton vrai Site ID
        notify_url: 'https://mondomaine.com/notify/',
        mode: 'PRODUCTION'
    });

    CinetPay.getCheckout({
        transaction_id: Math.floor(Math.random() * 100000000).toString(),
        amount: 100,
        currency: 'XOF',
        channels: 'ALL',
        description: 'Test de paiement',
        customer_name: "Joe",
        customer_surname: "Down",
        customer_email: "down@test.com",
        customer_phone_number: "088767611",
        customer_address: "BP 0024",
        customer_city: "Antananarivo",
        customer_country: "CM",
        customer_state: "CM",
        customer_zip_code: "06510",
    });

    CinetPay.waitResponse(function (data) {
        if (data.status == "REFUSED") {
            alert("Votre paiement a échoué");
        } else if (data.status == "ACCEPTED") {
            alert("Votre paiement a été effectué avec succès");
        }
    });

    CinetPay.onError(function (data) {
        console.log(data);
    });
});
        CinetPay.waitResponse(function (data) {
            if (data.status == "REFUSED") {
                alert("Votre paiement a échoué");
                window.location.reload();
            } else if (data.status == "ACCEPTED") {
                alert("Votre paiement a été effectué avec succès");
                window.location.reload();
            }
        });<script src="https://cdn.cinetpay.com/seamless/main.js"></script>
<script src="paiement.js"></script>
</body>
</html>

        CinetPay.onError(function (data) {
            console.log(data);
        });
    }

    // Ajouter l'événement sur le bouton
    document.getElementById("btn-payer").addEventListener("click", checkout);
});
