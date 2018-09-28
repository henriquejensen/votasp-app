import React from 'react';
import './Footer.css';
import logoifsp from '../../img/logo-institutosp.png';
import logoFrontCampinas from '../../img/logo-frontcampinas.png';
import logoMinhaCampinas from '../../img/logo-minhacampinas.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contato email tel">
        <h4 className="bold upper">Fale Conosco</h4>
          <a href="mailto:contato@minhacampinas.org.br">contato@minhacampinas.org.br</a><br />
          <a href="tel:01925152252">(19) 2515-2252</a>
      </div>

      <div className="ajude">
        <h4 className="bold upper">Ajude o projeto</h4>
        <a href={`https://www.paypal-brasil.com.br/doe/doecompaypal?qc=&qn=Minha+&qs=25#minha-campinas`} target="_blank" rel="noopener noreferrer" className="contribua">Contribua!</a>
      </div>
      
      <div className="realizacao">
        <h4 className="bold upper">Realização</h4>
        <a href="http://www.minhacampinas.org.br"><img src={logoMinhaCampinas} alt="Logo Minha Campinas" />
        </a>
        <img src={logoFrontCampinas} alt="Logo Front End Campinas" />
        <a href="https://cmp.ifsp.edu.br/">
          <img src={logoifsp} alt="Logo do IFSP"/>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
