import React, { createContext, useReducer , useEffect} from 'react';
import {bookReducer} from "../Reducers/bookReducer";
export const BookContext = createContext();

 const BookContextProvider = (props) =>{
    const [books, dispatch] = useReducer(bookReducer,[], () =>{
        const localData = localStorage.getItem('books');
        return localData? JSON.parse(localData) : []
    } );
    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books));
    }, [books])
    /*
{title: 'name of the wind', author: 'Patrick Rothfuss', id: 1 },
        {title: 'the final empire' , author: "Brandon Sanderson", id: 2}
    */
    return (
        <BookContext.Provider value={{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
    )
}
export default BookContextProvider;