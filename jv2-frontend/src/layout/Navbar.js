import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>

            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <div class="container-fluid">
                    <Link className="btn btn-primary btn-lg" to="http://localhost:3000">JV2</Link>
                    <Link className="btn btn-light" to="/addpost">New Post</Link>
                </div>
            </nav>

        </div>
    )
}