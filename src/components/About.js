import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Typed from 'react-typed';

import {FaLinkedin, FaGithub} from 'react-icons/fa';

const About = () => {


  return (
    <Row style={styles.about} className="flex-column">
			<div style={styles.profileImg}></div>
			<div style={styles.details}>
				<h2 style={styles.title}>Hi, I'm Daniel.<br />
        <span style={styles.span}>
        <Typed
          strings={['I solve problems', 'I solve complex problems', 'I solve your problems.']}
          backSpeed={70}
          typeSpeed={60}
          /></span></h2>
			</div>
			<div><a class="my-button" href="mailto:daniel.cortild@gmail.com">Get In Touch</a></div>

			<div class="text-center mt-4">
				<a href="https://github.com/DanielCortild">
          <FaGithub size="28"/>
        </a>
				<a href="https://www.linkedin.com/in/daniel-cortild-67413a166/">
          <FaLinkedin size="28"/>
        </a>
			</div>

		</Row>
  )
}

var styles = {

  about: {
    marginTop: '10em',
		border: '1px solid #eee',
		backgroundColor: 'white',
		paddingBottom: '1em',
    textAlign: 'center'
  },
  profileImg: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/profile.jpg)`,
    width: '200px',
    height: '200px',
    margin: '0 auto',
    borderRadius: '50%',
    backgroundSize: 'cover',
    marginTop: '-100px',
    marginBottom: '40px'
  },
  details: {
    margin: '0',
    marginTop: '-2em'
  },
  title: {
    color: '#646464',
		fontSize: '3.8em',
		paddingBottom: '1em'
  },
  span: {
    fontWeight: '300',
		fontSize: '.7em',
    color: '#CCC'
  }
}

export default About;
