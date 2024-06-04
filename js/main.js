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
//     let a = prompt("a va b sonini kiritng")
//     let s = a * b
//     let p = 2 * (a + b)
//     alert(`Perimetri: ${s} Yuza: ${p}`)
// }

// {
//     // masala-4 //
//     let a = prompt("d sonini kiritng")
//     let l = b * 3.14
//     alert(`uzunligi: ${l}`)
// }

// {
//     // masala-5 //
//     let a = prompt("a sonini kiritng")
//     let v = a * a * a
//     let s = 6 * a * a
//     alert(`Hajmi: ${v} Sirti: ${s}`)
// }

// {
//     // masala-6 //
//     let a = prompt("a, b, c sonini kiritng")
//     let v = a * b * 1
//     let s = 2 * (a * b + b * 1 + a * 1)
//     alert(`Hajmi: ${v} Sirti: ${s}`)
// }

// {
//     // masala-7 //
//     let a = prompt("R sonini kiritng")
//     let l = 2 * a * b
//     let s = a * b * b
//     alert(`uzunligi: ${l} yuzasi: ${s}`)
// }

// {
//     // masala-8 //
//     let a = prompt("a va b sonini kiritng")
//     let s = (a + b) / 2
//     alert(`o'rta arifmetigi: ${s}`)
// }