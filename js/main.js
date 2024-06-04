// const ism = prompt("Ism kiriting");

// const ismlar = ["Ziyodulla", "Asilbek", "Boburmirzo", "Bobur"]

// if (ismlar.includes(ism)) {
//     alert("Ha shunday foydalanuvchi bor")
// } else(
//     alert("Bunday foydalanuvchi yoq")
// )

alert("Hush kelibsiz")

// // // // //

const area = 4.14244

const q = Math.trunc(Math.random() * 9999) + 1
console.log(q);

const test = 5.6

Math.round();
console.log(Math.round(test));

Math.floor();
console.log(Math.floor(test));

Math.ceil();
console.log(Math.ceil(test));

const b = Math.trunc(Math.random() * 10) + 2
console.log(b);

function color(z) {
    let a = getComputedStyle(z);
    let b = a.backgroundColor;
    document.getElementsByTagName("body")[0].style.backgroundColor = b;
}

// // // // // // // // // // // //


// {
//     // masala-1 //
//     let a = prompt("a sonini kiriting")
//     let p = 4 * a
//     alert(`Perimetri: ${p}`)
// }

// {
//     // masala-2 //
//     let a = prompt("a sonini kiriting")
//     let s = a * a
//     alert(`Yuza: ${s}`)
// }

// {
//     // masala-3 //
//     let a = +prompt("a sonini kiriting")
//     console.log(a);
//     let b = +prompt("b sonini kirting")
//     console.log(b);
//     let S = a * b
//     console.log("Yuzasi:" + S);
//     let P = 2 * (a + b)
//     console.log("Perimetri:" + P);
//     alert ( `Yuzasi: ${S}  Perimetri: ${P}`)
// }

// {
//     // masala-4 //
//     let d = prompt("d sonini kirting")
//     console.log(d);
//     console.log("п=" + 3.14);
//     let L = 3.14 * d
//     alert (`Uzunligi: ${L}`)
// }

// {
//     // masala-5 //
//     let a =prompt ("a sonini kirting")
//     console.log(a);
//     let V = a * a * a
//     console.log("Hajmi:" + V);
//     let S = 6 * a * a
//     console.log("Yuzasi:" + S);
//     alert (`Hajmi: ${V} Yuzasi: ${S}`)
// }

// {
//     // masala-6 //
//     let a = +prompt("a sonini kirting")
//     let b = +prompt("b sonini kirting")
//     let c = +prompt("c sonini kirting")
//     let V = a * b * c
//     let S = 2*(a * b + b * c + c * a)
//     alert (`Hajmi: ${V} Yuzasi: ${S}`)
// }

// {
//     // masala-7 //
//     let R = prompt("R sonini kiriting")
//     console.log("pi=" + 3.14);
//     let L = 2 * 3.14 * R
//     let S = 3.14 * R * R 
//     alert (`Uzunligi: ${L} Yuzasi: ${S}`)
// }

// {
//     // masala-8 //
//     let a = +prompt("a sonini kiriting")
//     let b = +prompt("b sonini kiriting")
//     let M = (a + b)/2
//     alert (`O'rta arifmetigi: ${M}`)
// }