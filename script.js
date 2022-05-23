console.log("Testandooo.....");

function verificar() {
    
    let x = parseInt(document.getElementById("valorX").value);
    


    let i = "";
    let j = "";
    let l = "";
    let m = "";
    let n = "";

    for (i = 2; i <= x; i++) {
        if ((i % 2) == 0) {
            console.log(i);
            j = i / 4;
            l = i / 2;
            m = j * 3;
            n = i;
        } 
    }       
    

    result1.innerHTML = j;
    result2.innerHTML = l;
    result3.innerHTML = m;
    result4.innerHTML = n;


}