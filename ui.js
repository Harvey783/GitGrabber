class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }
  showProfile(user) {
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
            <li class="list-group-item">Member Since: ${user.created_at}</li>
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
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a class="text-info" href="${repo.html_url}" target="_blank">${
        repo.name
      }</a>
            </div>
            <div class="col-md-6">
            <span class="badge badge-primary">Created: ${repo.created_at}</span>
            <span class="badge badge-success">Updated: ${repo.updated_at}</span>
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
