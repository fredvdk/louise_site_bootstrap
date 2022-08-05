import React from 'react'

import { NavLink } from 'react-router-dom'

export default function NavItem(props: {path:string, text:string}) {

//.active class (navbar.css) is automatically joined when item is active
return (
    <div>
      <li>
          <NavLink to={props.path} className={"menu navigation-menu"}>{props.text}</NavLink>
      </li>
    </div>
  )
}


