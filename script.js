
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", () => {
  const query = searchInput.value;
  const encodedQuery = encodeURIComponent(query);
  let url;
  
  if (query === "education") {
    url = "education.html?q=" + encodedQuery;
  } else if (query === "development") {
    url = "development.html?q=" + encodedQuery;
  } else if (query === "health care") {
    url = "healthcare.html?q=" + encodedQuery;
  } else if (query === "economic") {
    url = "economic.html?q=" + encodedQuery;
  }else if (query === "tribal welfare") {
    url = "index.html?q=" + encodedQuery;}
  else {
    url = "index.html?q=" + encodedQuery;
  }
  
  window.location.href = url;
});

