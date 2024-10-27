import React from 'react'

export default function Projects() {
  return (
    <div>
        <h2>Projects</h2>
        <div className='projects_container'>
           <div className='projects_child'>
            <h3>Portfolio website</h3>
            <p>It is a simple portfolio website made using HTML,CSS and React.</p>
            <div className='projects_child_button_group'>
              <button className='projects_button'>
                <a href='link'>CODE</a>
              </button>
              <button className='projects_button'>
                <a href='link'>DEMO</a>
              </button>
            </div>
           </div>
           <div className='projects_child'>
              <h3>Traveling websit</h3>
              <p>It is a simple website built using HTML and CSS and Rdbms.</p>
              <div className='projects_child_button_group'>
              <button className='projects_button'>
                <a href=''>CODE</a>
              </button>
              <button className='projects_button'>
                <a href=''>DEMO</a>
              </button>
            </div>
           </div>
        </div>
    </div>
  )
}
