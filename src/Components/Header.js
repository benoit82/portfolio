import React, { Component } from 'react'
import ParticlesBg from 'particles-bg'
import { TimelineLite } from 'gsap'

import logo from '../images/Logo_BD.png'

class Header extends Component {
  constructor (props) {
    super(props)
    this.myElements = []
  }

  componentDidMount () {
    const tl = new TimelineLite()
    tl.from('.banner-text', {
      y: -400,
      duration: 1,
      opacity: 0
    })
      .from(
        '.social',
        {
          duration: 1,
          delay: 0.3,
          opacity: 0
        },
        '-=0.25'
      )
      .from('.banner-text h3', {
        duration: 1,
        opacity: 0
      })
  }

  render () {
    if (this.props.data) {
      var github = this.props.data.github
      var linkedin = this.props.data.linkedin
      var name = this.props.data.name
      var description = this.props.data.description
    }

    return (
      <header id='home'>
        <ParticlesBg type='thick' bg />
        <nav id='nav-wrap'>
          <a className='mobile-btn' href='#nav-wrap' title='Show navigation'>
            Show navigation
          </a>
          <a className='mobile-btn' href='#home' title='Hide navigation'>
            Hide navigation
          </a>

          <ul id='nav' className='nav'>
            <li className='current'>
              <a className='smoothscroll' href='#home'>
                <img
                  src={logo}
                  alt='logo BD'
                  style={{
                    display: 'inline-block',
                    height: '40px',
                    verticalAlign: 'middle'
                  }}
                />
                Home
              </a>
            </li>
            <li>
              <a className='smoothscroll' href='#about'>
                A propos
              </a>
            </li>
            <li>
              <a className='smoothscroll' href='#portfolio'>
                Portfolio
              </a>
            </li>
            <li>
              <a className='smoothscroll' href='#resume'>
                Parcours
              </a>
            </li>
            {/*             <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li> */}
          </ul>
        </nav>

        <div className='row banner'>
          <div className='banner-text'>
            <div
              className='test'
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <img
                src={logo}
                alt='logo BD'
                style={{ height: '100px', marginRight: '1.5rem' }}
              />
              <h1
                className='responsive-headline'
                ref={el => this.myElements.push(el)}
              >
                {name}
              </h1>
            </div>

            <h3>{description}</h3>
            <hr />
            <ul className='social'>
              <a
                href={linkedin}
                className='button btn linkedin-btn'
                target='_blank'
              >
                <i className='fa fa-linkedin' />
                Linkedin
              </a>
              <a
                href={github}
                className='button btn github-btn'
                target='_blank'
              >
                <i className='fa fa-github' />
                Github
              </a>
            </ul>
          </div>
        </div>

        <p className='scrolldown'>
          <a className='smoothscroll' href='#about'>
            <i className='icon-down-circle' />
          </a>
        </p>
      </header>
    )
  }
}

export default Header
