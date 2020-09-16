class auth {
  constructor() {
    this.authenticate = false;
  }

  login() {
    this.authenticate = true;
    console.log(this.authenticate);
  }

  logout() {
    this.authenticate = false;
  }
  isAuthenticated() {
    return this.authenticate;
  }
}

export default new auth();
