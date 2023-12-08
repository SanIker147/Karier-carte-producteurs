
// Token Mapbox (remplacez 'YOUR_MAPBOX_TOKEN' par votre propre token)
mapboxgl.accessToken = 'pk.eyJ1IjoibWF0ZW8xNDciLCJhIjoiY2xwdHZnejZzMGZ4ZDJpcXp4NW85ZHNzNSJ9.efKdVLbl3WmEfIJ2b2zzMg';

// Initialiser la carte
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [2.3187, 48.8199], // Coordonnées ajustées de Montrouge
    zoom: 13
});

// Fonction pour créer un élément HTML personnalisé (image)
function createCustomMarker(imagePath, additionalClass) {
    var element = document.createElement('div');
    element.className = 'custom-marker' + additionalClass;
    element.style.backgroundImage = 'url(' + imagePath + ')';
    return element;
}

// Ajouter un marqueur personnalisé pour le 71 Avenue Henri Ginoux, Montrouge
var customMarkerImage1 = './images/Ksimplifiegris.jpg';
var marker1 = new mapboxgl.Marker({ element: createCustomMarker(customMarkerImage1) })
    .setLngLat([2.321468, 48.816629])
    .addTo(map);

// Ajouter un popup personnalisé au marqueur
var popup1 = new mapboxgl.Popup({ offset: 25, className: 'custom-popup' })
    .setHTML('<h3>Restaurant Karièr</h3><p></p>');

marker1.setPopup(popup1);


// Ajouter un marqueur pour la Ferme de 30 Arpents, Favières
var customMarkerImage2 = './images/ferme30.jpeg';
var marker2 = new mapboxgl.Marker({ element: createCustomMarker(customMarkerImage2) })
    .setLngLat([2.8259, 48.8123])
    .addTo(map);
var popup2 = new mapboxgl.Popup({ offset: 25, className: 'custom-popup' })
    .setHTML('<h3>Ferme de 30 Arpents</h3><p>Notre fournisseur de produits laitiers, à Favières. Retrouvez leurs fromages ainsi que leurs yaourts travaillés dans vos assiettes. <br>Contacts : 0786603977      https://cellierdes30arpents.com</p>');
marker2.setPopup(popup2);


 // Ajouter un marqueur pour la ferme chaillotine, Chailly-en-Bière, France
 var customMarkerImage3 = './images/chaillotine.png';
 var marker3 = new mapboxgl.Marker({ element: createCustomMarker(customMarkerImage3) })
    .setLngLat([2.5948, 48.4321])
    .addTo(map);
var popup3 = new mapboxgl.Popup({ offset: 25, className: 'custom-popup' })
    .setHTML('<h3>Ferme chaillotine</h3><p>Notre maraîchère, Camille Allard, qui produit tous ses fruits et légumes Bio à sa ferme de Chailly-en-Bière, en Seine-et-Marne. Retrouvez ses produits mis en valeur lors de votre dégustation. <br> Contacts : 0757066765          https://www.facebook.com/fermechaillotine</p>');
marker3.setPopup(popup3);


// Ajouter un marqueur pour l'orée de milly volailles, 91490 Milly-la-Forêt
var customMarkerImage4 = './images/oreedemilly.jpeg';
var marker4 = new mapboxgl.Marker({ element: createCustomMarker(customMarkerImage4) })
    .setLngLat([2.4665, 48.4038])
    .addTo(map);
var popup4 = new mapboxgl.Popup({ offset: 25, className: 'custom-popup' })
    .setHTML('<h3>Orée de milly</h3><p>Rencontrez notre producteur de chapons, élevés en plein air, et BIO : Pierre-Nicolas Grisel. <br>Contacts : 0601630343</p>');
marker4.setPopup(popup4);


// Ajouter un marqueur pour la Biocoop
var customMarkerImage5 = './images/cooperative.jpg';
var marker5 = new mapboxgl.Marker({ element: createCustomMarker(customMarkerImage5) })
    .setLngLat([2.568052, 48.649247])
    .addTo(map);
var popup5 = new mapboxgl.Popup({ offset: 25, className: 'custom-popup' })
    .setHTML('<h3>La coopérative BIO Île-de-France</h3><p>Principal partenaire de Karièr, la coopérative réunit 80 agriculteurs de la région pour proposer plus de 100 variétés de légumes différentes. <br>Contacts : 0164063617               https://www.la-cooperative-bio-iledefrance.fr/contact//p>');
marker5.setPopup(popup5);


// Ajouter un marqueur pour les moulins Fouché, 91590 La Ferté-Alais
var customMarkerImage6 = './images/moulins.png';
var marker6 = new mapboxgl.Marker({ element: createCustomMarker(customMarkerImage6) })
    .setLngLat([2.3469, 48.4878])
    .addTo(map);
var popup6 = new mapboxgl.Popup({ offset: 25, className: 'custom-popup' })
    .setHTML('<h3>Les moulins Fouché</h3><p>Retrouvez la production de farines bio des moulins Fouché, à la Ferté-Alais.<br>Contacts : 0169906280         https://www.moulinsfouche.fr</p>');
marker6.setPopup(popup6);


// Ajouter un marqueur pour les assaisonnements Briard, 77100 Nanteuil-les-Meaux
var customMarkerImage7 = './images/briards.png';
var marker7 = new mapboxgl.Marker({ element: createCustomMarker(customMarkerImage7) })
    .setLngLat([2.8922, 48.9616])
    .addTo(map);
var popup7 = new mapboxgl.Popup({ offset: 25, className: 'custom-popup' })
    .setHTML('<h3>Les assaisonnements Briard</h3><p>Nos fournisseurs de moutardes, vinaigres et épices en provenance directe de Meaux. <br>Contacts : 0164350082               https://www.moutarde-de-meaux.com</p>');
marker7.setPopup(popup7);


// Ajouter un marqueur pour la caverne champignons, 75018 Paris
var customMarkerImage8 = './images/champi2.jpeg';
var marker8 = new mapboxgl.Marker({ element: createCustomMarker(customMarkerImage8) })
    .setLngLat([2.3901, 48.8856])
    .addTo(map);
var popup8 = new mapboxgl.Popup({ offset: 25, className: 'custom-popup' })
    .setHTML('<h3>Les champignons de la caverne</h3><p>Des champignons de Paris BIO cultivés dans les vraies caves parisiennes. La ferme urbaine est un de nos partenaires depuis les prémices du projet Karièr. <br>Contacts : 0140809371             https://lacaverne.co </p>');
marker8.setPopup(popup8);

// Ajouter un marqueur pour Luximer, 22410 Saint-Quay-Portrieux
var customMarkerImage9 = './images/luximer.png';
var marker9 = new mapboxgl.Marker({ element: createCustomMarker(customMarkerImage9) })
    .setLngLat([-2.823314, 48.648574])
    .addTo(map);
var popup9 = new mapboxgl.Popup({ offset: 25, className: 'custom-popup' })
    .setHTML('<h3>Luximer</h3><p>Notre producteur de produits de la mer, péchés à quelques kilomètres de Saint-Brieuc.<br>Contacts : 0970160351               https://www.luximer.com/fr/</p>');
marker9.setPopup(popup9);


// Ajouter un marqueur pour Laurent Berrurier, Neuville-sur-Oise
var customMarkerImage10 = './images/Laurent.png';
var marker10 = new mapboxgl.Marker({ element: createCustomMarker(customMarkerImage10) })
    .setLngLat([2.061361, 49.013664])
    .addTo(map);
var popup10 = new mapboxgl.Popup({ offset: 25, className: 'custom-popup' })
    .setHTML('<h3>Laurent Berrurier</h3><p>Notre fier maraîcher, amoureux des produits franciliens, produit chaque année plus de 130 variétés de légumes, en pleine Terre !<br>Contacts : 0130326084</p>');
marker10.setPopup(popup10);


// Ajouter un marqueur pour la champignonnière des carrières, à Auferville
var customMarkerImage11 = './images/champignonsCARRIERES.png';
var marker11 = new mapboxgl.Marker({ element: createCustomMarker(customMarkerImage11) })
    .setLngLat([1.935649, 49.011488])
    .addTo(map);
var popup11 = new mapboxgl.Popup({ className: 'custom-popup' })
    .setHTML('<h3>Champignonnière des carrières</h3><p>Notre principal producteur de champignons de Paris BIO, à Evecquemont. Angel Moioli est un passionné des champignons et a récemment ouvert sa productions aux particuliers, en proposant aussi shiitakés ou pleurotes. <br>Contacts : 0609062152                              https://www.facebook.com/Champignonniere.Les.Carrieres</p>');
marker11.setPopup(popup11);


// Ajouter un marqueur pour Vincent Morisseau à la ferme de Filbois, Auferville
var customMarkerImage12 = './images/fermeFILBOIS.png';
var marker12 = new mapboxgl.Marker({ element: createCustomMarker(customMarkerImage12) })
    .setLngLat([2.607893, 48.215815])
    .addTo(map);
var popup12 = new mapboxgl.Popup({ offset: 25, className: 'custom-popup' })
    .setHTML('<h3>Vincent Morisseau</h3><p>Retrouvez Vincent Morisseau à la ferme de Filbois, dans le Gâtinais, et allez à la rencontre de ses volailles et ses agneaux ! Elevés en plein air et nourris avec les produits de la ferme, travailler avec Vincent est pour nous une chance !<br>Contacts : 0164287677                             http://www.ferme-de-filbois.fr</p>');
marker12.setPopup(popup12);


// Ajouter un marqueur pour Thierry Pardé, Chantecoq
var customMarkerImage13 = './images/safran2.png';
var marker13 = new mapboxgl.Marker({ element: createCustomMarker(customMarkerImage13) })
    .setLngLat([2.985058, 48.067148])
    .addTo(map);
var popup13 = new mapboxgl.Popup({ offset: 25, className: 'custom-popup' })
    .setHTML('<h3>Thierry Pardé</h3><p>Retrouvez le safran de Sophie et Thierry Pardé, installés depuis 30 ans dans le Gâtinais. Chez Karièr, nous avons décidé de le mettre en valeur en un met sucré et délicat. <br>Contacts : 0238942136          </p>');
marker13.setPopup(popup13);

 // Fonction pour créer un élément HTML personnalisé (image)
function createCustomMarker(imagePath) {
    var element = document.createElement('div');
    element.className = 'custom-marker';
    element.style.backgroundImage = 'url(' + imagePath + ')';
    return element;
}

function showModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'block';

    // Fermer la boîte modale lorsqu'on clique sur la croix
    var closeBtn = document.getElementsByClassName('close')[0];
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    };

    // Fermer la boîte modale en cliquant en dehors de celle-ci
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
}

showModal();
