import React from 'react'
import Pro1 from './Pro1'
import Pro2 from './Pro2'
import Pro3 from './Pro3'
import Por4 from './Por4'
import './protfolio.css'

function Portfolio() {
  return (
    <section className="work section" id='portfolio'>
    <h2 className="section__title">Projects</h2>
    <span className="section__subtitle">-------------------</span>
    <Por4/>
    <Pro3/>
    
    <Pro2/>
    <Pro1/>
</section>
  )
}

export default Portfolio