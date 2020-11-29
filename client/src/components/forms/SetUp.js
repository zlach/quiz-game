import { useState } from 'react';
import { Form } from 'reactstrap';
import NameStep from './steps/NameStep';
import RoundsStep from './steps/RoundsStep';
import QuestionsStep from './steps/QuestionsStep';

const Rounds = (props) => {
  const [formData, setFormData] = useState({
    gameName: '',
    rounds: [[]]
  })
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

  // this gets passed to question selection forms
  const updateQuestions = (i, num, points) => {
    setFormData((state) => {
      let temp = []
      for (let j = 0; j < num; j++) {
        temp.push({
          parts: 1,
          pointsPerPart: points
        })
      };
      state.rounds[i] = temp;
      return {...state, [`round${i}`]: [num, points] };
    });
  }


  // dynamically create questions forms depending on number of rounds
  const questionsStep = () => {
    let questions = [];
    for (let i = 0; i < formData.rounds.length; i++) {
      // console.log('------');
      // console.log(formData[`round${i}`];
      // console.log('------');
      questions.push(<QuestionsStep key={i} update={updateQuestions} numValue={formData[`round${i}`] ? formData[`round${i}`][0] : undefined} pointsValue={formData[`round${i}`] ? formData[`round${i}`][1] : undefined} stepCount={stepCount} index={i} onPrev={() => { setStepCount(stepCount - 1) }} onNext={() => { setStepCount(stepCount + 1); }} />);
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