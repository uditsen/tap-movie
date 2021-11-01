import axios from "axios";
import { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import {useHistory} from "react-router-dom";

const AddMovies = () => {

  const [formValues,setFormValues] = useState({});
  const history = useHistory();

  const onChangeFormField = (event) =>{
    const {value, name,typeOf} = event.target;


    setFormValues({
      ...formValues,
      [name] : typeOf === "number"? Number(value) : value
    });
  }

  const onClickSubmit = async()=>{
    try{
      await axios({
        url:"http://localhost:4000/api/movies",
        method:"POST",
        data: formValues
      });
      history.push("/")
    }
    catch (e){
      alert("add movie failed");
    }
  }

  return (
    <>
      <Card>
        <Card.Header>
          <h3>Add Movie</h3>
        </Card.Header>
        <Card.Body>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Add Title</Form.Label>
            <Form.Control type="text" name="title" onChange={onChangeFormField}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="rating" >
            <Form.Label>Rating</Form.Label>
            <Form.Control type="number" name="rating" onChange={onChangeFormField}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="poster">
            <Form.Label>Poster</Form.Label>
            <Form.Control type="text" name="poster" onChange={onChangeFormField} />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={onClickSubmit}>
            Submit
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default AddMovies;
