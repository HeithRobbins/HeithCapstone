import React, { useState, useEffect } from 'react';

function Blog() {
    
    const [items, setItems] = useState([]);
    
    useEffect(() =>{
        fetchBlogs();
    }, []);
    
    const fetchBlogs = async () => {
        fetch(
            "https://hr-blog-api-capstone.herokuapp.com" 
        ).then(res => {
            return res.text()
        })
        .then(data => {
            setItems(data)
        })
        .catch(err => console.log(err))
    
        // setItems(items)
    }

    return (
        <div>
            {items}
        </div>
    )
}
export default Blog