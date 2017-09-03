// scripts.js

alert('Twoja przeglądarka ma magiczną moc i potrafi liczyć pole trójkąta, zaraz to sprawdzimy!');
var a = prompt('Jeśli ten hipotetyczny trójkąt by istniał, to jak długi miałby BOK w [cm]?');
var h = prompt('Ok, bok miałby... ' + a + ' [cm] hm... wpisz więc teraz WYSOKOŚĆ hipotetycznego, ewentualnego, trójkota Schrödingera.');
var triangleArea = a*h/2;

alert('Po przejęciu kontroli nad wszystkimi koparkami bitcoinów świata Twoja przeglądarka obliczyła że ten Trójkot Schrödingera ma pole wynoszące, ' + triangleArea + '[cm].');
var mA = prompt('Podaj A dla obliczenia ze wzoru na skrócone mnożenie...');
var mB = prompt('Podaj B dla obliczenia ze wzoru na skrócone mnożenie...');
var value = ((mA * mA) + (2 * mA * mB) - (mB * mB));

console.log('Pole Trójkotta Schrödingera wynosi: ' + triangleArea + ' [cm].' );
console.log('Dla A równego ' + mA + ' i B równego '+ mB + ' równanie wynosi: ' + value + '[cm].' );
//console.log('Hello, ' + name);

//third exercise comment, 8.4 module.
