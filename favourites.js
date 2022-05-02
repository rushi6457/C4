// write js code here corresponding to favourites.html

var favArr = JSON.parse(localStorage.getItem("favourites"))

displayData(favArr);

function displayData(data){

    data.forEach(elem){

        var tr = document.createElement("tr")

        var td1 = document.createElement("td")

        var td2 = document.createElement("td")

        var td3 = document.createElement("td")

        var td4 = document.createElement("td")

        var td5 = document.createElement("td")

        var td6 = document.createElement("td")

        tr.append(td1,td2,td3,td4,td5,td6)

        document.querySelector("tbody").append(tr)
    }
}