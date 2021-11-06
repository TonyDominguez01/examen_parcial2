import React, { useReducer, useEffect } from 'react'
import { AuthContext } from './context/AuthContext'
import { AuthReducer } from './reducers/AuthReducer'
import AppRouter from './routes/AppRouter'

//Definimos la funcion init, para intentar recuperar el estado log desde el localstorage.
const init = () => {
    return JSON.parse(localStorage.getItem('log')) || {log: false}
}

const App = () => {

    return (
        <AppRouter/>
    )
}

export default App
