import React from 'react'
import './experience.css'
import ExperienceBack from './ExperienceBack'
import ExperienceFront from './ExperienceFront'


function Experiencie() {
  return (
    <section id="experience">
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <ExperienceFront/>

        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
            <ExperienceBack/>
        </div>
</div>
    </section>
  )
}

export default Experiencie