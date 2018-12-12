import React from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Context } from "../store/appContext.jsx";

class Modal extends React.Component{
    constructor(){
        super();
        this.state = {
            // Initialize your state
        };
    }
    
    render(){
        return (
            <div className="modal" tabIndex="-1" role="dialog" style={{display: (this.props.show) ? 'inline-block' : 'none'}}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Are you sure?</h5>
                            { (this.props.onClose) ?
                                <button onClick={() => this.props.onClose()} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                :''
                            }
                        </div>
                        <div className="modal-body">
                            <p>This will remove the contact forever!! ID: {this.props.id}</p>
                        </div>
                        <div className="modal-footer">
                            {/*<button type="button" className="btn btn-primary">Oh no!</button>*/}
                            <Context.Consumer>
                                {({ actions }) => {
                                let id = this.props.id;
                                return(
                                    <button 
                                    type="button" 
                                    className="btn btn-primary" 
                                    data-dismiss="modal" 
                                    onClick={() => actions.deleteContact(this.props.history, id, this.props.onClose())}
                                    >
                                    Do it!
                                    </button>
                                    );
                                }}
                            </Context.Consumer>    
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}
/**
 * Define the data-types for
 * your component's properties
**/
Modal.propTypes = {
    history: PropTypes.object,
    onClose: PropTypes.func,
    show: PropTypes.bool,
    id: PropTypes.number
};

/**
 * Define the default values for
 * your component's properties
**/
Modal.defaultProps = {
  show: false,
  onClose: null
};
export default withRouter(Modal);