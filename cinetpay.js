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
        function checkout() {
            // Vérification de l'API Key et Site ID
            console.log("API Key: TON_API_KEY");
            console.log("Site ID: TON_SITE_ID");
            
            // Configuration CinetPay
            CinetPay.setConfig({
                apikey: 'ton_api_key_ici', // Remplace par ta clé API
                site_id: 'ton_site_id_ici', // Remplace par ton ID de site
                notify_url: 'http://mondomaine.com/notify/', // URL pour la notification
                mode: 'SANDBOX' // Utilise 'SANDBOX' pour tester
            });

            // Lancement du paiement CinetPay
            console.log("Démarrage du paiement...");
            CinetPay.getCheckout({
                transaction_id: Math.floor(Math.random() * 100000000).toString(),
                amount: 100, // Montant à payer
                currency: 'XAF', // Devise XAF
                channels: 'ALL', // Modes de paiement disponibles
                description: 'Test de paiement',
                customer_name: "Joe",
                customer_surname: "Down",
                customer_email: "down@test.com",
                customer_phone_number: "088767611",
                customer_address: "BP 0024",
                customer_city: "Antananarivo",
                customer_country: "CM",
                customer_state: "CM",
                customer_zip_code: "06510"
            });

            // Vérifier la réponse
            CinetPay.waitResponse(function(data) {
                console.log("Réponse de CinetPay:", data); // Log de la réponse
                if (data.status == "REFUSED") {
                    alert("Votre paiement a échoué");
                    showExitButton(); // Afficher bouton "Quitter"
                } else if (data.status == "ACCEPTED") {
                    alert("Votre paiement a été effectué avec succès");
                    showExitButton(); // Afficher bouton "Quitter"
                }
            });

            // Gestion des erreurs
            CinetPay.onError(function(data) {
                console.error("Erreur CinetPay:", data); // Log des erreurs
            });
        }

        // Fonction pour afficher le bouton "Quitter"
        function showExitButton() {
            let exitButton = document.createElement("button");
            exitButton.textContent = "Quitter";
            exitButton.id = "btn-quit";
            exitButton.onclick = function() {
                window.location.href = '/';  // Redirige vers la page d'accueil ou une autre page
            };
            document.body.appendChild(exitButton); // Ajouter le bouton à la page
        }

        // Lier l'action du bouton "Payer maintenant"
        document.getElementById("btn-payer").addEventListener("click", checkout);
    </script>
</body>
</html>
