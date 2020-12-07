import { useState } from 'react';

import { Form } from 'reactstrap';
import NameStep from './steps/NameStep';
import RoundsStep from './steps/RoundsStep';
import QuestionsStep from './steps/QuestionsStep';
import PartsStep from './steps/PartsStep';

var _ = require('lodash');

const SetUp = (props) => {
  const [formData, setFormData] = useState({
    gameName: '',
    rounds: [[]]
  });
  const [questionData, setQuestionData] = useState({
    number0: 1,
    points0: 1
  });
  const [stepCount, setStepCount] = useState(1)
  const onSubmit = e => {
    e.preventDefault();
    props.submit(formData);
  }

  // this gets passed to name form
  const handleName = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  // this gets passed to round selection form
  const handleSelect = (event) => {
    const { value } = event.target;
    let arr = [];
    for (let i = 0; i < parseInt(value); i++) {
      arr.push([]);
    }
    setFormData({ ...formData, rounds: arr })
  }

  // these gets passed to question selection forms
  const updateQuestions = (e, i) => {
    setQuestionData({ ...questionData, [`${e.target.name}${i}`]: e.target.value });
  }

  const submitQuestions = (i) => {
    setFormData((state) => {
      let temp = []
      for (let j = 0; j < questionData[`number${i}`]; j++) {
        temp.push({
          parts: 1,
          pointsPerPart: parseInt(questionData[`points${i}`])
        })
      };
      if (!(`number${i + 1}` in questionData)) {
        setQuestionData({ ...questionData, [`number${i + 1}`]: 1, [`points${i + 1}`]: 1 });
      }
      state.rounds[i] = temp;
      return state;
    });
  }

  // goes to parts step
  const handlePartsSelect = (e, round, question) => {
    setFormData((state) => {
      let deep = _.cloneDeep(state);
      deep.rounds[round][question][e.target.name] = parseInt(e.target.value);
      return deep;
    });
  }

  // dynamically create questions forms depending on number of rounds
  const questionsStep = () => {
    let questions = [];
    for (let i = 0; i < formData.rounds.length; i++) {
      questions.push(<QuestionsStep key={i} submit={submitQuestions} update={updateQuestions} numValue={questionData[`number${i}`]} pointsValue={questionData[`points${i}`]} stepCount={stepCount} index={i} onPrev={() => { setStepCount(stepCount - 1) }} onNext={() => { setStepCount(stepCount + 1); }} />);
    }
    return questions;
  }

  return (
    <Form onSubmit={e => onSubmit(e)} className="set-up-form">
      <NameStep handleName={handleName} stepCount={stepCount} gameName={formData.gameName} onPrev={() => { setStepCount(stepCount - 1) }} onNext={() => { setStepCount(stepCount + 1) }} />
      <RoundsStep handleSelect={handleSelect} stepCount={stepCount} selectValue={formData.rounds.length} onPrev={() => { setStepCount(stepCount - 1) }} onNext={() => { setStepCount(stepCount + 1) }} />
      {questionsStep()}
      <PartsStep stepCount={stepCount} rounds={formData.rounds} update={handlePartsSelect} />
      {stepCount !== (formData.rounds.length + 3) ? null : <button className="btn custom-button">submit</button>}
    </Form>
  );
}


export default SetUp;