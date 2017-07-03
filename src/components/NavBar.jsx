import React from 'react'
import { NavLink } from 'react-router-dom'

const activeClassName = { activeClassName: 'is-active' }

export default () => <nav className="nav">
    <div className="nav-right">
        <NavLink exact to="/" className="nav-item is-tab" {...activeClassName }>Home</NavLink>
        <NavLink to="/about" className="nav-item is-tab" {...activeClassName }>About</NavLink>
        <NavLink exact to="/customers" className="nav-item is-tab" {...activeClassName }>Customers</NavLink>
        <NavLink to="/redux-form" className="nav-item is-tab" {...activeClassName }>Redux Form</NavLink>
    </div>
</nav>
