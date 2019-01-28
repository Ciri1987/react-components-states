
var Counter = React.createClass({
    getInitialState: function () {
        return {
            counter: 0
        };
    },

    increment: function () {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    decrement: function () {
        this.setState({
            counter: this.state.counter - 1

        });
    },
    getDefaultProps: function () {
        console.log('Przekazanie domyślnych wartości do komponentu')
    },

    componentWillMount: function () {
        console.log('Sprawdzenie poprawności propsów');
    },

    sholudComponentUpdate: function () {
        console.log('Sprawdzenie, czy komponent powinien zostać jeszcze raz wyrenderowany.')
    },

    componentWillUnmount: function () {
        console.log('Usuniecie komponentu ze strony')
    },
    render: function () {
        return React.createElement('div', {},
            React.createElement('span', {}, 'Counter ' + this.state.counter),
            React.createElement('button', { onClick: this.decrement }, '-'),
            React.createElement('button', { onClick: this.increment }, '+',
            ),
        );
    }
});

var moreCounters = React.createClass({
    render: function () {
        return (
            React.createElement('div', { className: 'app' },
                React.createElement('div', {},
                    React.createElement('div', {},
                        React.createElement(Counter, {})
                    ),
                    React.createElement('div', {},
                        React.createElement(Counter, {})
                    ),
                ),
                React.createElement('div', {},
                    React.createElement('div', {},
                        React.createElement(Counter, {})
                    ),
                    React.createElement('div', {},
                        React.createElement(Counter, {})
                    ),
                ),
            )
        )
    }
});
var element = React.createElement(moreCounters);
ReactDOM.render(element, document.getElementById('app'));

