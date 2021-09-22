import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "@material-ui/core/styles";

import { darkTheme } from "./style/theme";

import { store, persistor } from "./store";

// import Page from "./pages";
import Home from "./pages/Home";
import ManageProfiles from "./pages/ManageProfiles";

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <ThemeProvider theme={darkTheme}>
                    <BrowserRouter>
                        <Switch>
                            <Route
                                path="/ManageProfiles"
                                component={ManageProfiles}
                            />
                            <Route path="/" component={Home} />
                        </Switch>
                    </BrowserRouter>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
};

export default App;
