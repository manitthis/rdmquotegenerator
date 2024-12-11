const quote = document.getElementById("quote");
const author = document.getElementById("author");

const apiurl = "https://api.api-ninjas.com/v1/quotes?";
async function get(url) {
  const response = await fetch(url, {
    headers: { "X-Api-key": "OJvIPK2j+l1EQrSDOmDkCQ==zxKHrO2xXNOVSx78" },
  });
  var data = await response.json();
  quote.innerHTML = data[0].quote;
  author.innerHTML = data[0].author;
}
get(apiurl);

function wsp() {
  window.open("https://www.whatsapp.com/android");
}
