import { Component } from "react";
import AddComment from "./AddComment";
import CommentsList from "./CommentsList";

class CommentArea extends Component {
  state = {
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
        this.setState({ comments: parseComments });
        console.log(parseComments);
        console.log(this.state.comments);
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = () => {
    this.fetchComments();
  };
  render() {
    return (
      <>
        {this.state.comments.length === 0 && (
          <div>Non ci sono ancora commenti su questo libro</div>
        )}
        {this.state.comments.length !== 0 && (
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
