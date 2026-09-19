const cancerLinks = [...document.querySelectorAll("#cancer-az a")];
const searchForm = document.querySelector("#cancer-search-form");
const searchInput = document.querySelector("#cancer-search-input");
const searchMessage = document.querySelector("#cancer-search-message");
const options = document.querySelector("#cancer-options");

for (const link of cancerLinks) {
  const option = document.createElement("option");
  option.value = link.textContent.trim();
  options.appendChild(option);
}

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = searchInput.value.trim().toLowerCase();
  const match = cancerLinks.find((link) => link.textContent.trim().toLowerCase() === query)
    || cancerLinks.find((link) => link.textContent.trim().toLowerCase().includes(query));

  document.querySelectorAll("#cancer-az a.search-match").forEach((link) => link.classList.remove("search-match"));
  if (!query || !match) {
    searchMessage.textContent = query ? "No matching cancer type was found. Try another name." : "Enter a cancer type to search.";
    return;
  }

  const section = match.closest("details");
  section.open = true;
  match.classList.add("search-match");
  searchMessage.textContent = `Showing ${match.textContent.trim()}.`;
  match.scrollIntoView({ behavior: "smooth", block: "center" });
  match.focus({ preventScroll: true });
});
