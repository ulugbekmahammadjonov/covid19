const api = "https://covid19.mathdro.id/api/confirmed";
const list = document.querySelector(".list");
const input = document.querySelector("#form_input");
let fullData = [];
let filteredData = [];

useFetch(api);
async function useFetch(url) {
  try {
    const req = await fetch(url);
    if (!req.ok) {
      throw new Error("xatolik bor");
    }
    const data = await req.json();
    fullData = data;
    $("#form").css("display", "block");
    
  } catch (err) {
    console.log(err.message);
  }
}

function showData(data) {
  const allCountry = data;
  allCountry.forEach((country) => {

    const div = document.createElement("div");
    div.innerHTML = `
    <h1 style="margin-right:30px;">${country.countryRegion}</h1>
    <p style="margin-right:30px;">${country.confirmed}</p>
    <p style="margin-right:30px;">${country.deaths}</p>

    `;

    
    
    $(".list").append(div);

  });
}

// $("#form").submit(function (e) {
//   e.preventDefault();
//   const a = $("#form_input").val();
//   filteredData = [];
//   $('.list').empty()
//   fullData.forEach((country) => {
//     if (country.name.toLowerCase().includes(a.toLowerCase())) {
//       filteredData.push(country);
//     }
//   });
//   showData(filteredData);
// });

input.addEventListener('input',(e)=>{
    e.preventDefault();
    const a = $("#form_input").val();
    filteredData = [];
    $(".list").empty();
    fullData.forEach((country) => {
      if (country.countryRegion.toLowerCase().includes(a.toLowerCase())) {
        filteredData.push(country);
      }
    });
    showData(filteredData);

})
