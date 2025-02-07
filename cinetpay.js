<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inovia - Boutique en ligne</title>
    <script src="https://cdn.cinetpay.com/seamless/main.js"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 0;
            padding: 0;
            background-color: #f8f8f8;
        }
        header {
            background-color: #FF0080;
            color: white;
            padding: 20px;
            font-size: 24px;
        }
        .container {
            padding: 20px;
        }
        .btn {
            display: inline-block;
            background-color: #FF0080;
            color: white;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 20px;
        }
        #btn-quit {
            background-color: #d9534f;
            color: white;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <nav style="background-color: #FF0080; padding: 15px; text-align: center;">
        <a href='/' style='color: white; text-decoration: none; margin: 10px;'>Accueil</a> |
        <a href='/boutique' style='color: white; text-decoration: none; margin: 10px;'>Boutique</a> |
        <a href='/a-propos' style='color: white; text-decoration: none; margin: 10px;'>À propos</a>
    </nav>

    <header>
        Bienvenue sur Inovia - Votre boutique en ligne
    </header>

    <div class="container">
        <h1>Découvrez nos meilleurs produits</h1>
        <p>Commandez facilement et recevez vos articles rapidement.</p>
        <a class='btn' href='/boutique'>Accéder à la boutique</a>
    </div>

    <div class="sdk">
        <h1>Paiement CinetPay</h1>
        <button id="btn-payer">Payer maintenant</button>
    </div>

    <script>
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
                        alert("❌ Votre paiement a échoué !");
                        showExitButton(); // Afficher bouton "Quitter"
                    } else if (data.status === "ACCEPTED") {
                        alert("✅ Paiement réussi !");
                        showExitButton(); // Afficher bouton "Quitter"
                    }
                });

                CinetPay.onError(function (data) {
                    console.error("❌ Erreur CinetPay:", data);
                });
            }

            // Fonction pour afficher le bouton "Quitter"
            function showExitButton() {
                let exitButton = document.createElement("button");
                exitButton.textContent = "Quitter";
                exitButton.id = "btn-quit";
                exitButton.onclick = function () {
                    window.location.href = '/';  // Redirige vers la page d'accueil ou une autre page
                };
                document.body.appendChild(exitButton); // Ajouter le bouton à la page
            }
        });
    </script>
</body>
</html>
