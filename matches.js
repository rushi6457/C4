// write js code here corresponding to matches.html



document.querySelector("#filterVenue").addEventListener("change",filterFun)

var arr = JSON.parse(localStorage.getItem("schedule"))||[];

function filterFun(){

    var filter = arr.filter(function(elem){

        return elem.filterVenue= Selector;
    })
    displayData(filter);
}

function displayData(){

    var tr = document.createElement("tr");


    var td1 = document.createElement("td");

    var td2 = document.createElement("tr");


    var td3 = document.createElement("td");


    var t4 = document.createElement("tr");


    var td5 = document.createElement("td");

    var td6 = document.createElement("td")

    tr.append(td1,td2,td3,td4,td5,td6)


    document.querySelector("tbody").append(tr)
}

function fav(elem){

    fav.push(el);

    localStorage.setItem("favourites",JSON.stringify(favArr));
}