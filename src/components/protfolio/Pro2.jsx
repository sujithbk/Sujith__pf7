import React from 'react'
import SuiImg1 from '../../assets/d2.png'


function Pro2() {
  return (
    <section id="project-section">
    

    <div class="filter">
        <button class="btn filter-btn active"><a id='frame1' href=" https://github.com/sujithbk">NFT Market-place</a></button>
        
    </div>


    <div className="project-container">
        <div className="project-card">
            <div className="project-wrapper">
                <div className="project-thumbnail">
                    <img src={SuiImg1} className="close-btn" alt=""/>
                    <img src={SuiImg1}className="project-img" alt=""/>
                
                </div>

            </div>
        </div>
    </div>
</section>
  )
    
}

export default Pro2