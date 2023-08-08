import React from 'react';
import styles from './style.module.css';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

export default function Footer() {
  return (
    <footer className={ styles.footer }>
      <div className={styles.logo}>
        <fieldset class={styles.fieldsetBorder}>
          <legend class={styles.legendBorder}>Venha Ser</legend>
          <div class={styles.fieldLegend}>
            <p className={ styles.lev }>
              +lev
            </p>
            <p class={styles.gest}>
              +gestão
            </p>
            <p class={styles.dig}>
              +digital
            </p>
            <p class={styles.consul}>
              +consultoria
            </p>
          </div>
        </fieldset>
      </div>
      <div className={styles.texts}>
        <p>
        EDIFÍCIO CANADÁ
        </p>
        <p>
        Endereço: Rua Manoel Nobrega, 111 Conjunto 42 <br />
        Bairro Paraíso - São Paulo/SP
        </p>
        <p>
          Desenvolvido por: @johnoliveiradesing e @coding_tom
        </p>
      </div>
      <div className={styles.whatsapp}>
        <FloatingWhatsApp
          phoneNumber="+5511943431908"
          accountName='lev'
          avatar="https://uploaddeimagens.com.br/images/004/563/618/full/teste1.png?1690931413"
          statusMessage="Respondemos em instantes."
          chatMessage="Olá, como podemos ajudar?"
          placeholder='Digite uma mensagem...'
          allowEsc
          allowClickAway
          notificationDelay={1000}
          className={ styles.wpp }
          notification
          notificationSound
        />
      </div>
    </footer>
  )
}
