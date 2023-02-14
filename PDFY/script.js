var nazwisko = "elo";
let nazwisko2 = "zelo";

console.log(nazwisko);
console.log(nazwisko2);

const imie = "zelek";

console.log(imie);


console.log(nazwisko, nazwisko2);
console.log(nazwisko + nazwisko2);
console.log(nazwisko + " " + nazwisko2);

let liczba1 = 12;
let liczba2 = 24;
let liczbatekst= "56";
console.log(liczba1);
console.log(liczba2);
console.log(liczbatekst);
console.log(liczba1 - liczba2);
console.log(liczba1 - liczbatekst);
console.log(liczba1 * liczbatekst);
console.log(liczba1 / liczbatekst);

let liczba4 = 123;
let liczba5 = 0129
let liczba6 = 0x123;
let liczba7 = 2.3;
let liczba8 = 2e3;
console.log(liczba4);
console.log(liczba5);
console.log(liczba6);
console.log(liczba7);
console.log(liczba8);
var zmienna
var liczba11 = 1;
var tekst="4";
zmienna= liczba11 + tekst;
console.log(zmienna);
console.log(typeof(zmienna));
var liczba12 = "4";
var liczba13 = "5";
let wynik = true;
let wynikN = false;
let rezultat;
console.log(wynik);
console.log(wynikN);
rezultat=wynik==wynikN;
console.log(rezultat)
rezultat=wynik!=wynikN;
console.log(rezultat)
let zmienna_a = 2;
let zmienna_b = "2";
let rezultat1=false
console.log(zmienna_a);
console.log(zmienna_b);
rezultat=zmienna_a==zmienna_b;
console.log(rezultat);
rezultat=zmienna_a!=zmienna_b;
console.log(rezultat);
rezultat=zmienna_a===zmienna_b;
console.log(rezultat);
rezultat=zmienna_a!==zmienna_b;
console.log(rezultat);
let liczbu = [1,3,5,7,9];
let znakia = ["a","b","c","d"];
let teksty = ["wyraz1", "wyraz2"]
console.log(liczbu);
console.log(znakia);
console.log(teksty);
console.log(liczbu[3])
let uczen = {
    nazwisko: "Kruczek",
    imie: "Bartosz",
    wiek: 18,
    pelnoletni: true,
    kwalifikacje: ["Inf02", "Biznes_ekspert"]
  }
  console.log(uczen);
  console.log(uczen.nazwisko);
  console.log(uczen.kwalifikacje[1]);
  console.log(typeof(uczen));
  console.log(typeof(uczen.nazwisko));
  console.log(typeof(uczen.kwalifikacje));
  console.log(typeof(uczen.kwalifikacje[1]));
  let uczen1 = {
    nazwisko: "Kowalski",
    imie: "Jan",
    wiek: 17,
    pelnoletni: false,
    kwalifikacje: ["Inf03", "Inf04"]
  }
  let uczniowe = [uczen, uczen1];
  console.log(uczen,uczen1);
  console.log(uczniowe);