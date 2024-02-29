// Create a blog list page that fetches a list of users from a mock API and adds them to a table on the page after loading.
// Add a button to sort the users by name.
// Add an input to filter the table by search.
// (Optional: Show “Loading…” or a loading spinner on the screen till the data loads)
const users = {
  original: [],
  current: [],
};

const userTableBody = document.getElementById("userTableBody");

// Loading initial data
(function LoadUsers() {
  setLoading(true);
  fetch("https://dummyjson.com/users")
    .then((response) => response.json())
    .then((data) => {
      users.original = data.users;
      users.current = data.users;
      renderUserTable(users.current);
    })
    .catch((error) => console.log(error))
    .finally(() => setLoading(false));
})();

// Filtering
const userSearchInput = document.getElementById("searchInput");
const handleSearchDebounce = debounce(handleUserSearch, 200);
userSearchInput.addEventListener("input", handleSearchDebounce);

function handleUserSearch() {
  const searchValue = userSearchInput.value?.toLowerCase() || "";

  users.current = users.original.filter((user) => {
    const userField = user.username.toLowerCase();
    const emailField = user.email.toLowerCase();
    return userField.includes(searchValue) || emailField.includes(searchValue);
  });

  renderUserTable(users.current);
}

// Sorting
const userSortBtn = document.getElementById("userSortBtn");
const sortUser = (() => {
  let orderBy = 1;
  return () => {
    users.current.sort((a, b) => {
      if (a.username < b.username) return -1 * orderBy;
      else if (a.username > b.username) return 1 * orderBy;
      else return 0;
    });

    renderUserTable(users.current);

    // reverse the direction
    orderBy *= -1;

    // updating button text to match the order intent
    userSortBtn.textContent =
      orderBy === 1 ? "Sort Username Asc" : "Sort Username Desc";
  };
})();

userSortBtn.addEventListener("click", sortUser);

// Rendering table
function renderUserTable(users) {
  userTableBody.innerHTML = "";

  users.forEach((user) => {
    const data = [user.username, user.email, user.gender, user.age];
    const row = document.createElement("tr");

    data.forEach((element) => {
      const col = document.createElement("td");
      col.textContent = element;
      row.appendChild(col);
    });

    userTableBody.appendChild(row);
  });
}

// Debounce
function debounce(callback, waitTime) {
  let timer;
  return () => {
    clearInterval(timer);
    timer = setTimeout(callback, waitTime);
  };
}

// set Loader
function setLoading(state) {
  const loadingElement = document.getElementById("loader");
  loadingElement.classList.toggle("active", state);
}
