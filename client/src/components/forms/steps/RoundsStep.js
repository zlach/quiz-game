import { FormGroup, Label, Input } from 'reactstrap';

const RoundsStep = (props) => {
    if (props.stepCount !== 2) {
        return null;
    }
    return (
        <>
            <FormGroup>
                <Label for="exampleSelect">How Many Rounds?</Label>
                <Input type="select" name="select" id="exampleSelect" value={props.selectValue} onChange={props.handleSelect}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </Input>
            </FormGroup>
            <button className="btn custom-button-secondary mx-1" type="button" onClick={props.onPrev}>Back</button>
            <button className="btn custom-button mx-1" type="button" onClick={props.onNext}>Next</button>
        </>
    )
}

export default RoundsStep;