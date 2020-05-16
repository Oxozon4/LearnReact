import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleString()
        };
    }
    render() {
        return (
            <p>
                Present Time : {this.state.time};
            </p>
        )
    }
}
export default Clock;


