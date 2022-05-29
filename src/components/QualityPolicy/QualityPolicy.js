import React from 'react';
import qualityPic from '../../Images/Img/tools-quality-1.png'

const QualityPolicy = () => {
    return (
        <div className="hero lg:py-6">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={qualityPic} style={{backgroundColor: 'orange'}} className="max-w-sm rounded-lg shadow-2xl lg:w-64" alt='qualityPic' />
    <div>
      <h1 className="text-5xl font-bold lg:px-6">Quality Policy</h1>
      <p className="lg:px-6">We have in house production facility and maintain stringent International Standards for Quality, Safety and Accuracy.. All products are evaluated and tested under extreme engineering conditions to meet customer requirements. As a world-class Tool Manufacturing Company, it has been an esteemed participant at all leading fairs and Tools Industry meets of the world. Close contacts with customers and personal visits by experts add more to the customer experience. Exclusive global presence and international exposure make Ozar the true frontruner in adopting the latest technology trends being evolved worldwide. We have our eyes set on being recognized as the Innovator and thought leader of Tools related products and technologies in domestic and global markets.</p>
    </div>
  </div>
</div>
    );
};

export default QualityPolicy;