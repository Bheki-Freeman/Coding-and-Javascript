//set date
const setDate = () => {
  const spn_date = document.querySelector("#spn_date");
  const date = new Date();
  spn_date.innerText = `${date.getDate()} - ${
    date.getMonth() + 1
  } - ${date.getFullYear()}`;
};

setDate();
