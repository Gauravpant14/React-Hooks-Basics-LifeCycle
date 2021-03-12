// import React, {useState, useEffect} from 'react'

const Api = ({data}) => {
    // const [posts, setPost] = useState([])
    // useEffect(() => {
    //     fetch('http://localhost:8080/users')
    //     .then(response => response.json())
    //     .then(json => setPost(json))
    // },[posts])
    return (
        <div>
            <ul>
                {
                    data.map(post => <li key={post._id}> <b>Name :</b> {post.name} <b> Email :</b> {post.email}</li>)
                }
            </ul>
        </div>
    )
}

export default Api
