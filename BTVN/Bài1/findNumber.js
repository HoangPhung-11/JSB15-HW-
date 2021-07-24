document.getElementById("button").addEventListener("click", findEven)
function findEven (){
    let x = document.getElementById("number").value;
    const number = ["2"];
    for (let i = 4; i <= x; i+=2){
        number.push(i);
    }
    document.getElementById("text").innerHTML = number;
}