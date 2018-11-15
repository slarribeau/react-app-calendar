import React from 'react';
import ReactDOM from 'react-dom';

/*const App = () => {

   window.navigator.geolocation.getCurrentPosition(
        position => console.log(position),
        err => console.log(err)
   );
   return <div>Hi There!</div>
}*/

class App extends React.Component {
    state = {lat:null, errorMessage:''};
    //constructor(props) {
        //console.log("constructor")
        //super(props);
        //this.state={lat:null, errorMessage: ''};
    //}
   render() {
       console.log("render")
       return(
            <div>
                Lattitude {this.state.lat}
                <br />
                Error: {this.state.error}
            </div>)
       ;
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