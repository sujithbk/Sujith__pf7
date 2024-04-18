import React from 'react'
import Pro1 from './Pro1'
import Pro2 from './Pro2'
import './protfolio.css'

function Portfolio() {
  return (
    <section className="work section" id='portfolio'>
    <h2 className="section__title">Projects</h2>
    <span className="section__subtitle">-------------------</span>
    <Pro1/>
    <Pro2/>
</section>
  )
}

export default Portfolio