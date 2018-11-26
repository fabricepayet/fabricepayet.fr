---
title: "L'architecture serverless le next big thing ?"
date: "2018-09-24"
cover: https://s3.eu-west-3.amazonaws.com/fabricepayetfr/images/serverless.jpg
---


L'architecture Serverless est un nouveau modèle pour le [Cloud Computing](https://fr.wikipedia.org/wiki/Cloud_computing), il change la façon dont les développeurs conçoivent les applications et leur permettent de se concentrer uniquement sur la logique métier, sans avoir besoin de se soucier des problématiques serveurs. Serverless ne signifie pas qu'on n'utilise pas de serveurs, mais plutôt que les développeurs peuvent faire une abstraction complète de ceux-ci.

![Photo: shylendrahoode/Getty Images](https://s3.eu-west-3.amazonaws.com/fabricepayetfr/images/serverless.jpg)

*Photo: shylendrahoode/Getty Images*

Pour mieux comprendre l'architecture Serverless, il faut comprendre ses deux composantes:
- Le Baas (Backend as Service) est le fait d'utiliser des services tiers hébergés dans le cloud et exposés grâce à des APIs
- Le Faas (Function as Service) est le fait de permettre d'envoyer de la logique serveur sous forme de fonction et de pouvoir l'exécuter suite à des événements

### Les avantages du l'architecture Serverless

Les avantages de l'architecture Serverless pour les entreprises sont nombreux, et cela se traduit par un gain de temps et une réduction des coûts opérationnels :

- Plus de gestion de serveurs, on se libére des contraintes de disponibilité, de sécurité ou des problématiques de mise à jour liées aux serveurs
- La mise à l'échelle automatique permet de supporter une augmentation de la charge sans augmenter la complexité technique. Ce sont les fournisseurs de services Cloud qui se chargent de la mise à l'échelle (Vous n'avez même plus besoin de gérer des instances de serveur...)
- Le concept de "Pay as you Go" et les micro-factures permettent une réduction des coûts: Vous ne payez que pour l'exécution de votre code ou pour l'accès aux ressources. Si votre application n'est pas utilisée, vous n'avez rien à payer.

![Photo: Colin Anderson/Getty Images](https://s3.eu-west-3.amazonaws.com/fabricepayetfr/images/serverless2.jpg)

*Photo: Colin Anderson/Getty Images*

### Comment faire du Serverless ?

Les principaux fournisseurs de Cloud (Google, Microsoft et Amazon) proposent chacun leur solution pour faire du serverless. Le plus connu est [Amazon Lambda](https://aws.amazon.com/fr/serverless/) car ils ont une politique de prix très agressive et qu'il dispose d'une multitude de services s'intégrant très bien entre eux ([Lambda](https://aws.amazon.com/fr/lambda/) + [API Gateway](https://aws.amazon.com/fr/api-gateway/) + [DynamoDB](https://aws.amazon.com/fr/dynamodb/) 🚀). Mais les solutions concurrentes comme [Google Cloud Functions](https://cloud.google.com/serverless/) et [Microsoft Azure Functions](https://azure.microsoft.com/en-us/overview/serverless-computing/) sont tout aussi efficace.

Il est parfois difficile de choisir le bon fournisseur de cloud et en utilisant l'architecture serverless vous vous rendez très dépendant de celui-ci. Le framework [Serverless](https://github.com/serverless/serverless) essaie de réduire la dépendance ceux-ci et tout en simplifiant la configuration des différents services.

Je ne sais pas ce que vous en pensez, mais moi j'ai hâte de tester du Serverless sur un vrai projet ;)

