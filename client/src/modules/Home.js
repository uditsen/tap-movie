import { useState, useEffect } from "react";
import axios from "axios";
import Search from "../components/Search";
import Loader from "../components/Loader";
import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router";


const Home = () => {

  const [movies, setMovie] = useState([]);
  const [loader, setLoader] = useState(false);

  const [searchText, setSearchText] = useState("");

  const history = useHistory();
  useEffect(() => {
    addMovies();
  }, []);

  const addMovies = async () => {
    try {
      setLoader(true);
      const response = await axios(`http://localhost:4000/api/movies?searchText=${searchText}`);
      setLoader(false);
      setMovie(response.data);
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const onClickAddMovie = ({id})=>{
    history.push(`/${id}`);
  }

  return (
    <>
      <Search onClickRefresh={addMovies} setSearchText={setSearchText} />
      {loader ? (
        <Loader />
      ) : (
        <div className="d-flex flex-wrap justify-content-start">
          {movies.map(movie => {
            const {title,id} = movie;
            return (
              <Card key={id} className="m-3 movie-card">
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="secondary" onClick={()=>onClickAddMovie(movie)}>About It</Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Home;
