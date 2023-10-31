let kredit = 1000
let qaliq = 0
let odenis = 0
function credit(kredit,month) {
    for (let i = 0; i < kredit; i++) {
        qaliq = kredit%month
        kredit = kredit - qaliq
        odenis= kredit /month
        console.log(`ayliq ${odenis} azn`);
    }
    qaliq === kredit%month
    let lastodenis= (kredit /month)+qaliq
    console.log(`sonuncu ay  ${lastodenis} azn`); 
}
console.log(credit(1000,3));