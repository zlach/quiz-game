import { useState } from 'react';
import { FormGroup, Input } from 'reactstrap';

const PartsStep = (props) => {

    const Round = ({ round, index }) => (
        <div className="border rounded p-2 my-4 mx-5">
            <h4>Round {index + 1}</h4>
            {round.map((question, i) => {
                return (
                    <div className="d-inline-block rounded border p-2 m-2">
                        <h6>Question #{i + 1}</h6>
                        <div>Parts: {question.parts}</div>
                        <div>Points (per part): {question.pointsPerPart}</div>
                    </div>
                )
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