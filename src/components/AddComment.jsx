import { Component } from "react";
import { Button, Form } from "react-bootstrap";

class AddComment extends Component {
  state = {
    userComment: {
      comment: "",
      rate: "",
      elementId: this.props.bookId,
    },
  };

  handleChange = (propertyName, propertyValue) => {
    this.setState({ ...this.state.userComment, [propertyName]: propertyValue });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const URL =
      "https://striveschool-api.herokuapp.com/api/comments/" +
      this.state.userComment.elementId;
    const method = {
      method: "POST",
      body: JSON.stringify(this.state.userComment),
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NjY1MjEwYmNhMDAwMTQ1ODNmZDIiLCJpYXQiOjE2OTQwOTA1NzMsImV4cCI6MTY5NTMwMDE3M30.NaaaXaNcsPbSiqzTPJ0r85gA640OlnKF8HjoHiwRbTc",
        "Content-Type": "application/json",
      },
    };
    try {
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Form
        style={{ textAlign: "left", marginTop: "20px" }}
        onSubmit={this.handleSubmit}
      >
        <h5>Dacci la tua opinione</h5>
        <Form.Group>
          <Form.Label>Aggiungi commento</Form.Label>
          <Form.Control
            type="text"
            placeholder="Scrivi il tuo commento"
            required
            // value={this.state.userComment.comment}
            onChange={(event) =>
              this.handleChange("comment", event.target.value)
            }
          />
        </Form.Group>
        <Form.Group style={{ marginTop: "8px" }}>
          <Form.Label>Quanto ti è piaciuto?</Form.Label>
          <Form.Control
            type="number"
            placeholder="Voto 1-5"
            min={1}
            max={5}
            required
            // value={this.state.userComment.rate}
            onChange={(event) => this.handleChange("rate", event.target.value)}
          />
        </Form.Group>
        <Button type="submit" variant="secondary" style={{ marginTop: "8px" }}>
          Invia
        </Button>
      </Form>
    );
  }
}
export default AddComment;
