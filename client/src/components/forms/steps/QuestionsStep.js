import { useState } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const QuestionsStep = (props) => {
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

    const onNext = () => {
        props.submit(props.index);
        props.onNext();
    }
    console.log(props.pointsValue);
    return (
        <>
            <FormGroup>
                <h3>Round {props.index + 1}</h3>
                <Label for="questionsSelect">How Many Questions?</Label>
                <Input type="select" name="number" id="questionsSelect" value={props.numValue} onChange={(e)=>{props.update(e, props.index)}}>
                    {getQuestionsOptions()}
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="pointsSelect">Default Points Per Question?</Label>
                <Input type="select" name="points" id="pointsSelect" value={props.pointsValue} onChange={(e)=>{props.update(e, props.index)}}>
                    {getPointsOptions()}
                </Input>
            </FormGroup>
            <button className="btn custom-button-secondary mx-1" type="button" onClick={props.onPrev}>Back</button>
            <button className="btn custom-button mx-1" type="button" onClick={() => onNext()}>Next</button>
        </>
    )
}

export default QuestionsStep;