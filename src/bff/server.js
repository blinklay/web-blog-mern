export const server = {
  async login(email, password) {
    const users = await fetch("http://localhost:3000/users");
    const usersRes = await users.json();
    const currentUser = usersRes.find(user => user.email === email);

    if (!currentUser) {
      throw new Error("404 | Логин или пароль не верны!");
    }

    if (currentUser.password !== password) {
      throw new Error("400 | Логин или пароль не верны!");
    }

    localStorage.setItem("userId", JSON.stringify(currentUser.id))
    return currentUser;
  },
  checkAuth() {
    return !!JSON.parse(localStorage.getItem("userId"))
  }
}