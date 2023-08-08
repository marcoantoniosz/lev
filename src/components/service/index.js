import React from 'react';
import styles from './style.module.css';
import { useInView } from 'react-intersection-observer';


export default function Service(props) {

  const { ref: bc, inView } = useInView();

  const { ref: bc2, inView: inView2 } = useInView();

  const { ref: bc3, inView: inView3 } = useInView();


  const { banner, bannerMobile, extraMargin, hclass, icns, char, charMobile, charMob, color, charDesk, addSize, addIcon, spaceIcon } = props;
  return (
    <section className={ styles.wrapper }>
      <div className={styles.banner}>
        <img className={ styles.bannerDesk } src={banner} alt="banner" />
        <img src={ bannerMobile } alt="banner" className={ styles.bannerMobile } />
      </div>
      <img ref={bc} className={ `${charDesk} ${inView ? styles.bounce : ''} ${ styles.char }` } src={char} alt="char" />
      <img ref={bc2} className={ `${charMob} ${inView2 ? styles.bounce : ''}` } src={charMobile} alt="char" />
      <div className={ styles.main }>
        <div className={ `${ styles.content } ${ extraMargin }` }>
          <h1 className={ `${styles.title} ${color}` }>{ props.title }</h1>
          <p className={ `${styles.highlight} ${color} ${hclass}` }>{ props.highlight }</p>
          <p className={ `${styles.description} ${addSize}` }>{ props.description }</p>
          <h1 className={`${styles.servicos} ${color}`}>Conheça os nossos serviços:</h1>
          <div className={ `${styles.icons} ${addIcon}` }>
            { icns.map((icn, index) => {
              return (
                <div ref={bc3} key={index} className={ `${styles.icon} ${ inView3 ? styles.bcin : '' } ${spaceIcon}` }>
                  <img src={icn.src} alt={icn.title} />
                  <p className={ color }>{icn.title}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
