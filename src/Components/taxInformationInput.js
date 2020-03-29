import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class taxInformationInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: undefined,
      income: undefined,
      consumption: undefined,
      property: undefined,
      property_tax: undefined,
      postal: undefined
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.name);
    this.setState({
      name: event.target.name,
      income: event.target.income,
      consumption: event.target.consumption,
      property_tax: event.target.property_tax,
      postal: event.target.postal
    })
    console.log(this.state);
  }
    render() {
        return (

            <Form className="inputForm">
              <Form.Group controlId="inputForm.name">
                <Form.Label>Name</ Form.Label>
                  <Form.Control type="" placeholder="John Doe" />
              </ Form.Group>
              <Form.Group controlId="inputForm.yearlyIncome">
                <Form.Label>Yearly Income</ Form.Label>
                  <Form.Control type="" placeholder="" />
              </ Form.Group>
              <Form.Group controlId="inputForm.yearlyConsumption">
                <Form.Label>Yearly Consumpution</ Form.Label>
                <Form.Control type="" placeholder="" />
                <Form.Text className="text-muted">
                  Enter an estimate of your annual spending
                </ Form.Text>
              </ Form.Group>
              <Form.Group controlId="inputForm.checkPT">
                <Form.Label>Do you own taxable property?</ Form.Label>
                <Form.Check inline disables className="radio-btn" label="Yes" type="radio" id="yesPT"/>
                <Form.Check inline disables label="No" type="radio" id="noPT"/>
              </ Form.Group>
              <Form.Group controlId="inputForm.propertyTax">
                <Form.Label>Property Tax</ Form.Label>
                <Form.Control type="" placeholder="" />
              </ Form.Group>
              <Form.Group controlId="inputForm.postalCode">
                <Form.Label>Postal Code</ Form.Label>
                <Form.Control type="" placeholder="" />
              </ Form.Group>
              <Button className="submit-btn" variant="success" type="submit" onClick={this.handleSubmit.bind(this)}>
                Submit
              </Button>
            </ Form>

        );
    }
}

export default taxInformationInput;
