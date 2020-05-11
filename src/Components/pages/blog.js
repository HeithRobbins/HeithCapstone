import React, { useState , UseEffect, useEffect } from 'react';

function Blog() {
    useEffect(() =>{
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);


    const fetchItems = async () => {
        const data = await fetch(
            // this what where i get the api from to fetch
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