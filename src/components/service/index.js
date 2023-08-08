import React from 'react';
import styles from './style.module.css';

export default function Service(props) {
  const { banner, bannerMobile, extraMargin, hclass, icns, char, charMobile, charMob, color, charDesk, addSize, addIcon, spaceIcon } = props;
  return (
    <section className={ styles.wrapper }>
      <div className={styles.banner}>
        <img className={ styles.bannerDesk } src={banner} alt="banner" />
        <img src={ bannerMobile } alt="banner" className={ styles.bannerMobile } />
      </div>
      <img className={ `${charDesk} ${styles.bounce} ${ styles.char }` } src={char} alt="char" />
      <img className={ `${charMob} ${styles.bounce}` } src={charMobile} alt="char" />
      <div className={ styles.main }>
        <div className={ `${ styles.content } ${ extraMargin }` }>
          <h1 className={ `${styles.title} ${color}` }>{ props.title }</h1>
          <p className={ `${styles.highlight} ${color} ${hclass}` }>{ props.highlight }</p>
          <p className={ `${styles.description} ${addSize}` }>{ props.description }</p>
          <h1 className={`${styles.servicos} ${color}`}>Conheça os nossos serviços:</h1>
          <div className={ `${styles.icons} ${addIcon}` }>
            { icns.map((icn, index) => {
              return (
                <div key={index} className={ `${styles.icon} ${spaceIcon}` }>
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
