import React from 'react'
import { useSelector } from 'react-redux'

function Profile() {
    const user = useSelector((state) => state.user)
    const theme = useSelector((state) => state.theme)

    return (
        <div style={{ color: theme }}>
            <h1>Profile</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
        </div>
    )
}

export default Profile