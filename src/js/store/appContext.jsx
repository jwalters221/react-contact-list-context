import React from 'react';
import getState from './store.js';

export const Context = React.createContext(null);

const Store = (PassedComponent) =>{
    class StoreWrapper extends React.Component{
        constructor(props){
            super(props);
            this.state = getState(this);
        }
        
        componentDidMount() {
                  
            //fetch('https://assets-alesanchezr.c9users.io/apis/fake/contact/agenda/downtown_vi')
            fetch('https://assets.breatheco.de/apis/fake/contact/agenda/downtown_vi')
              .then(response => response.json())
               // .then(myJson => alert(JSON.stringify(myJson))
              .then(data => {
                  let {store} = this.state;
                  store.contacts = data;
                  this.setState({store});
                });
        }
        
        render(){
            return(
                <Context.Provider value={this.state}>
                    <PassedComponent {...this.props} />
                </Context.Provider>
                );
        }
    }
    
    return StoreWrapper;
};

export default Store;