class Github {
  constructor() {
    this.clientID = "6e47553e4fc0fa700b6a";
    this.clientSecret = "2063f22c83954ba450ebdb8d82930257f544a025";
    this.repos_count = 5;
    this.repos_sort = "updated";
  }

  getUser = async user => {
    const response = await fetch(`https://api.github.com/users/${user}`, {
      params: {
        clientID: this.clientID,
        clientSecret: this.clientSecret
      }
    });

    const repositoryResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${
        this.repos_count
      }&sort=${this.repos_sort}&clientID=${this.clientID}&clientSecret=${
        this.clientSecret
      }`
    );

    const profile = await response.json();
    const repos = await repositoryResponse.json();

    return {
      profile,
      repos
    };
  };
}
