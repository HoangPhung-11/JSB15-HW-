let nameList = ["Phước", "Nam", "Hoàng"];
document.getElementById("text").innerHTML = nameList
nameList = localStorage.setItem("nameList", JSON.stringify(nameList));
document.getElementById("changeName").addEventListener("click", changeName)
function changeName() {
    nameList = localStorage.getItem("nameList");
    nameList = JSON.parse(nameList);
    nameList.splice(0, 1, "Hà")
    document.getElementById("text").innerHTML = nameList;
    nameList = localStorage.setItem("nameList", JSON.stringify(nameList));
}
document.getElementById("deleteName").addEventListener("click", deleteName)
function deleteName() {
    nameList = localStorage.getItem("nameList");
    nameList = JSON.parse(nameList);
    nameList.splice(0, 1)
    document.getElementById("text").innerHTML = nameList;
    nameList = localStorage.setItem("nameList", JSON.stringify(nameList));
}
document.getElementById("deleteAll").addEventListener("click", deleteAll)
function deleteAll() {
    document.getElementById("text").innerHTML = "";
    localStorage.removeItem("nameList");
}




