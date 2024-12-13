# Description de l'application
Le projet vise à développer une application web permettant de mettre en relation des entrepreneurs freelance avec des entreprises ou des clients professionnels en mettant l’accent sur la mise en avant des projets effectués par les freelances même sans expérience, pour que les entreprises perdent cette peur de se tromper de profils et de simplifier le process de recrutement pour les deux parties.

## Les acteurs
Seront susceptibles d’utiliser notre application web les individus souhaitant partager auprès de recruteurs leur portfolio de manière visuelle et interactive. De l’autre côté, les recruteurs pourront eux avoir un accès aux différents portfolios des chercheurs d’emploi. 
En ce qui concerne les chercheurs d’emploi, ce sont des individus dont le partage d’un CV auprès des recruteurs n’est pas suffisant. En effet, pour les développeurs, chercheurs, data analyst et autres catégories semblables, le partage des projets déjà accomplis se révèle être pertinent dans leur recherche d’emploi. 
De la même manière, du point de vue des recruteurs, la sélection de personnel pour la réalisation d’une tâche ou même l’accréditation d’un poste peut être difficile avec une lecture de CV. On imagine qu’une visualisation simple des différents projets accomplis permettra une sélection plus simple et pertinente pour ceux-ci. 

# Conception initiale
## Questions d’empathie
### Côté consultant : 
### Qu’est-ce qui te plaît du côté du consulting plutôt que d’appartenir à une entreprise en CDI ?

1.L’aspect volatile et changeant : On apprécie pouvoir changer d’air souvent et ne pas appartenir à la même boite et possiblement faire tout le temps la même chose ou travailler toujours avec les mêmes personnes etc…

2.En tant que jeune travailleur, je préfère avoir un CDI : je pense perdre du crédit si je recherche un appartement ou que je fasse un emprunt à la banque si je suis auto-entrepreneur.

### Préfères-tu te faire contacter ou contacter toi-même les entreprises ?

1. Lors de la recherche d’emploi, je préfère me faire contacter car ça montre que l’entreprise a une volonté et un vrai intérêt de me recruter. Sinon en règle générale, la partie “job application” est en générale déplaisante : en générale on te snob sans vraiment avoir d’explications.
2. Je préfère contacter les entreprises car j’ai un mauvais a priori des entreprises qui me contacte.
Qu’est-ce que tu voudrais qu’on mette en avant dans ton profil quand tu postules à une offre d’emploi ?
1. En tant que jeune travailleur, je préférerais qu’on mette un accent sur mes soft skills, ce qui est difficile à faire sur de l'écrit. Car de toute façon, en tant que [Dessinateur/projeteur] je ne peux pas tellement faire la différence sur les compétences que j’ai acquises.
2. En tant que développeur full stack, je préfèrerais mettre l’accent sur les technologies que j’utilise plutôt que mes softs skills.
   
### Côté recruteur : 
### Est-ce que ça vous arrive d’engager des intérimaires/consultants pour des projets ?
Oui, même si souvent on essaye de composer des équipes avec les ressources humaines que l’on a déjà, et en général quand il nous manque des profils, c’est qu’ils nous sont nécessaires maintenant mais aussi plus tard donc ensuite on négocie pour les recruter à long terme.

### Est-ce que vous pourriez me décrire votre processus de recrutement ?
Classique : Poste sur différentes plateformes (Linkedin, Indeed etc…). On examine les CVs, on demande aussi une lettre de motivation et ensuite on fait passer un entretien.

### Quels sont les critères de recrutement ?
Pour choisir, on regarde la balance entre le niveau du diplôme de la personne, son expérience professionnelle en faisant la différence entre grande entreprise et petite PME, et son “savoir être” qui se distingue en général en entretien. L'expérience, nous [en tant qu’entreprise], on la scinde en 3 niveaux : moins d’1 an, entre 1 et 3 ans et plus de 3 ans.

### Question bonus : Vous n’avez pas parlé du coût, est-ce que l’argent n’est pas un critère ?
Si, bien sûr, c'est un critère important, notre but est de rester en accord avec les salaires que nous avons déjà versé par le passé pour garder une cohérence. Mais évidemment si le profil nous plaît, nous sommes plus enclins à négocier.

### Vous est-il déjà arrivé de composer une équipe de plusieurs consultants/intérimaires qui ne se connaissaient pas ? 
Oui, d’ailleurs c’est bénéfique de mixer les profils et de faire discuter des gens internes à l’entreprises avec des personnes externes à l’entreprise, car souvent ils ont une vision plus fraîche et apportent des nouvelles idées. En général, la collaboration se passe bien.


## Modèles de personas type

### Christelle : DRH en entreprise (Recruteur ponctuel) 

Âge = 35-50 ans
Profession = directrice des ressources humaines
Contexte professionnel : Travaille pour une entreprise de services numériques (ESN) spécialisée en développement web.
	
Objectifs : 
Trouver un freelance ou un prestataire compétent pour combler un besoin ponctuel sans embaucher un nouvel employé.
Gagner du temps en identifiant rapidement le profil idéal via des indicateurs clés (nombre de projets réalisés, taux de réussite, tarif horaire).

Comportements : 
Privilégie une navigation rapide et efficace.
S’intéresse davantage aux indicateurs de performance qu’à la qualité technique des projets individuels, car elle ne possède pas les compétences pour les évaluer.
Ne souhaite pas gérer des processus complexes ou chronophages.

Besoins fonctionnels : 
Accéder à une recherche catégorisée (par type de mission).
Visualiser des profils avec des informations claires et synthétiques : tarifications horaires & indicateurs de performance. 
Disposer d’une présentation succincte des projets réalisés.

### Mathilde - Jeune diplômée en analyse des données (Chercheuse d’emploi)

Âge : 22-28 ans
Profession : Stagiaire en analyse des données, cherche à étoffer son portfolio professionnel. 
Contexte professionnel : En début de carrière, souhaite se démarquer sur le marché de l’emploi.

Objectifs : 
Construire un portfolio attrayant à partir de ses projets antérieurs et missions ponctuelles réalisées via la plateforme ou ailleurs.
Gagner en visibilité auprès des employeurs et recruteurs potentiels.
Développer ses compétences et améliorer son CV en travaillant sur des missions variées.

Comportements : 
Motivée par la reconnaissance de ses compétences et son potentiel de progression.
Cherche à attirer des employeurs en mettant en avant des réalisations concrètes et un profil soigné.
Encline à partager son profil et son portfolio sur d’autres plateformes professionnelles comme LinkedIn.

Besoins fonctionnels : 
Un espace portfolio structuré et attractif pour présenter : projets réalisés, compétences et spécialités. 
Opportunités de missions adaptées à son niveau d’expérience (missions pour débutants ou petits projets).
Feedback constructif ou recommandations des recruteurs après les missions.

### Michael - Entrepreneur en croissance (Employeur régulier)

Âge : 30-45 ans
Profession : créateur de start-up dans le domaine comptable.
Contexte professionnel : son entreprise connaît une croissance rapide et reçoit un volume élevé de demandes.

Objectifs : 
Identifier rapidement des talents expérimentés pour déléguer des tâches tout en maintenant un haut niveau de qualité.
Pouvoir mener une évaluation fiable des compétences des candidats grâce à leurs projets précédents.
Faciliter le processus de recrutement pour éviter des délais indésirables.

Comportements : 
Fortement orienté vers la qualité des projets réalisés. 
Prêt à payer davantage pour des profils de qualité supérieure avec un gage de fiabilité.
Cherche à établir des collaborations à long terme avec des talents éprouvés.

Besoins fonctionnels : 
Une recherche avancée pour filtrer les candidats selon : expérience, type de projet réalisés, tarifs et disponibilité. 
Accès à un portfolio détaillé avec des liens directs vers les projets pour évaluer leur qualité.
Fonctionnalités permettant de sauvegarder ou comparer plusieurs profils.

### Synthèse des besoins utilisateurs : 
Navigation simplifiée : Catégories claires pour trouver rapidement ce que l’on cherche.
Mise en avant des indicateurs clés : Expérience, taux de réussite, tarifs. 
Portfolios interactifs : Accès aux projets réalisés avec descriptions et liens directs.
Filtres de recherche : Catégories, expérience, spécialités, tarif horaire.
Interaction : Possibilité pour les utilisateurs de contacter directement un profil ou proposer une mission.

## Scénarios d’utilisation: 
Jeune diplômée, cherche à remplir son portfolio pour lancer sa carrière professionnelle. Pour ce faire, elle crée un profil sur notre plateforme et recherche des missions dans le domaine du machine learning. 

Président d’une start-up prenant de l’envergure rapidement, recherche un spécialiste en cybersécurité pour renforcer son équipe. Très exigeant sur la qualité du travail fourni, il souhaite quelqu’un d’expérimenté et est prêt à payer le prix fort. 

## Modèle de tâches type

1. Recherche et sélection de profils (chercheurs de talents)
 
Objectif : Permettre aux recruteurs de trouver facilement le profil idéal pour leurs besoins.
### Tâches principales 

Accéder à une page de recherche avec filtres :
Sélectionner une catégorie de mission (ex. développement web, data analysis, design).

Filtrer par critères :
Tarif horaire.
Expérience (nombre de projets réalisés, type de projets).
Disponibilité.

Visualiser une liste de profils :
Voir les informations essentielles (photo, nom, tarif horaire, spécialité, taux de réussite, note moyenne).

Consulter un profil détaillé :
Découvrir une description des compétences.
Parcourir le portfolio avec un résumé des projets réalisés.
Accéder à des statistiques (indicateurs clés comme taux de réussite ou évaluations).
Ajouter des profils à une liste de favoris ou de comparaisons.
Contacter le profil ou proposer une mission.

2. Création d’un portfolio 
 
Objectif : Offrir un espace au sein duquel les chercheurs d’emploi peuvent présenter leurs compétences et expériences de manière attractive.

### Tâches principales 

Créer un compte et compléter un profil :
Ajouter une photo, un titre professionnel et une description.
Spécifier les domaines de compétence et les missions recherchées.

Ajouter des projets au portfolio :
Uploader des fichiers ou liens vers des projets (ex. GitHub, Behance).
Rédiger une description (objectif du projet, rôle joué, résultats obtenus).

Mettre en avant des indicateurs personnels :
Ajouter des statistiques comme le nombre de projets réalisés ou les retours clients.

Mettre à jour la disponibilité :
Indiquer si l’utilisateur est disponible pour de nouvelles missions.

3. Proposition et gestion de missions (pour tous les utilisateurs)
 
Objectif : Simplifier les échanges et collaborations entre recruteurs et chercheurs d’emploi.

### Tâches principales

Proposer une mission :
Décrire la mission (titre, description, durée, compétences requises).
Indiquer un budget ou une tarification horaire.

Recevoir des candidatures :
Visualiser les profils des candidats intéressés.
Comparer les profils et sélectionner un candidat.

Gérer une mission en cours :
Suivre l’avancement des projets.
Échanger avec le candidat via la messagerie intégrée.

Finaliser la mission :
Noter le travail réalisé.
Rédiger un commentaire (facultatif).

4. Navigation et découverte de la plateforme (pour tous les utilisateurs)
 
Objectif : Améliorer l’expérience utilisateur pour qu’il trouve facilement ce dont il a besoin.

### Tâches principales 

Parcourir les catégories et découvrir les fonctionnalités principales.
Utiliser une barre de recherche avec suggestions intelligentes.
Accéder à des articles ou conseils pour optimiser l’utilisation de la plateforme (par exemple, comment créer un portfolio efficace ou recruter le bon candidat).
Naviguer entre les profils, missions et portfolios.

5. Évaluation et feedback (pour recruteurs et chercheurs d’emploi)
 
Objectif : Instaurer une confiance mutuelle grâce à des retours transparents.

### Tâches principales 
Pour les recruteurs :
Noter le travail des candidats après la fin de la mission.
Fournir un feedback écrit pour le portfolio du candidat.
Pour les chercheurs d’emploi :
Noter et commenter l’expérience avec un recruteur (clarté des consignes, professionnalisme).

6. Système de messagerie intégré (pour Christelle, Michael et Mathilde)
 
Objectif : Faciliter la communication entre utilisateurs pour organiser des collaborations.

### Tâches principales 

Envoyer et recevoir des messages.
Joindre des fichiers ou des documents relatifs à une mission.
Recevoir des notifications en temps réel.


## Fonctionnalités à réaliser 

Rendre le partage de portfolio simple pour les chercheurs d’emplois
Création simple de profil 
Ajout de projets/documents rapide pour étoffer le profil 
Rendre la recherche de personnel plus accessible pour les donneurs d’emploi
Recherche de personnel intuitive (création de catégories)
Visualisation des profils (indicateurs et portfolio accessibles)
