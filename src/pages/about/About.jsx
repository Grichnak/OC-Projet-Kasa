import React from 'react';
import imgBannerAbout from "../../assets/banner-montagnes.png";
import Banner from '../../components/banner/Banner';
import './about.scss';
import Collapse from "../../components/collapse/Collapse.jsx";
import { collapseData } from '../../data/collapseData';

export function AboutPage() {
  return (
    <div className="about">
      <Banner image={imgBannerAbout} imageClassName="about-banner-image" banner="about-banner" imageAlt="paysage montagne" />
      <section className='container-collapses'>
        {collapseData.map((data) =>
          <Collapse key={data.id} title={data.title} content={data.description} />
        )}
      </section>
    </div>
  )
}

