import Header from "./components/Header";
import { Container } from "react-bootstrap";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./modules/Home";
import AddMovies from "./modules/AddMovies";
import Help from "./modules/Help";
import MovieDetails from "./modules/MovieDetails";

import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container className="mt-3">
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/add-movie"><AddMovies /></Route>
          <Route exact path="/help"><Help /></Route>
          <Route exact path="/:movieId"><MovieDetails /></Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
