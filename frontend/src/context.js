import { createContext } from 'react';

const initialState = {
    user: "UserFromContext",
    setContent: function (content) {
    }
}

const AppContext = createContext(initialState);

export default AppContext;
