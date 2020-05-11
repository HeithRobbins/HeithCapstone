import React, { useState, useEffect } from 'react';

function Blog() {
    useEffect(() =>{
        fetchBlogs();
    }, []);

    const [items, setItems] = useState([]);


    const fetchBlogs = async () => {
        const data = await fetch(
            "https://git.heroku.com/hr-blog-api-capstone.git" 
        )

        const items = await data.json()
        console.log(items);
        setItems(items)
    }

    return (
        <div>
            {items.map(item => (
                <h1>this is the blog page</h1>
            ))}
        </div>
    )
}
export default Blog