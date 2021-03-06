import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contacts from "./views/Contacts.jsx";
import AddContacts from "./views/AddContact.jsx";
import EditContacts from "./views/EditContact.jsx";
import Store from "./store/appContext.jsx";

export class Layout extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route exact path="/index.html" component={Contacts} />
                            <Route exact path="/" component={Contacts} />
                            <Route exact path="/contacts" component={Contacts} />
                            <Route exact path="/add" component={AddContacts} />
                            <Route exact path="/edit/:id" component={EditContacts} />
                            <Route render={() => <h1 className="notfound">Not found!</h1>} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default Store(Layout);
