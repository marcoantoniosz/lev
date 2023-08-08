import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import styles from './style.module.css';
import 'react-alice-carousel/lib/alice-carousel.css';
import a1 from '../../images/a1.webp';
import a2 from '../../images/a2.webp';
import a3 from '../../images/a3.webp';
import a4 from '../../images/a4.webp';
import a5 from '../../images/a5.webp';
import a6 from '../../images/a6.webp';
import a7 from '../../images/a7.webp';
import a8 from '../../images/a8.webp';
import a9 from '../../images/a9.webp';
import a10 from '../../images/a10.webp';
import a11 from '../../images/a11.webp';
import a12 from '../../images/a12.webp';
import a13 from '../../images/a13.webp';
import a14 from '../../images/a14.webp';
import a15 from '../../images/a15.webp';
import a16 from '../../images/a16.webp';
import a17 from '../../images/a17.webp';
import a18 from '../../images/a18.webp';
import a19 from '../../images/a19.webp';

export default function Customers() {
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <img className={ styles.img } key={0} src={a1} alt="a1" onDragStart={handleDragStart} />,
    <img className={ styles.img } key={1} src={a2} alt="a2" onDragStart={handleDragStart} />,
    <img className={ styles.img } key={2} src={a3} alt="a3" onDragStart={handleDragStart} />,
    <img className={ styles.img } key={3} src={a4} alt="a4" onDragStart={handleDragStart} />,
    <img className={ styles.img } key={4} src={a5} alt="a5" onDragStart={handleDragStart} />,
    <img className={ styles.img } key={5} src={a6} alt="a6" onDragStart={handleDragStart} />,
    <img className={ styles.img } key={6} src={a7} alt="a7" onDragStart={handleDragStart} />,
    <img className={ styles.img } key={7} src={a8} alt="a8" onDragStart={handleDragStart} />,
    <img className={ styles.img } key={8} src={a9} alt="a9" onDragStart={handleDragStart} />,
    <img className={ styles.img } key={9} src={a10} alt="a10" onDragStart={handleDragStart} />,
    <img className={ styles.img } key={10} src={a11} alt="a11" onDragStart={handleDragStart} />,
    <img className={ styles.img } key={11} src={a12} alt="a12" onDragStart={handleDragStart} />,
    <img className={ styles.img } key={12} src={a13} alt="a13" onDragStart={handleDragStart} />,
    <img className={ styles.img } key={13} src={a14} alt="a14" onDragStart={handleDragStart} />,
    <img className={ styles.img } key={14} src={a15} alt="a15" onDragStart={handleDragStart} />,
    <img className={ styles.img } key={15} src={a16} alt="a16" onDragStart={handleDragStart} />,
    <img className={ styles.img } key={16} src={a17} alt="a17" onDragStart={handleDragStart} />,
    <img className={ styles.img } key={17} src={a18} alt="a18" onDragStart={handleDragStart} />,
    <img className={ styles.img } key={18} src={a19} alt="a19" onDragStart={handleDragStart} />,
  ];

  const responsive = {
    320: { 
      items: 2,
      itemsFit: 'contain', 
    },
    375: { 
      items: 2,
      itemsFit: 'contain', 
    },
    568: { items: 4 },
    1024: { items: 4 },
  };

  return (
    <div className={ styles.carrousel }>
      <AliceCarousel
        mouseTracking
        items={items}
        autoPlay
        autoPlayInterval={2000}
        infinite
        disableButtonsControls
        disableDotsControls
        responsive={responsive}
        paddingLeft={20}
        paddingRight={20}
        
      />
    </div>
  )
}
