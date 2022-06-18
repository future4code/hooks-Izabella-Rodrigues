import React from "react"
import axios from "axios"

const urlCreateUsers=
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const headers = {
  headers: {
    Authorization: "izabella-mezeck-hooks"
  }
};

class App extends React.Component {
  state = {
    user: [],
    userInputName: "",
    userInputEmail: ""
  };

  createUser = () => {
    const body = {
      name: this.state.userInputName,
      email: this.state.userInputEmail
    } 

    axios
      .post(urlCreateUsers, body, headers)
      .then((response) => {
        alert(`O usuário ${this.state.userInputName} foi criado com sucesso`);
        this.setState({ userInputName: "" }, {userInputEmail: ""});
        this.get.createUser();
      })
      .catch((error) => {
        alert(error.response.data.message);
        this.setState({ userInputName: "" }, {userInputEmail: ""});
    });
  };

  onUserNameChange = (event) => {
    this.setState({ userInputName: event.target.value });
  };

  onUserEmailChange = (event) => {
    this.setState({ userInputEmail: event.target.value });
  };

  render() {
    const userComponents = this.state.user.map((list) => {
      return <p key={list.id}>{list.name}</p>;
    });

    return (
      <div className="App">
        <h1>User Registration</h1>
        <input
          value={this.state.userInputName}
          onChange={this.onUserNameChange}
          placeholder="New User Name"
        />
        <input
          value={this.state.userInputEmail}
          onChange={this.onUserEmailChange}
          placeholder="New User Email"
        />
        <button onClick={this.createUser}>Enviar</button>
        {userComponents}
      </div>
    );
  }
}

export default App; 