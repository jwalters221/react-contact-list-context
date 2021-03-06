import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";

export default class AddContacts extends React.Component {
    render() {
        return (
            <div className="container">
                <div>
                    <h1 className="text-center mt-5">Add a new contact</h1>
                    <Context.Consumer>
                        {({ store, actions }) => {
                        let id = this.props.match.params.id;
                            return(                    
                                <form>
                                    <div className="form-group">
                                        <label>Full Name</label>
                                        <input id="nameInput" type="text" className="form-control" placeholder="Full Name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input id="emailInput" type="email" className="form-control" placeholder="Enter email" 
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input id="phoneInput" type="phone" className="form-control" placeholder="Enter phone" 
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Address</label>
                                        <input id="addressInput" type="text" className="form-control" placeholder="Enter address" 
                                        />
                                    </div>
                                    <button type="button" 
                                    onClick={() => actions.addContact(this.props.history, id, 
                                    document.querySelector('#nameInput').value,
                                    document.querySelector('#emailInput').value,
                                    document.querySelector('#phoneInput').value,
                                    document.querySelector('#addressInput').value)
                                    }
                                    className="btn btn-primary form-control">save</button>
                                    <Link className="mt-3 w-100 text-center" to="/">or get back to contacts</Link>
                                </form>
                        );
                        }}
                    </Context.Consumer>  
                </div>
            </div>
        );
    }
}

AddContacts.propTypes = {
	match: PropTypes.object,
	history: PropTypes.object
};