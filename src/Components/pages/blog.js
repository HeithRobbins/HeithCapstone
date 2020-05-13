import React, { useState, useEffect } from 'react';

function Blog() {
    
    const [items, setItems] = useState([]);
    
    useEffect(() =>{
        fetchBlogs();
    }, []);
    
    const fetchBlogs = async () => {
        fetch(
            "https://hr-blog-api-capstone.herokuapp.com/blog" 
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
            <h1>just seeing something</h1>
        </div>
    )
}
export default Blog