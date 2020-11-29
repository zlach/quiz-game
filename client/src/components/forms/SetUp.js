import { useState } from 'react';
import { Form } from 'reactstrap';
import NameStep from './steps/NameStep';
import RoundsStep from './steps/RoundsStep';
import QuestionsStep from './steps/QuestionsStep';

const Rounds = (props) => {
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
    console.log('submitttteddd');
    console.log(formData.gameName);
    console.log(formData.rounds)
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
    console.log('value', e.target.value, 'name', e.target.name, 'index', i);
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
      setQuestionData({ [`number${i+1}`]: 1, [`points${i+1}`]: 1 });
      state.rounds[i] = temp;
      return state;
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
      <button>submit</button>
    </Form>
  );
}

export default Rounds;