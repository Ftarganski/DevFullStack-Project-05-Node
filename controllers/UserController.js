class UserController {
    getUser(id) {
        return [
          { id: 1, name: "Juca Bala" },
        ];
      }


  getUsers() {
    return [
      { id: 1, name: "Juca Bala" },
      { id: 2, name: "João Ninguém" },
      { id: 3, name: "Maria Maria" },
      { id: 4, name: "José Lindo" },
    ];
  }
}

module.exports = UserController
