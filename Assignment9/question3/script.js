// Create a form to submit a blog to a mock API (reqres.in)
const blogForm = document.getElementById("blogForm");
blogForm.addEventListener("submit", handleFormSubmit);

const closePopupButton = document.getElementById("closePopup");
closePopupButton.addEventListener("click", closePopup);

function handleFormSubmit(event) {
  event.preventDefault();

  const formElements = event.target;
  const title = formElements.title.value;
  const blog = formElements.blog.value;

  // validate data
  if (title === "") {
    showPopup("Please Enter a valid title");
    return;
  }

  if (blog === "") {
    showPopup("Please Enter a valid blog content");
    return;
  }

  // create post request
  const data = {
    title,
    blog,
  };

  fetch("regres.in", {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
      showPopup("Error while submitting form");
    });
}

function showPopup(message) {
  const popup = document.getElementById("popup");
  popup.classList.add("active");

  const title = document.getElementById("popupTitle");
  title.textContent = message;
}

function closePopup(message) {
  const popup = document.getElementById("popup");
  popup.classList.remove("active");

  const title = document.getElementById("popupTitle");
  title.textContent = message;
}
