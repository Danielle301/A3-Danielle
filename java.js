function toggleSearchUI() {
    console.log("Search icon clicked");
    const dropdown = document.getElementById("searchDropdown");
    dropdown.classList.toggle("show");
    if (dropdown.classList.contains("show")) {
      document.getElementById("searchInput").focus();
    }
  }

  function filterOptions() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toUpperCase();
    const links = document.querySelectorAll("#dropdownOptions a");

    links.forEach(link => {
      const txt = link.textContent || link.innerText;
      link.style.display = txt.toUpperCase().includes(filter) ? "" : "none";
    });
  }

  // Optional: Close if clicking outside
  window.onclick = function (event) {
const dropdown = document.getElementById("searchDropdown");
const input = document.getElementById("searchInput");
const options = document.querySelectorAll("#dropdownOptions a");

if (!event.target.closest(".searchContainer")) {
  // Hide the dropdown
  dropdown.classList.remove("show");

  // Clear the input field
  input.value = "";

  // Reset all dropdown items to visible
  options.forEach(option => {
    option.style.display = "";
  });
}
};