import React from "react";
import axios from "axios";

const App = () => {
  const [jokes, setJokes] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        console.log(response.data);
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Hello World!</h1>

      <p>Jokes: {jokes.length}</p>

      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </div>
  );
};

export default App;