import React from 'react'
import NavAppBar from '../../molecules/navAppBar/navAppBar'
import NavDrawer from '../../molecules/navDrawer/navDrawer'

import './navBar.scss'

export default function NavBar(props) {
    return(
        <div>
            <NavAppBar toggler={props.toggler} open={props.open}/>
            <NavDrawer toggler={props.toggler} open={props.open}/>
        </div>
    )
}