<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fútbol en Vivo</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        .channel {
            background-color: #fff;
            margin: 10px 0;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .channel img {
            max-width: 100px;
            vertical-align: middle;
        }
        .channel a {
            margin-left: 20px;
            font-size: 20px;
            text-decoration: none;
            color: #333;
        }
        .channel a:hover {
            color: #007BFF;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Ver Fútbol en Vivo</h1>
        <div id="channels"></div>
    </div>
    <script>
        const channels = [
            {
                name: "TyC Sports",
                url: "https://futbollibretv.nu/ver-tyc-sports",
                logo: "https://via.placeholder.com/100"
            },
            {
                name: "ESPN Premium",
                url: "https://futbollibretv.nu/ver-espn-premium",
                logo: "https://via.placeholder.com/100"
            },
            {
                name: "TNT Sports",
                url: "https://futbollibretv.nu/ver-tnt-sports",
                logo: "https://via.placeholder.com/100"
            }
            // Add more channels as needed
        ];

        const channelsContainer = document.getElementById('channels');

        channels.forEach(channel => {
            const channelDiv = document.createElement('div');
            channelDiv.classList.add('channel');

            const channelLogo = document.createElement('img');
            channelLogo.src = channel.logo;
            channelLogo.alt = channel.name;

            const channelLink = document.createElement('a');
            channelLink.href = channel.url;
            channelLink.target = "_blank";
            channelLink.textContent = `Ver ${channel.name}`;

            channelDiv.appendChild(channelLogo);
            channelDiv.appendChild(channelLink);

            channelsContainer.appendChild(channelDiv);
        });
    </script>
</body>
</html>