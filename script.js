function GithubAccount(name, email, username) {
  this.name = name;
  this.email = email;
  this.userName = username;
  this.repo = [];

  this.updateAccount = function (fullName, email) {
    if (fullName !== undefined) {
      this.name = fullName;
    }
    if (email !== undefined) {
      this.email = email;
    }
  };

  this.getRepos = function () {
    return this.repo;
  };

  this.createRepo = function (repoName, creator) {
    const repo = {
      name: repoName,
      creator: creator,
      createAt: Date.now(),
    };

    this.repo.push(repo);
  };

  // this.updateRepo = (repoIndex) => {
  //   if (repoIndex >= 0 && repoIndex < this.repo.length) {
  //      return { ...this.repo[repoIndex] };
  //   }
   
  //   return null;
  //  };

  this.updatedRepo = ((index,oldName, name) =>{
    repo.map(item => {
      if (item.name === oldName) {
        item.name = name;
        return item.name;
      } else {
        return item;
      }
    });
  });


}

const user = new GithubAccount("Ariful islam", "me@email.com", "arifulbgt4");
