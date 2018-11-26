---
title: "Qu'est qu'une progressive web app (PWA) ?"
date: "2018-08-31"
cover: https://s3.eu-west-3.amazonaws.com/fabricepayetfr/images/pwa-install.jpg
---

Une Progressive Web App ou PWA est une application web implémentant de nouvelles techniques des navigateurs (Service Worker, Manisfest, Responsive, Media API, ... ) afin d'optimiser son fonctionnement sur mobile et d'assurer son fonctionnement malgré des conditions de réseaux limités ou inexistantes. Une PWA peut donc fonctionner sans accès à internet et exécuter des tâches de fond comme une application native. Elle peut par exemple se servir des notifications push ou simplement synchroniser des données même si l'application n'est pas active. Une PWA se doit d'être :
- fiable (se charger rapidement et fonctionner sans connexion)
- rapide (répondre rapidement aux interactions de l'utilisateur)
- engageant (l'utilisateur doit avoir l'impression d'utiliser une application native)
Vous pouvez aussi regarder [les caractériques d'une PWA selon Google](https://developers.google.com/web/progressive-web-apps/).

Contrairement aux applications mobile standards, les PWAs ne se trouvent pas sur les stores ([Google Play Store](https://play.google.com/store/apps?hl=fr) ou [l'Apple Store](https://www.apple.com/ca/fr/ios/app-store/) ), mais elles sont directement accessibles dans le navigateur grâce à une URL. L'utilisateur peut directement commencer à utiliser l'application avant même que celle-ci soit installée. C'est un gros avantage quand on sait qu'une installation classique prend entre 4 et 6 étapes et qu'à chacune de ses étapes on perd jusqu'à 20% de nos utilisateurs potentiels.
Lors de sa première visite l'utilisateur est invité à installer l'application sur son périphérique. Le navigateur va lire le [Manifest](https://developers.google.com/web/fundamentals/web-app-manifest/) de l'application pour installer les ressources nécessaires et créer un raccourci de l'application sur l'écran d'accueil de l'utilisateur. L'utilisateur peut maintenant profiter d'une expérience en plein écran et cela même sans connexion a internet.

![Installation Progressive Web App Hackers News](https://s3.eu-west-3.amazonaws.com/fabricepayetfr/images/pwa-install.jpg)

Pour fonctionner avec des conditions des réseaux incertaines, la PWA utilise ce qu'on appelle un "Service Worker", qui est en fait un proxy du coté client de l'application qui va gérer le cache afin de servir les ressources en fonction de la connectivité. Un autre avantage de la PWA est qu'elle est toujours à jour sur tous les clients, contrairement à une application classique ou il faut souvent gérer plusieurs versions en production...

La PWA vous permet aussi de réduire les couts de développement, en effet les applications mobiles classiques sont souvent développées pour une plateforme unique, tandis que les PWAs fonctionnent sur toutes les plateformes. Si vous avez déja une application web, vous pouvez choisir d'améliorer progressivement votre application afin de profiter des fonctionnalités des PWAs et vous arrêter dans cette implémentation quand vous le voulez et selon vos besoins.





