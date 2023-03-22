import React from 'react'
import AboutUsHeader from '../layouts/AboutUsHeader'
import Footer from '../layouts/Footer'

const AboutUs = () => {
  return (
    <div>
      <AboutUsHeader />
      <div className='main-container mt-5'>
        <h2>Sobre Nosotros</h2>
        <div  className='about-content mt-5 gap-5'>
          <img className='w-100 object-fit-cover' src={require('../assets/images/image-about-us.jpg')} />
          <div>
            <p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit
              libero non sapien porta lacinia non eget justo. Praesent eu imperdiet lacus.
              Donec ac odio nec diam porttitor mollis. Mauris viverra cursus felis sed accumsan.
              Aliquam elementum massa a porttitor lobortis. Duis et metus neque. Morbi eget
              feugiat sem. Cras massa magna, tincidunt maximus porttitor vel, elementum non diam.
              Curabitur tincidunt rhoncus felis sit amet egestas. Duis nisl quam, vehicula sed sagittis sed,
              sagittis vitae quam. Integer feugiat diam risus, non porttitor mi rutrum sit amet.
              Donec id dui a lectus commodo tincidunt a at lectus. Integer ex urna, placerat sit amet 
              placerat vel, pellentesque sed dui. Curabitur ullamcorper iaculis nibh ut luctus. Nullam feugiat, 
              nunc non tincidunt fermentum, nibh ex mattis dolor, et scelerisque mauris est vitae eros. Curabitur 
              eget pulvinar dolor. Nullam feugiat posuere velit ac fermentum. Nunc molestie auctor lectus, eget 
              ullamcorper sapien faucibus faucibus. Sed venenatis nunc eget feugiat sodales. Nulla vel odio erat. 
              Nam tempus tortor quis dictum aliquam. Suspendisse neque urna, mollis eu luctus quis, ultrices non ex. 
              Vestibulum semper massa mauris, egestas volutpat tortor dictum at. Nam vitae leo nisl. Quisque scelerisque 
              vestibulum risus, et finibus neque porta rhoncus.</p>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default AboutUs
