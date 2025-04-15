import React from 'react'
import './header.css'

const Header = () => {

    const linkItems = [
        {
            to: "/home",
            itemName: "Home"
        },
        {
            to: "/projects",
            itemName: "Projects"
        },
        {
            to: "/aboutus",
            itemName: "About Us"
        },
        {
            to: "/contact",
            itemName: "Contact"
        },
    ]

  return (
    <header>
      <div>
        <h1>NSF B7</h1>
      </div>


        <ul>
           {linkItems.map((i, index) => {
            return (
                <li>{i.itemName}</li>
            )
           })}
        </ul>
    </header>
  )
}

export default Header
