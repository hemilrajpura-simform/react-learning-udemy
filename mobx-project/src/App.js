import React from "react";
import ReactDOM from "react-dom";
import storeInstance from './store/store';


export const StoreContext = React.createContext();

ReactDOM.render(
        <StoreContext.Provider value={storeInstance}>
         
        </StoreContext.Provider >
    , document.getElementById('app')
    );

