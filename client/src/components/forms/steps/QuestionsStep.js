import { useState } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const QuestionsStep = (props) => {
    const [values, setValues] = useState({
        number: 1,
        points: 1
    });
    if (props.stepCount !== (props.index + 3)) {
        return null;
    }
    const getQuestionsOptions = () => {
        let a = [];
        let n = 1;
        while (n < 51) {
            a.push(<option key={'key-' + n}>{n}</option>);
            n++;
        }
        return a;
    }
    const getPointsOptions = () => {
        let a = [];
        let n = 1;
        while (n < 6) {
            a.push(<option key={'key2-' + n}>{n}</option>);
            n++;
        }
        return a;
    }

    const onChange = (e) => {
        props.update(props.index, props.numValue, values.pointsValue);
    }
    return (
        <>
            <FormGroup>
                <h3>Round {props.index + 1}</h3>
                <Label for="questionsSelect">How Many Questions?</Label>
                <Input type="select" name="number" id="questionsSelect" value={props.numValue} onChange={(e) => onChange(e)}>
                    {getQuestionsOptions()}
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="pointsSelect">Default Points Per Question?</Label>
                <Input type="select" name="points" id="pointsSelect" value={props.pointsValue} onChange={(e) => onChange(e)}>
                    {getPointsOptions()}
                </Input>
            </FormGroup>
            <button className="btn custom-button-secondary mx-1" type="button" onClick={props.onPrev}>Back</button>
            <button className="btn custom-button mx-1" type="button" onClick={props.onNext}>Next</button>
        </>
    )
}

export default QuestionsStep;