let kalimat = "Saya belajar JavaScript";
kalimat += " ";
let kata = [];
let n = kalimat.length - 1;
let temp = "";
let j = 0;

for(let i = 0; i <= n; i++){
    if(kalimat[i] != " "){
        temp += kalimat[i];
    }else{
        kata[j] = temp;
        temp = "";
        j++;
    }
}

let a = kata.length - 1;

for(let i = a; i >= 0; i--){
    temp += kata[i] + " "
}

console.log(temp)