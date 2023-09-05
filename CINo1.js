var kata = "adi";
var n = kata.length - 1;
var arr = [];

for(let i = n; i >= 0; i--){
    arr += kata[i];
}

if(arr == kata){
    console.log("Kata Palindrom");
}
else{
    console.log("Bukan kata Palindrom");
}