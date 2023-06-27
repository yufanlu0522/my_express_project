import React from 'react'
import WSPGallery from '../Components/gallery/WSPGallery';
import Footer from "../Components/common/footer";

import './styles/other.css';


const Other = () => {

  const accaImage = [
    {
      img: 'other/acca.png'
    }
  ]

  const nationalImage = [
    {
      img: 'other/national.jpg'
    }
  ]

  const soccerImage = [
    {
      img: 'other/soccer1.JPG'
    },
    {
      img: 'other/soccer2.png'
    }
  ]

  const galleryImages = [
    {
      img: 'other/photo1.JPG'
    },
    {
      img: 'other/photo2.JPG'
    },
    {
      img: 'other/photo3.JPG'
    },
    {
      img: 'other/photo4.JPG'
    },
    {
      img: 'other/photo5.JPG'
    },
    {
      img: 'other/photo6.JPG'
    },
    {
      img: 'other/photo7.JPG'
    },
    {
      img: 'other/photo8.JPG'
    },
    {
      img: 'other/photo9.JPG'
    }
  ]

  return (
    <div className="page-content">
      <div className="other-content-wrapper">
        <br />
        <div className="other-title">
          <strong>Association of Chartered Certified Accountants (11 subjects passed out of 13 subjects)</strong>
        </div>
        <br /><br />
        <WSPGallery
          galleryImages={accaImage}
        />
        <br /><br />

        <br />
        <div className="other-title">
          <strong>National Scholarship (Top 1%)</strong>
        </div>
        <br /><br />
        <WSPGallery
          galleryImages={nationalImage}
        />
        <br /><br />

        <br />
        <div className="other-title">
          <strong>I play soccer</strong>
        </div>
        <br /><br />
        <WSPGallery
          galleryImages={soccerImage}
        />
        <br /><br />

        <br />
        <div className="other-title">
          <strong>Amateur Photographer</strong>
        </div>
        <br /><br />
        <WSPGallery
          galleryImages={galleryImages}
        />
        <br /><br />


        <div>- To be continued -</div>

        <div className="page-footer">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Other