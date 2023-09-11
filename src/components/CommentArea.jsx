import { Component } from "react";
import AddComment from "./AddComment";
import CommentsList from "./CommentsList";
import { Spinner } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    isLoading: true,
    comments: [],
  };

  fetchComments = async () => {
    const URL =
      "https://striveschool-api.herokuapp.com/api/comments/" +
      this.props.idBook;
    const method = {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NjY1MjEwYmNhMDAwMTQ1ODNmZDIiLCJpYXQiOjE2OTQwOTA1NzMsImV4cCI6MTY5NTMwMDE3M30.NaaaXaNcsPbSiqzTPJ0r85gA640OlnKF8HjoHiwRbTc",
      },
    };
    try {
      const response = await fetch(URL, method);

      if (response.ok) {
        const parseComments = await response.json();
        this.setState({ isLoading: false, comments: parseComments });
        // console.log(parseComments);
        // console.log(this.state.comments);
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchComments();
  }
  render() {
    console.log(this.state.comments);
    return (
      <>
        {this.state.isLoading && (
          <Spinner
            style={{ marginTop: "20px" }}
            animation="border"
            variant="success"
          />
        )}
        {(this.state.comments === null || this.state.comments.length === 0) &&
          !this.state.isLoading && (
            <div style={{ marginTop: "20px" }}>
              Non ci sono ancora commenti su questo libro
            </div>
          )}
        {this.state.comments !== null &&
          this.state.comments.length !== 0 &&
          !this.state.isLoading && (
            <>
              <CommentsList commentList={this.state.comments} />
            </>
          )}
        <AddComment bookId={this.props.idBook} />
      </>
    );
  }
}
export default CommentArea;
