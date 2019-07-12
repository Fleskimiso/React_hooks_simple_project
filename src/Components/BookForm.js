import React ,  {useContext, useState} from 'react';
import { BookContext } from '../Contexts/BookContext';

const BookForm = () => {
    const {dispatch} = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    return (  <form onSubmit={ (e) =>{
        e.preventDefault();
        dispatch({type: "ADD_BOOK", book : {
            title: title,
            author: author
        } })
        setTitle('');
        setAuthor('')
        }} >
        <input type="text" placeholder="book title" value={title}
        onChange={ e => setTitle(e.target.value) } required />
        <input type="text" placeholder="author" value={author}
        onChange={ e => setAuthor(e.target.value) } required />
        <input type="submit" value="add book"/>

    </form> );
}
 
export default BookForm;
