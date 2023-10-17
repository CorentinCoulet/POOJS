# Canvas

## Objectif

Pratiquer la POO et l'utilisation de l'API Canvas.

## Remarques

* Les classes doivent être créées dans des fichiers à part
* Il faut utiliser les imports/exports

## Instructions

### 1. Création des classes

Créer les classes Rectangle et Ellipse avec les informations suivantes :
* Rectangle (x, y, width, height, color)
* Ellipse (x, y, rx, ry, color)

Il faudra créer le constructeur dans chaque classe qui permet d'initialiser chacune des propriétés. Il faudra également créer tous les getter/setter nécessaires.

Avant de passer à l'étape suivante, instancier un rectangle et une ellipse pour vérifier que tout fonctionne bien.

```javascript
const rectangle = new Rectangle(0, 0, 80, 120, 'forestgreen');
const ellipse = new Ellipse(100, 100, 65, 35, 'firebrick');
console.log(rectangle, ellipse);
```

### 2. Héritage

Créer une classe Shape dont héritera Rectangle et Ellipse. Cette classe aura les propriétés et méthodes que Rectangle et Ellipse ont en commun.

Vérifier que l'instanciation se fait toujours normalement.

### 3. Dessin dans le canvas

Créer une méthode draw qui dessine le rectangle et l'ellipse dans le canvas.

```javascript
const rectangle = new Rectangle(0, 0, 80, 120, 'forestgreen');
const ellipse = new Ellipse(100, 100, 65, 35, 'firebrick');

// Il est possible qu'il manque des paramètres dans la méthode draw
rectangle.draw();
ellipse.draw();
```

### 4. Ajout de rectangles

Créer un formulaire avec un champ x, un champ y, un champ largeur, un champ hauteur, un champ couleur (input type color) et un bouton. Lorsque l'on valide ce formulaire, cela doit créer un rectangle avec les informations du formulaire soumis.

### 5. Vider le canvas

Créer un bouton "Effacer". Lorsque l'on clique dessus, le canvas doit être effacé.

### 6. Dessins aléatoires (BONUS)

Lorsque l'on clique sur le canvas, il faut créer une ellipse à l'endroit où l'on a cliqué et les rayons x et y auront des valeurs aléatoires comprises entre 20px et 80px. Les couleurs seront également aléatoires.