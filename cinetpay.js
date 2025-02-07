<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://cdn.cinetpay.com/seamless/main.js"></script>
    <style>
        .sdk {
            display: block;
            position: absolute;
            background-position: center;
            text-align: center;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    </style>
    <script>
        function checkout() {
            CinetPay.setConfig({
                apikey: '101488277067a594c6ab76d7.05068804', // Ton API Key
                site_id: '105887404', // Ton Site ID
                notify_url: 'https://ton-site.com/notify/', // Mets ton URL de notification
                mode: 'PRODUCTION' // Mets 'SANDBOX' si tu veux tester
            });

            CinetPay.getCheckout({
                transaction_id: Math.floor(Math.random() * 100000000).toString(),
                amount: 1000,
                currency: 'XOF',
                channels: 'ALL',
                description: 'Paiement sur Inovia',   
                
                // Informations client
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

            CinetPay.waitResponse(function(data) {
                if (data.status == "REFUSED") {
                    alert("Votre paiement a échoué");
                    window.location.reload();
                } else if (data.status == "ACCEPTED") {
                    alert("Votre paiement a été effectué avec succès");
                    window.location.reload();
                }
            });

            CinetPay.onError(function(data) {
                console.log(data);
            });
        }
    </script>
</head>
<body>
    <div class="sdk">
        <h1>SDK SEAMLESS</h1>
        <button onclick="checkout()">Payer maintenant</button>
    </div>
</body>
</html>
