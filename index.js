alert("hello");


function mmb(i){

    function getmmx(x){
        var y = "mm"+x;
        return document.getElementById(y).innerHTML;
    }

    document.getElementById("h").innerHTML = getmmx(i) + " - MM" + i; 
    
}

function eb(i){

    function gete(x){
        var y = "e"+x;
        return document.getElementById(y).innerHTML;
    }

    document.getElementById("h").innerHTML = gete(i) + " - E" + i; 
    
}