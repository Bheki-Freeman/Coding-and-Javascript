const spn_date = document.querySelector("#spn_date")
const date = new Date();

//set date 
const setDate = () => {
    spn_date.innerText = `${date.getDate()} - ${date.getMonth()+1} - ${date.getFullYear()}`
}

setDate();