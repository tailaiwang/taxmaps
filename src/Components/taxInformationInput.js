import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class taxInformationInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      income: undefined,
      consumption: undefined,
      property: undefined,
      property_tax: undefined,
      postal: undefined
    }
  }

  handleChange = event => {

    const info = event.target.name;
    const value = event.target.value;

    this.setState({
        [info]: value
      }
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.name);
    this.setState({
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
              <Form.Group controlId="inputForm.yearlyIncome">
                <Form.Label>Yearly Income</ Form.Label>
                  <Form.Control
                  required
                  name = "income"
                  type="text"
                  placeholder=""
                  value={this.state.income}
                  onChange={this.handleChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </ Form.Group>
              <Form.Group controlId="inputForm.yearlyConsumption">
                <Form.Label>Yearly Consumpution</ Form.Label>
                <Form.Control
                required
                name = "consumption"
                type="text"
                placeholder=""
                value={this.state.consumption}
                onChange={this.handleChange}
                />
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
                <Form.Control
                name = "property_tax"
                required
                type="text"
                placeholder=""
                onChange={this.handleChange}
                />
              </ Form.Group>
              <Form.Group controlId="inputForm.postalCode">
                <Form.Label>Postal Code</ Form.Label>
                <Form.Control
                name = "postal"
                required
                type="text"
                placeholder=""
                onChange={this.handleChange}
                />
              </ Form.Group>
              <Button className="submit-btn" variant="success" type="submit" onClick={this.handleSubmit.bind(this)}>
                Submit
              </Button>
            </ Form>
        );
    }
}

export default taxInformationInput;
