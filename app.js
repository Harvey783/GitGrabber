const github = new Github();

const userSearch = document.getElementById("userSearch");

userSearch.addEventListener("keyup", e => {
  const userText = e.target.value;
  if (!userText == "") {
    github.getUser(userText).then(data => {
      console.log(data);
    });
  }
});
