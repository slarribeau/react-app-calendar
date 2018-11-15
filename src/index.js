import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class App extends React.Component {
    state = {lat:null, errorMessage:''};

   render() {
        console.log("render")

        if (this.state.errorMessage && !this.state.lat) {
           return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        }
        
        return <Spinner msg="Please accept location request."/>;
   }
   
   componentDidMount() {
        console.log("mount")
        window.navigator.geolocation.getCurrentPosition(
            position => {
                console.log(position)
                this.setState({lat: position.coords.latitude})
            },
            err => { 
                console.log(err) 
                this.setState({errorMessage: err.message});
            }
        );
   }

   componentDidUpdate() {
       console.log("update")
   }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);