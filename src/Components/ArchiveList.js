import React, { Component } from "react";
import firebase from "firebase";
import DeleteQuestion from "./DeleteQuestion";
import QuestionConversation from "./QuestionConversation";

class AchiveList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      classroomName: ""
    };
  }

  componentDidMount() {
    const dbRef = firebase.database();
    // dbRef.ref(`/Questions/${this.props.classKey}`).once('value', snapshot => {
    //   if (snapshot.exists()) {
    //     this.setState({
    //       classroomName: snapshot.val().classroomName,
    //     });
    //   }
    // });
    dbRef.ref(`/Archive/${this.props.classKey}`).on("value", (snapshot) => {
      if (!snapshot.exists()) {
        this.setState({ questions: [] });
      } else if (snapshot.val()) {
        const questionArray = Object.entries(snapshot.val());
        this.setState({ questions: questionArray });
      }
    });
  }

  componentWillUnmount() {
    const dbRef = firebase.database();
    dbRef.ref(`/Archive/${this.props.classKey}`).off();
  }

  render() {
    return (
      <div>
        <h3 className="question__list__title">Completed Questions</h3>

        {this.state.questions.map((question) => (
          <div
            className="question"
            key={question[0]}
            // questionKey={question[0]}
          >
            <div className="question__userInfo">
              <img src={question[1].photoURL} alt="" />
              <p>{question[1].name}</p>
            </div>
            <div className="question__questionContent">
              <p>{question[1].location}</p>
              <p>{question[1].content}</p>
            </div>
            <div className="question__actions__admins">
              <DeleteQuestion
                user={this.props.user}
                isAdmin={this.props.isAdmin}
                classKey={this.props.classKey}
                questionKey={question[0]}
                questionOwner
              />
              <QuestionConversation
                user={this.props.user}
                isAdmin={this.props.isAdmin}
                classKey={this.props.classKey}
                questionKey={question[0]}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default AchiveList;
