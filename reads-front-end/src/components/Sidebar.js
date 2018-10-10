import React, { Component } from 'react';
import SideCard from './SideCard';

const Sidebar = (props) => {
    const createSideCards = props.books.map((book, i) =>  {
        return  (
          <SideCard title={book.title}
                    key={i}
                    genre={book.genre}
                    img_URL={book.cover_URL} />
        )
    })
    
    return (
        <div>
            {createSideCards};    
        </div>   
    )
}

export default Sidebar
