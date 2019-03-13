class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    let userJoin = new Date(`${user.created_at}`);
    let date = userJoin.getDate();
    let month = userJoin.getMonth();
    let year = userJoin.getFullYear();
    let formattedUserJoin = month + 1 + "/" + date + "/" + year;

    this.profile.innerHTML = `
    <div class="card card-body mb-2">
      <div class="row">
        <div class="col-md-3">
          <img class="img-fluid mb-2" src="${user.avatar_url}">
          <a href="${
            user.html_url
          }" target="_blank" class="btn btn-secondary btn-block mb-4"><em>View Profile</em></a>
        </div>
        <div class="col-md-9">
          <span class="badge badge-primary">Repositories: ${
            user.public_repos
          }</span>

          <br><br>
          <ul class="list-group">
            <li class="list-group-item">Location: ${user.location}</li>
            <li class="list-group-item">Member Since: ${formattedUserJoin}</li>
          </ul>
        </div>
      </div>
    </div>
    <br>
    <h5 class="page-heading mb-3">Latest Repositories</h5>
    <div id="repositories"></div>
  `;
  }

  showRepository(repos) {
    let output = "";
    repos.forEach(function(repo) {
      let repoCreated = new Date(`${repo.created_at}`);
      let createDate = repoCreated.getDate();
      let createMonth = repoCreated.getMonth();
      let createYear = repoCreated.getFullYear();
      let formattedRepoCreated =
        createMonth + 1 + "/" + createDate + "/" + createYear;

      let repoUpdated = new Date(`${repo.updated_at}`);
      let updateDate = repoUpdated.getDate();
      let updateMonth = repoUpdated.getMonth();
      let updateYear = repoUpdated.getFullYear();
      let formattedRepoUpdated =
        updateMonth + 1 + "/" + updateDate + "/" + updateYear;
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a class="text-info" href="${repo.html_url}" target="_blank">${
        repo.name
      }</a>
            </div>
            <div class="col-md-6">
            <span class="badge badge-primary">Created: ${formattedRepoCreated}</span>
            <span class="badge badge-success">Updated: ${formattedRepoUpdated}</span>
            </div>
          </div>
        </div>
      `;
    });

    // Output repos
    document.getElementById("repositories").innerHTML = output;
  }

  searchBarClear() {
    this.profile.innerHTML = "";
  }

  noUserAlertMessage(message, className) {
    this.clearNoUserAlertMessage();
    const div = document.createElement("div");
    div.className = className;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".searchContainer");
    const search = document.querySelector(".search");
    container.insertBefore(div, search);

    setTimeout(() => {
      this.clearNoUserAlertMessage();
    }, 1750);
  }

  clearNoUserAlertMessage() {
    const currentNoUserAlertMessage = document.querySelector(".alert");
    if (currentNoUserAlertMessage) {
      currentNoUserAlertMessage.remove();
    }
  }
}
