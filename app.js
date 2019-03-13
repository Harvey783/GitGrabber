const github = new Github();
const ui = new UI();

const userSearch = document.getElementById("userSearch");

userSearch.addEventListener("keyup", e => {
  const userText = e.target.value;
  if (!userText == "") {
    github.getUser(userText).then(data => {
      if (data.profile.message === "Not Found") {
      } else {
        ui.showProfile(data.profile);
      }
    });
  }
});
