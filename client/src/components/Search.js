import {Form,Button} from "react-bootstrap";

import "../index.css";

function Search({setSearchText,onClickRefresh}) {
    return (
        <div className="d-flex">
        <Form.Control type="text" placeholder="Enter the movie name.." className="form-container" onChange={(event)=>setSearchText(event.target.value)}/>
        <Button variant="success" onClick={onClickRefresh}>Search</Button>
        <Button variant="dark" onClick={onClickRefresh}>Refresh</Button>
        </div>
    )
}

export default Search
