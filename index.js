// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit",matchFun)


var arr = JSON.parse(localStorage.getItem("schedule"))||[];
function matchFun(){

    event.preventDefault
}

var obj = {

    matchno:masaiForm.matchNum.value,
    teamA:masaiForm.teamA.value,
    teamB:masaiForm.teamB.value,
    date:masaiForm.date.value,
    venue:masaiForm.venue.value,
};

arr.push(obj)

localStorage.setItem ("schedule",JSON.stringify(arr))

 window.location.href= "matches.html"