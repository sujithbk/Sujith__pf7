import React from 'react'
import SuiImg from '../../assets/d4.png'
function Pro3() {
  return (
    <section id="project-section">
    

    <div class="filter">
        <button class="btn filter-btn active"><a id='frame1' href="https://github.com/sujithbk">Hyper chat</a></button>
        
    </div>


    <div className="project-container">
        <div className="project-card">
            <div className="project-wrapper">
                <div className="project-thumbnail">
                    <img src={SuiImg} className="close-btn" alt=""/>
                    <img src={SuiImg}className="project-img" alt=""/>
                    <span className="tags"></span>
                </div>

               
            </div>
        </div>
    </div>
</section>
  )
}

export default Pro3