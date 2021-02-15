import React, { Component } from 'react'
import bdResume from '../pdf/CV_2021-02-15_Benoit_Dubus.pdf'

class About extends Component {
  render () {
    if (this.props.data) {
      var name = this.props.data.name
      var profilepic = 'images/' + this.props.data.image
      var bio = this.props.data.bio
      var city = this.props.data.address.city
      var zip = this.props.data.address.zip
      var phone = this.props.data.phone
      var email = this.props.data.email
      var resumeDownload = bdResume
    }

    return (
      <section id='about'>
        <div className='row'>
          <div className='three columns'>
            <img
              className='profile-pic'
              src={profilepic}
              alt='Benoit Dubus Profile Pic'
            />
          </div>
          <div className='nine columns main-col'>
            <h2>A mon propos</h2>

            <p>{bio}</p>
            <div className='row'>
              <div className='columns contact-details'>
                <h2>Pour me contacter</h2>
                <p className='address'>
                  <span>{name}</span>
                  <br />
                  <span>
                    {zip} {city}
                  </span>
                  <br />
                  <span>{phone}</span>
                  <br />
                  <span>{email}</span>
                </p>
              </div>
              <div className='columns download'>
                <p>
                  <a href={resumeDownload} className='button' target='_blanck'>
                    <i className='fa fa-download' />
                    Télécharger mon CV
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About
