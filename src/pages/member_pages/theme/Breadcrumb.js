import React from 'react'
import { NavLink } from 'react-router-dom'

const Breadcrumb = (props) => {
  return (
    <div class="row breadcrumb-row">
      <div class="col-12 px-4">
        <h2 class="breadcrumb-title"><NavLink to="/dashboard">Dashboard &gt; </NavLink><span>{props.value}</span></h2>
      </div>
    </div>
  )
}

export default Breadcrumb