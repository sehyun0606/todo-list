const date = document.querySelector("#date");

function getDate(){
    const today = new Date();
    const month = String(today.getMonth()+1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    date.innerText = (`${today.getFullYear()}/${month}/${day}`);
}
getDate()
setInterval(getDate, 1000)