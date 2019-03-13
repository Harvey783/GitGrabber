const github = new Github();
const ui = new UI();

const userSearch = document.getElementById("userSearch");

userSearch.addEventListener("keyup", e => {
  const userText = e.target.value;
  if (!userText == "") {
    github.getUser(userText).then(data => {
      if (data.profile.message === "Not Found") {
        ui.noUserAlertMessage("No such user", "alert alert-danger");
      } else {
        ui.showProfile(data.profile);
      }
    });
  } else {
    ui.searchBarClear();
  }
});
