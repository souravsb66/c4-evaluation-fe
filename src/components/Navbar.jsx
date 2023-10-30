import React from "react"
import { Link } from "react-router-dom"

export const Navbar = () => {
    return <div>
        <Link to="/">My Posts</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/createPost">Create Post</Link>
    </div>
}
