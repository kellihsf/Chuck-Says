import React from "react";

class JokeApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: "",
      isLoading: false,
    };
  }

  render() {
    return (
      <div>
        {/* // If isLoading is true, we'll show the loading message.
        Otherwise, we show the joke text. */}
        <p>{this.state.isLoading ? "Loading..." : this.state.joke}</p>
        <button onClick={this._fetchJoke}>New Joke</button>
      </div>
    );
  }

  //   The first .then() runs after the entire Response has arrived and converts it to JSON.
  //   The second .then() receives the JSON Object and can store the joke text in state.

  _fetchJoke = () => {
    this.setState(
      {
        isLoading: true,
      },
      () => {
        const url = "https://api.chucknorris.io/jokes/random?category=dev";
        fetch(url)
          .then((response) => response.json())
          .then((jokeJson) => {
            this.setState(
              {
                joke: jokeJson.value,
                isLoading: false,
              },
              () => {
                console.log("New joke stored");
              }
            );
          });
      }
    );
  };
}
export default JokeApp;
