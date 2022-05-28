import React from "react";
import axios from "axios";

const urlPlaylists =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

const headers = {
  headers: {
    Authorization: "izabella-mezeck-hoocks"
  }
};

export class homePage extends React.Component {
  state = {
    playlists: [],
    playlistInput: ""
  };

  componentDidMount() {
    this.getAllPlaylists();
  }

  getAllPlaylists = () => {
    axios
      .get(urlPlaylists, headers)
      .then((response) => {
        this.setState({ playlists: response.data.result.list });
      })
      .catch((error) => {
        alert("Algo deu errado, tente novamente");
      });
  };

  createPlaylist = () => {
    const body = {
      name: this.state.playlistInput
    };

    axios
      .post(urlPlaylists, body, headers)
      .then((response) => {
        alert(`A playlist ${this.state.playlistInput} foi criada com sucesso`);
        this.setState({ playlistInput: "" });
        this.getAllPlaylists();
      })
      .catch((err) => {
        alert(err.response.data.message);
        this.setState({ playlistInput: "" });
      });
  };

  onPlaylistTextChange = (event) => {
    this.setState({ playlistInput: event.target.value });
  };

  render() {
    const playlistComponents = this.state.playlists.map((list) => {
      return <li key={list.id}>{list.name}</li>;
    });

    return (
        <div className="homePage">
          <h1>Labefy</h1>
          <input
            value={this.state.playlistInput}
            onChange={this.onPlaylistTextChange}
            placeholder="Playlist"
          />
          <button onClick={this.createPlaylist}>Enviar</button>
          {playlistComponents}
        </div>
      );
    }
  }

export default homePage;
