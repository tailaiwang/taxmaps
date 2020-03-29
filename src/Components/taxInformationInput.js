import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Link, Route} from 'react-router-dom';
import PersonalBreakdown from './dashboard/personalbreakdown.component'


var requirements = {
  income: undefined,
  consumption: undefined,
  property: undefined,
  property_tax: undefined,
  postal: undefined
}

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
    console.log(this.state);
  }

  handleSubmit(event) {
    event.preventDefault();
    requirements.income = this.state.income;
    requirements.consumption = this.state.consumption;
    requirements.property = this.state.property;
    requirements.property_tax = this.state.property_tax;
    requirements.postal = this.state.postal;

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
                <Form.Check
                inline
                disables
                className="radio-btn"
                label="Yes"
                type="radio"
                id="yesPT"/>
                <Form.Check
                inline
                disables
                label="No"
                type="radio"
                id="noPT"/>
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
                  <Link className="btn-link" to="/personal-breakdown">Submit</Link>
                </Button>
                <Route path="/personal-breakdown">
                  <PersonalBreakdown />
                </Route>
            </ Form>
        );
    }
}

export { requirements };
export default taxInformationInput;
