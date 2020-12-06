import { useState } from 'react';
import { FormGroup, Input } from 'reactstrap';

const PartsStep = (props) => {

    const Round = ({ round, index }) => (
        <div className="border p-2 m-2">
            <div>Round {index + 1}</div>
            {round.map((question, i) => {
                return <span>{question.parts}</span>
            })}
        </div>
    );

    if (props.stepCount !== (props.formData.rounds.length + 3)) {
        return null;
    }
    return (
        <>
            {props.formData.rounds.map((round, i) => <Round round={round} index={i} />)}
        </>
    )
}

export default PartsStep;