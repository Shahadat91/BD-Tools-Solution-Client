import React from 'react';
import mission from '../../Images/Img/mission.png';

const Mission = () => {
    return (
        <div class="hero lg:py-6">
  <div class="hero-content flex-col lg:flex-row">
    <img src={mission} style={{backgroundColor: 'orange'}} class="max-w-sm m-0 rounded-lg shadow-2xl lg:w-64" alt='mission'/>
    <div>
      <h1 class="text-5xl font-bold lg:px-6">Our Mission</h1>
      <p class="lg:px-6">Our mission is to be the leading manufacturer of tools across a broad spectrum of market sectors, growing our business by offering industry leading quality, design innovation and value for money with unprecedented customer service. The Packaging of each category is unique; the attractive multi-colour designs conform to international standards – including bar-coding for customer convenience. Ozar is available at various leading Industrial Tool Distributors, located in all continents. We are increasing our footprints in domestic India market at a war footing pace. We stock the tools inventory for fast and timely delivery.</p>
      
    </div>
  </div>
</div>
    );
};

export default Mission;