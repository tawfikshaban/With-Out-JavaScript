// let myadmins = ["ahmed", "osama", "sayed", "stop", "samera"];

// let myemployees = [
//   "amgad",
//   "samah",
//   "ameer",
//   "omar",
//   "othman",
//   "amany",
//   "samia",
//   "anwar",
//   "ameer",
// ];
// let j = 0;
// let count = j;

// while (j < myadmins.length) {
//   j++;
// }

// document.write(`<div>we have ${myadmins.indexOf("stop")} admins</div>`);
// for (let i = 0; i < myadmins.length; i++) {
//   if (myadmins[i] === "stop") {
//     break;
//   }
//   document.write(
//     `<hr><div>the admin for team ${i + 1} is ${myadmins[i]}</div>`
//   );
//   document.write(`<h3>team member :</h3>`);

//   for (let x = 0; x < myemployees.length; x++) {
//     if (myadmins[i][0] === myemployees[x][0]) {
//       document.write(`<p>-${" " + myemployees[x].toUpperCase()}`);
//     }
//   }
// }

// function ageInTime(theAge) {
//   for (let i = 0; i < 1; i++) {
//     if (theAge > 100) {
//       console.log("Age Out Of Range");
//     } else if (theAge <= 100) {
//       console.log(` Your Age In Month is ${theAge * 12}`);
//       console.log(` Your Age In Days is ${theAge * 365}`);
//       console.log(` Your Age In Hours is ${theAge * 365 * 24}`);
//       console.log(` Your Age In min is ${theAge * 365 * 24 * 60}`);
//       console.log(` Your Age In second is ${theAge * 365 * 24 * 60 * 60}`);
//     }
//   }
// }

// // Needed Output
// ageInTime(110); // Age Out Of Range
// ageInTime(38); // Months Example => 456 Months

// let invertedNumbers = [1, -10, -20, 15, 100, -30];
// let Num = invertedNumbers.map(function NumS(Element) {
//   return -Element;
// });

// console.log(Num);

// let ignoreNumbers = "Elz123er4o";
// let ign = ignoreNumbers
//   .split("")
//   .map(function (ele) {
//     return isNaN(parseInt(ele)) ? ele : "";
//   })
//   .join("");

// console.log(ign);

// let mix = "A13BS2ZX";

// let letter = mix
//   .split("")
//   .filter(function (ele) {
//     return !isNaN(parseInt(ele));
//   })
//   .map(function (el) {
//     return el * el;
//   })
//   .join("");

// console.log(letter);

// let sentence = "I Love Foood Code Too Playing Much";

// let words = sentence
//   .split(" ")
//   .filter(function (ele) {
//     return ele.length <= 4;
//   })
//   .join(" ");
// console.log(words);

// let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

// let remove = removeChars
//   .filter(function (ele) {
//     return ele !== "@";
//   })
//   .reduce(function (acc, current) {
//     return acc + current;
//   });

// console.log(remove);

// /*
//   Higher Order Functions Challenges

//   You Can Use
//   - ,
//   - _
//   - Space
//   - True => 1 => One Time Only In The Code

//   You Cannot Use
//   - Numbers
//   - Letters

//   - You Must Use [Filter + Map + Reduce + Your Knowledge]
//   - Order Is Not Important
//   - All In One Chain

// */

// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

// let solution = myString
//   .split("")
//   .filter(function (ele) {
//     return isNaN(ele);
//   })
//   .filter(function (ele) {
//     return ele !== "_" && ele !== ",";
//   })
//   .reduce(function (acc, current) {
//     return acc + current;
//   })
//   .slice(true, -!false)
//   .split("_")
//   .join(" ");

// console.log(solution); // Elzero Web School

// let myst = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

// let soluation = myst
//   .split(",")
//   .filter(function (ele) {
//     return isNaN(parseInt(ele));
//   })
//   .map(function (ele) {
//     return ele === "_" ? (ele = " ") : ele;
//   })
//   .slice(0, -1)
//   .reduce(function (acc, current) {
//     return `${acc}${current}`;
//   })
//   .slice(1);
// console.log(soluation);

// let test = {
//   UserName: "Tawfik",
//   Age: 20,
//   "country of": "Egypt",
// };

// document.write(`
//   <div>- ${test["UserName"]}</div>
//   <div>- ${test["Age"]}</div>
// <div>- ${test["country of"]}</div>`);

// document.title = "Learn JavaScript";

// // for (let i = 0; i <= 100; i++) {
// //   let Div = document.createElement("div");
// //   let h2 = document.createElement("h1");
// //   let P = document.createElement("p");
// //   let myHeading = document.createTextNode("Product Title");
// //   let myPragraph = document.createTextNode("Product description");
// //   Div.className = "product";
// //   h2.appendChild(myHeading);
// //   P.appendChild(myPragraph);
// //   Div.appendChild(h2);
// //   Div.appendChild(P);
// //   Div.append("Test SomeThing");
// //   document.body.appendChild(Div);
// // }

// let cont = document.createElement("div");
// let h2 = document.createElement("h2");
// let a = document.createElement("a");
// let valid = document.createElement("input");
// a.setAttribute("href", "www.facebook.com");
// a.title = "This Link Will Close Your Window CareFull";
// a.textContent = "Close The Window";
// h2.textContent = "This Is The Heading Paragraph";
// // a.PreventDefault();
// cont.appendChild(h2);
// cont.appendChild(a);
// valid.setAttribute("name", "one");
// valid.setAttribute("type", "text");

// document.body.appendChild(cont);
// document.body.appendChild(valid);
// // a.onclick = function (eve) {
// //   console.log(eve);
// //   eve.preventDefault();
// //   // document.body.innerHTML(`<div>${cont}</div>`);
// // };

// // document.links[0].onclick = function (e) {
// //   // e.preventDefault();
// //   valid.focus();
// // };


// Start Header Styling//
let body = document.body;
let header = document.createElement("div");
let logo = document.createElement("h2");
let logoContent = (document.textContent = "Elzero");
let nav = document.createElement("ul");
let li = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
let li4 = document.createElement("li");
body.style.cssText = "margin:0; overflow-x:hidden";
header.style.cssText ="display:flex; justify-content:space-between; align-items:center;color:rgb(35 169 100);padding:0 20px;";
logo.append(logoContent);
logo.style.cssText ="font-weight:bold;text-transform: capitalize;font-family: system-ui;";
nav.style.cssText ="display:flex;gap:10px;align-items:center; justify-content:center; list-style:none; color:black;text-transform:capitalize;font-family: system-ui;";
nav.append(li);
li.style.cssText = "";
li.innerText = "Home";
li2.innerText = "about";
li3.innerText = "service";
li4.innerText = "contact";
nav.append(li2);
nav.append(li3);
nav.append(li4);
header.appendChild(logo);
header.appendChild(nav);
document.body.appendChild(header);
// End Header Styling//
// Start Body Styling//
let main = document.createElement("div");
main.setAttribute("class", "main");
for (let i = 1; i <= 15; i++) {
  let box = document.createElement("div");
  let Number = document.createElement("h2");
  let product = document.createElement("span");
  Number.style.cssText = "display:block;";
  product.style.cssText = "display:block;";
  product.innerText = "Product";
  Number.innerHTML = `${i}`;
  box.appendChild(Number);
  box.appendChild(product);
  box.style.cssText =
    "background-color:white;padding:20px 20px;text-align:center;font-weight:bold; font-size:20px; text-transform:capitalize; font-family: system-ui;";
  main.appendChild(box);
}
document.body.appendChild(main);
main.style.cssText ="background-color:#EEE;padding:20px; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));gap: 20px; display:grid;";
// End Body Styling//
// Start Footer Styling//
let foot = document.createElement("div");
foot.style.cssText ="background-color:rgb(35 169 100); width:100vw; height:50px; display:flex;justify-content:center;align-items:center; color : white; font-family:system-ui; letter-spacing:2px; font-weight:bold ;padding:10px ";
foot.innerText = "CopyRight 2024";
document.body.appendChild(foot);
// End Footer Styling//
