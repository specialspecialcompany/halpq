import React, { Component } from 'react';
import firebase from 'firebase';
import beingHelped from '../assets/being-helped.svg';

class BeingHelped extends Component {
  beingHelped = (classroomRef, questionRef) => {
    const question = firebase
      .database()
      .ref(`/Questions/${classroomRef}/${questionRef}/isBeingHelped`);
    question.set(true);
  };

  render() {
    return (
      <div className="beingHelped clearfix">
        <button
          type="button"
          onClick={() => {
            this.beingHelped(this.props.classKey, this.props.questionKey);
          }}
        >
          <div className="buttonImage">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 100 125"
              x="0px"
              y="0px"
            >
              <path
                fill="#231f1f"
                d="M50,0a50,50,0,1,0,50,50A50,50,0,0,0,50,0Zm3.78,69.88C53.8,73.09,52,75,48.85,75s-5.25-1.84-5.26-4.53c0-3.73,1.67-5.59,5-5.69C51.3,64.7,54.12,66.36,53.78,69.88Zm7-23.08c-1.42,1.1-2.91,2.1-4.34,3.18a7.06,7.06,0,0,0-3.18,6.3,4,4,0,0,1-2.88,4,4.42,4.42,0,0,1-5.18-1.55,4.19,4.19,0,0,1-.59-2.07A13.89,13.89,0,0,1,50.3,45,41.55,41.55,0,0,0,54.83,41,5,5,0,0,0,56,38.19c0.23-2.83-1.59-4.65-4.52-4.84-3.54-.23-6.52.69-8.59,3.82a4.19,4.19,0,0,1-4.35,2c-3-.5-4.29-2.94-3.06-5.75a12.84,12.84,0,0,1,6.25-6.2A21.71,21.71,0,0,1,50.79,25a45.51,45.51,0,0,1,5.29.87c5.33,1.51,8.5,5.77,8.9,11.43A10.4,10.4,0,0,1,60.77,46.8Z"
              />
            </svg>
          </div>
          <p>Mark as being helped</p>
        </button>
      </div>
    );
  }
}

export default BeingHelped;
