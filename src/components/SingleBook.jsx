import { Component } from "react";
import { Button, Card, Col } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Col
        onClick={() => {
          this.setState({ selected: !this.state.selected });
        }}
      >
        <Card
          style={
            this.state.selected
              ? { border: "3px solid red" }
              : { border: "none" }
          }
        >
          <Card.Img variant="top" src={this.props.myObj.img} />
          <Card.Body>
            <Card.Title style={{ maxHeight: "48px", overflow: "hidden" }}>
              {this.props.myObj.title}
            </Card.Title>
            <Card.Text>Questo libro costa: {this.props.myObj.price}</Card.Text>
            <Button variant="primary">Compra</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
export default SingleBook;
