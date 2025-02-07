
document.addEventListener("DOMContentLoaded", function () {
    let button = document.createElement("button");
    button.textContent = "Payer avec CinetPay";
    button.onclick = checkout;
    document.body.appendChild(button);

   CinetPay.setConfig({
    apikey: '101488277067a594c6ab76d7.05068804',
    site_id: 105887404,
    notify_url: 'https://ton-site.com/notify/',
    mode: 'PRODUCTION'  
        });

        CinetPay.getCheckout({
            transaction_id: Math.floor(Math.random() * 100000000).toString(),
            amount: 100,
            currency: 'XOF',
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
                alert("Votre paiement a échoué");
            } else if (data.status === "ACCEPTED") {
                alert("Paiement réussi !");
            }
        });

        CinetPay.onError(function (data) {
            console.error(data);
        });
    }
});
