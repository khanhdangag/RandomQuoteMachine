import React, { Component, Fragment } from 'react';


var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

class QuoteMachine extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quote: '',
            author: ''
        }
        this.END_POINT = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
    }


    getRandomClick = (event) => {
        var newQuote = '';
        fetch(this.END_POINT)
            .then(response => response.json())
            .then((data) => {
                newQuote = data.quotes[Math.floor(Math.random() * data.quotes.length)];
                this.setState({
                    quote: newQuote.quote,
                    author: newQuote.author
                });
                console.log(newQuote.quote);
            });
    }
    render() {
        let color = colors[Math.floor(Math.random() * colors.length)];

        return (
            <div style={{backgroundColor: color}}>
                <h1>QuoteMachine</h1>
                <button onClick={this.getRandomClick}>
                    Click me to get Random Quote.
                </button>
                <br />
                {(this.state.quote === '') ? <p>No quote yet</p> :
                    <Fragment>
                        <p>{this.state.quote}</p>
                        <br />
                        <p>{this.state.author}</p>
                    </Fragment>}
            </div>
        );
    }
}

export default QuoteMachine;
