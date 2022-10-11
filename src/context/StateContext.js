import React, { createContext, useContext, useState, useEffect } from 'react'

const Context = createContext()

export const StateContext = ({children}) => {
    const [page, setPage] = useState('about')

    return (
        <Context.Provider value={{page, setPage}} >{children}</Context.Provider>
    )
}

export const useStateContext = () => useContext(Context)