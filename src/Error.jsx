var React                  = require('react');
class Error extends React.Component {
    constructor(props) {
        super(props);    
        
    }
    
    render() {
        return(
            <div>
                <h1> Error! No menu generated for {this.props.name} </h1>
            </div>
        )
    }
}
module.exports = Error;