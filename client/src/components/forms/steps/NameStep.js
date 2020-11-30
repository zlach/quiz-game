import { useState } from 'react';
import { FormGroup, Input } from 'reactstrap';

const NameStep = (props) => {
    const [blankAlert, setBlankAlert] = useState('');
    const onClick = () => {
        if (props.gameName === '') {
            setBlankAlert('is-invalid')
        } else {
            props.onNext();
        }
    }

    if (props.stepCount !== 1) {
        return null;
    }
    return (
        <>
            <FormGroup>
                <Input className={blankAlert} type="text" name="gameName" id="exampleEmail" placeholder="Game Name" value={props.gameName} onChange={(e) => { setBlankAlert(''); props.handleName(e) }} />
                <div className="invalid-feedback">
                    Please Enter Name
                </div>
            </FormGroup>
            <button className="btn custom-button" type="button" onClick={() => onClick()}>Next</button>
        </>
    )
}

export default NameStep;