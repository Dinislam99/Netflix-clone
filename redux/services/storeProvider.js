'use client'

import { store } from "./store"
const { Provider } = require("react-redux")

const StoreProvider = ({ children }) => {

    return (
        <Provider store={store}>
            {children}
        </Provider>

    )
}

export default StoreProvider