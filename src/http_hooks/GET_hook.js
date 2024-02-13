
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function GET_hook() {

    const [posts, setPosts] = useState({})
    const [id, setID] = useState(1)
    const [dispID, setDispID] = useState(id)
    let c = 1
    const getID = () => {
        console.log("called");
        setDispID(id)
    }
    useEffect(() => {
        if (!id) return
        
        axios.get(`https://jsonplaceholder.typicode.com/posts/${dispID}`)
            .then(res => {
                console.log(res)
                setPosts(res.data)
            }).catch(err => {
                console.log(err);
            })
    }, [dispID])
    // const postList = posts.map(post=> <li key={post.id}>{post.title}</li>)
    return (
        <div>
            {/* <form on> */}
            <input type="text" value={id} onChange={e => setID(e.target.value)} />
            <button onClick={getID}>Enter</button>
            {/* </form> */}

            <ul>
                {posts && <li>{posts.title}</li> || <p>NO DATA</p>

                }
            </ul>
        </div>
    )
}

export default GET_hook
