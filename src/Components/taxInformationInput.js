import React, {Component} from 'react';

class taxInformationInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: undefined,
            yearlyIncome: undefined,
            yearlyConsumption: undefined,
            propertyTax: undefined,
            postalCode: undefined
    };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Hey there! ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            
            <form onSubmit={this.handleSubmit}>
                <h1>Personal breakdown works</ h1>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <label>
                    Yearly Income:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <label>
                    Yearly Consumption:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <label>
                    Property Tax:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <label>
                    Postal Code:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Find My Tax Breakdowns"/>
            </form>
        );
    }
}

export default taxInformationInput;
