class Github {
  constructor() {
    this.clientID = "b6844a6263ddd02d0dc5";
    this.clientSecret = "91c21c9be54a074a91648a52605992c8efefe750";
  }

  getUser = async user => {
    const response = await fetch(`https://api.github.com/users/${user}`, {
      params: {
        clientID: this.clientID,
        clientSecret: this.clientSecret
      }
    });

    const repositoryResponse = await fetch(
      `https://api.github.com/users/${user}/repos`,
      {
        params: {
          clientID: this.clientID,
          clientSecret: this.clientSecret
        }
      }
    );

    const profile = await response.json();
    const repository = await repositoryResponse.json();

    return {
      profile,
      repository
    };
  };
}
