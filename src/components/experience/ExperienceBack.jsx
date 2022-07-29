import React from 'react'
import { GiCheckMark } from 'react-icons/gi'

const ExperienceBack = () => {
  return (
    <div className="experience__content">
            <article className='experience__details'>
                <GiCheckMark className='experience__details-icons'/><h4>NodeJs</h4>
            </article>
            <article className='experience__details'>
                <GiCheckMark className='experience__details-icons'/><h4>Express</h4>
            </article>
            <article className='experience__details'>
                <GiCheckMark className='experience__details-icons'/><h4>MongoDB</h4>
            </article>
            <article className='experience__details'>
                <GiCheckMark className='experience__details-icons'/><h4>MySQL</h4>
            </article>
            <article className='experience__details'>
                <GiCheckMark className='experience__details-icons'/><h4>ORM</h4>
            </article>
            <article className='experience__details'>
                <GiCheckMark className='experience__details-icons'/><h4>Sequielize</h4>
            </article>


        </div>
  )
}

export default ExperienceBack