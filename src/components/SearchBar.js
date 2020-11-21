import React from "react";
import { Form, Button } from "react-bootstrap";
const SearchBar = ({ handleSubmit }) => {
  return (
    <section className="search">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="text"
            className="form-control"
            name="video"
            placeholder="Search Video"
          />
        </Form.Group>
        <Button variant="secondary" size="lg" block type="submit">
          Search
        </Button>
      </Form>
    </section>
  );
};

export default SearchBar;
