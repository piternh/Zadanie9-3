var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";
var dinosaur ="triceratops";

var dinosaurUpperCased = dinosaur.toUpperCase();

console.log(dinosaurUpperCased);

var textCorrect = text.replace('Velociraptor', dinosaurUpperCased);

console.log(textCorrect.length/2);

console.log(textCorrect.slice(0, 72));