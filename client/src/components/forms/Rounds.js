
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Rounds = (props) => {
  const onSubmit = e => {
    e.preventDefault();
    console.log('submitttteddd')
  }
  return (
    <Form onSubmit={e => onSubmit(e)}>
      <FormGroup>
        <Label for="exampleEmail">Game Name</Label>
        <Input type="text" name="gameName" id="exampleEmail" placeholder="Game Name" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">How Many Rounds?</Label>
        <Input type="select" name="select" id="exampleSelect">
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
      <Button type="submit">Next</Button>
    </Form>
  );
}

export default Rounds;