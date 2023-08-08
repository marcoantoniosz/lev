import React from 'react';
import Layout from '../../layout';
import styles from './style.module.css';
import topbanner from '../../images/top_banner.png';
import topbannerMobile from '../../images/top_banner_mobile.png';
import Counter from '../../components/counters/';
import ServiceSection from '../../components/service/';
import Customers from '../../components/customers';
import Feedback from '../../components/feedback';
import service1 from '../../images/banner_service_1.png';
import service1Mobile from '../../images/banner_service_1_mobile.png';
import service2 from '../../images/banner_service_2.png';
import service2Mobile from '../../images/banner_service_2_mobile.png';
import service3 from '../../images/banner_service_3.png';
import service3Mobile from '../../images/banner_service_3_mobile.png';
import char1 from '../../images/char_service_1.png';
import char1Mobile from '../../images/char_service_1_mobile.png';
import char2 from '../../images/char_service_2.png';
import char2Mobile from '../../images/char_service_2_mobile.png';
import char3 from '../../images/char_service_3.png';
import char3Mobile from '../../images/char_service_3_mobile.png';
import face from '../../images/face.png';
import insta from '../../images/insta.png';
import linkedin from '../../images/linkedin.png';
import email from '../../images/email.png';
import wpp from '../../images/wpp.png';
import video from '../../images/video.mp4';
import { digital, gestao, consultoria } from '../../utils/data.js';

export default function Home() {
  return (
    <Layout>
      <main className={styles.main}>
      <section className={styles.top}>
        <div className={styles.topBanner}>
          <img className={ styles.topBannerDesk } src={topbanner} alt="top banner" />
          <img className={ styles.topBannerMobile } src={topbannerMobile} alt="top banner" />
        </div>
        <div className={styles.topText}>
          <h2 className={ styles.ubuntuh2 }>
            Somos o <b>grupo lev</b>
          </h2>
          <h2 className={ styles.ubuntuh2 }>
          <b>soluções</b> para deixar
          </h2>
          <h1 className={ styles.animatedText }>
            +lev
          </h1>
          <h2 className={ styles.comfortaah2 }>
            o seu dia a dia
          </h2>
        </div>
      </section>
      <section className={styles.about}>
        <div className={styles.aboutText}>
          <h1 className={ styles.gradientText }>Conheça a lev</h1>
          <p className={ styles.aboutParagraph }>
          O Grupo lev surgiu em 2021 com o intuito de oferecer todos os serviços <br />
          e expertise para as empresas de pequeno e médio porte: descomplicando, <br />
          gerando segurança e grandes resultados a partir de estratégias para seus <br />
          clientes com nossas 3 marcas: lev Consultoria, lev Gestão e lev Marketing.
          <br />
          O que acha de ter acesso às melhores estratégias das maiores empresas <br />
          para o seu negócio?
          </p><p className={ styles.aboutParagraphMobTab }>
          O Grupo lev surgiu em 2021 com o intuito de oferecer todos os serviços
          e expertise para as empresas de pequeno e médio porte: descomplicando,
          gerando segurança e grandes resultados a partir de estratégias para seus
          clientes com nossas 3 marcas: lev Consultoria, lev Gestão e lev Marketing.
          O que acha de ter acesso às melhores estratégias das maiores empresas
          para o seu negócio?
          </p>
        </div>
        <div className={styles.aboutCounter}>
          <Counter end={100} title="milhões movimentados" />
          <Counter end={30} title="empresas satisfeitas" />
          <Counter end={3} title="anos no mercado" />
        </div>
      </section>
      <ServiceSection
        icns={ gestao }
        banner={service1}
        bannerMobile={service1Mobile}
        hasT={true}
        title="Não é porque sua empresa é pequena que não possa  ter  grandes resultados"
        color={ styles.green }
        highlight="Confie na lev para trazer lucro para o seu negócio"
        hclass={ styles.highlight1 }
        description="Focados em pequenas e médias empresas, somos uma companhia especializada em transformar e simplificar o modelo de gestão empresarial dos nossos clientes gerando ótimos resultados de maneira eficiente."
        char={char1}
        charMobile={char1Mobile}
        charDesk={ styles.char1 }
        charMob={styles.char1Mob}
        addIcon={ styles.addIcon1 }
        spaceIcon={ styles.spaceIcon1 }
       />
      <ServiceSection
        icns={ digital }
        banner={service2}
        bannerMobile={service2Mobile}
        title="Confie em nosso processo para trazer mais tranquilidade para o seu negócio"
        color={ styles.purple }
        highlight="Gestão de Redes Sociais e Estratégias de Marketing, tudo + leve, +digital e +moderno."
        hclass={ styles.highlight2 }
        description="Oferecemos a você todo o suporte para a sua marca: desde a formulação do nome e imagem até as estratégias e postagens para redes sociais."
        addSize={ styles.addSize }
        char={char2}
        charMobile={char2Mobile}
        charDesk={ styles.char2 }
        charMob={styles.char2Mob}
        addIcon={ styles.addIcon1 }
        spaceIcon={ styles.spaceIcon1 }
      />
      <ServiceSection
        icns={ consultoria }
        banner={service3}
        bannerMobile={service3Mobile}
        extraMargin={ styles.extraM }
        color={ styles.blue }
        description="Converse conosco e descubra onde você está errando com sua empresa"
        addSize={ styles.addSize2 }
        char={char3}
        charMobile={char3Mobile}
        charDesk={ styles.char3 }
        charMob={styles.char3Mob}
        addIcon={ styles.addIcon2 }
        spaceIcon={ styles.spaceIcon2 }
      />
      <section className={styles.feedbacks}>
        <h1 className={ styles.fTitle }>
          Conheça alguns de nossos clientes:
        </h1>
        <Customers />
        <h1 id={ styles.feedback } className={ styles.fTitle2 }>
          Feedback:
        </h1>
        <Feedback />
      </section>
      <section className={styles.history}>
        <h1 className={styles.gradientText}>
          lev: Um nome com história
        </h1>
        <video controls className={styles.video}>
          <source src={video} type="video/mp4" />
        </video>
        <p>
        Você deve estar se perguntando o porquê deste nome.
        </p>
        <p>
        Esta referência é de uma mulher de garra, vontade, determinação, força < br/> e, principalmente, cuidado. Esta é a Vó Levina, a grande inspiração para <br /> o nome da empresa.
        </p>
        <p>
        Todo zelo e ensinamento adquiridos seguem enraizados nos pilares da lev. Cuidaremos do seu negócio com o carinho e dedicação que apenas uma vó tem com seus netos.
        </p>
        <p>
        Vem com a lev!
        </p>
      </section>
      <section className={styles.contact}>
        <h1>
          Fale conosco
        </h1>
        <div className={ styles.icons }>
          <img src={face} alt="facebook" />
          <img src={ insta } alt="instagram" />
          <img src={email} alt="email" />
          <img src={linkedin} alt="linkedin" />
          <img src={wpp} alt="whatsapp" />
        </div>
      </section>
      
    </main>
    </Layout>
  )
}
