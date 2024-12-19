var search = document.getElementById("input-box");
search.addEventListener("keydown", function(e) {
  if (e.keyCode === 13) {
    gsearch()
  }
});



function gsearch() {
  var searchValue = document.getElementById("input-box").value;
  if (searchValue === "") {
    document.getElementById("input-box").placeholder = "Enter a Term/Phrase."
  } else {
    window.open("https://www.google.com/search?q=" + searchValue);
  }
}

function indcodesearch() {
  var searchValue = document.getElementById("indcodeinput").value;
  if (searchValue === "") {
    document.getElementById("indcodeinput").placeholder = "Enter a Term/Phrase."
  } else {
    window.open("https://www.indiacode.nic.in/handle/123456789/1362//simple-search?page-token=d2aee73c186f&page-token-value=70710c73ab4d0282e57b36673e1522e8&nccharset=22925F11&query=" + searchValue);
  }
}