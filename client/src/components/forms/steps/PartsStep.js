import { useState } from 'react';
import { FormGroup, Input } from 'reactstrap';

const PartsStep = (props) => {
    if (props.stepCount !== (props.rounds.length + 3)) {
        return null;
    }
    console.log('fuck this');
    return (
        <>
            {props.rounds.map((round, index) =>
                <div key={index + 100} className="border rounded p-2 my-4 mx-5">
                    <h4>Round {index + 1}</h4>
                    {round.map((question, i) => {
                        return (
                            <div key={i + 1000} className="d-inline-block rounded border p-2 m-2">
                                <h6>Question #{i + 1}</h6>
                                <div className="d-inline-block">Parts:</div>{' '}
                                <Input bsSize="sm" type="select" name="parts" className="d-inline-block" onChange={(e) => props.update(e, index, i)} value={props.rounds[index][i].parts} style={{ width: '50px' }}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                                <br />
                                <div className="d-inline-block">Points (per part):</div>{' '}
                                <Input bsSize="sm" type="select" name="pointsPerPart" className="d-inline-block" onChange={(e) => props.update(e, index, i)} value={props.rounds[index][i].pointsPerPart} style={{ width: '50px' }}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </div>
                        )
                    })}
                </div>
            )}
        </>
    )
}

export default PartsStep;