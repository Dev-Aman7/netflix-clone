import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./store";

import Page from "./pages";

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={Page} />
                    </Switch>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
};

export default App;
