import React from 'react';
import { FunctionComponent } from "react";
import "./css/AndrTeste.css";

class AndrTeste extends React.Component {
  state = {
      artistas: [],
      albums: [],
      noticias: [],
  };

  componentDidMount() {
     fetch('http://api.music-story.com/en/genre/1/artists')
          .then(res => res.json())
          .then(res => {
              this.setState({
                  artistas: res
               });
          });

      fetch('http://api.music-story.com/en/genre/1/albums')
          .then(res => res.json())
          .then(res => {
              this.setState({
                  albums: res
              });
            });

      
      fetch('http://api.music-story.com/en/genre/1/news')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    news: res
                });
              });

  }

  render() {
      return (
        return (
          <div className="andr-teste-div">
            <div className="fale-conosco-div">
              <div className="background-div" />
              <div className="contact-form-div">
                <div className="right-side-div">
                  <div className="submit-div">
                    <div className="rectangle-div" />
                    <div className="submit-div1">Submit</div>
                  </div>
                  <div className="input-telephone">
                    <div className="rectangle-div1" />
                    <div className="sua-mensagem-div">Sua mensagem</div>
                  </div>
                  <div className="selecione-div">
                    <div className="rectangle-div2" />
                    <img className="polygon-icon" alt="" src="polygon-1.svg" />
                    <div className="selecione-uma-opo">Selecione uma opção</div>
                  </div>
                </div>
                <div className="left-side-div">
                  <div className="input-telephone1">
                    <div className="rectangle-div2" />
                    <div className="seu-email-div">Seu email</div>
                  </div>
                  <div className="input-telephone2">
                    <div className="rectangle-div2" />
                    <div className="seu-telefone-div">Seu telefone</div>
                  </div>
                  <div className="selecione-div">
                    <div className="rectangle-div2" />
                    <div className="seu-nome-div">Seu nome</div>
                  </div>
                </div>
              </div>
              <div className="para-saber-mais-ou-agendar-uma">
                Para saber mais ou agendar uma aula, clique nos links abaixo e entre
                em contato conosco.
              </div>
              <div className="fale-conosco-div1">Fale conosco</div>
            </div>
            <div className="contato-div">
              <div className="background-div1" />
              <div className="contact-buttons-div">
                <div className="contact-3-div">
                  <div className="whatsapp-div" />
                  <div className="text-div">
                    <div className="musicagmailcom-div">musica@gmail.com</div>
                    <img className="icon" alt="" src="icon.svg" />
                  </div>
                </div>
                <div className="contact-2-div">
                  <div className="whatsapp-div" />
                  <div className="text-div1">
                    <div className="ligue-para-ns">Ligue para nós</div>
                    <img className="icon" alt="" src="icon.svg" />
                  </div>
                </div>
                <div className="contact-1-div">
                  <div className="whatsapp-div" />
                  <div className="text-div2">
                    <div className="fale-por-whatsapp">Fale por WhatsApp</div>
                    <img className="icon" alt="" src="icon.svg" />
                  </div>
                </div>
              </div>
              <div className="para-saber-mais-ou-agendar-uma1">
                Para saber mais ou agendar uma aula,
                <span className="clique-nos-links"> clique nos links abaixo</span> e
                entre em contato conosco.
              </div>
              <div className="contatos-div">Contatos</div>
            </div>
            <div className="perguntas-frequentes-div">
              <div className="background-div2" />
              <div className="faqs-div">
                <div className="faq-3-div">
                  <div className="faq-1-div" />
                  <div className="lorem-ipsum-dolor-sit-amet-co">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </div>
                </div>
                <div className="faq-2-div">
                  <div className="faq-1-div" />
                  <div className="lorem-ipsum-dolor-sit-amet-co">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </div>
                </div>
                <div className="faq-1-div2">
                  <div className="faq-1-div" />
                  <div className="lorem-ipsum-dolor-sit-amet-co">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </div>
                </div>
                <div className="faq-0-div">
                  <div className="faq-1-div4" />
                  <div className="lorem-ipsum-dolor-sit-amet-co3">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </div>
                  <div className="sollicitudin-ac-orci-phasellus">
                    sollicitudin ac orci phasellus egestas tellus rutrum tellus
                    pellentesque eu tincidunt tortor aliquam nulla facilisi cras
                    fermentum odio eu feugiat pretium nibh ipsum consequat nisl
                    sollicitudin ac orci phasellus egestas tellus rutrum tellus
                    pellentesque eu tincidunt tortor aliquam nulla facilisi cras
                    fermentum odio eu feugiat pretium nibh ipsum consequat nisl
                  </div>
                  <div className="sollicitudin-ac-orci-phasellus1">
                    sollicitudin ac orci phasellus egestas tellus rutrum tellus
                    pellentesque eu tincidunt tortor aliquam nulla facilisi cras
                    fermentum odio eu feugiat pretium nibh ipsum consequat nisl
                    sollicitudin ac orci phasellus egestas tellus rutrum tellus
                    pellentesque eu tincidunt tortor aliquam nulla facilisi cras
                    fermentum odio eu feugiat pretium nibh ipsum consequat nisl
                  </div>
                  <div className="sollicitudin-ac-orci-phasellus2">
                    sollicitudin ac orci phasellus egestas tellus rutrum tellus
                    pellentesque eu tincidunt tortor aliquam nulla facilisi cras
                    fermentum odio eu feugiat pretium nibh ipsum consequat nisl
                    sollicitudin ac orci phasellus egestas tellus rutrum tellus
                    pellentesque eu tincidunt tortor aliquam nulla facilisi cras
                    fermentum odio eu feugiat pretium nibh ipsum consequat nisl
                  </div>
                </div>
              </div>
              <div className="lorem-ipsum-dolor-sit-amet-con">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, nobis!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, nobis!
              </div>
              <div className="letras-das-msicastraduo">
                Letras das Músicas/Tradução
              </div>
            </div>
            <div className="forma-de-pagamento">
              <div className="background-div3" />
              <div className="forma-de-pagamento1">Discos do Momento</div>
            </div>
            <div className="materiais-div">
              <div className="background-div4" />
              <div className="boxes-div">
                <div className="content-1-div">
                  <div className="box-1-div" />
                  <div className="frame-div">
                    <div className="stay-div">Stay</div>
                  </div>
                  <div className="frame-div1">
                    <div className="bibendum-enim-facilisis-gravid">
                      bibendum enim facilisis gravida neque convallis a cras semper
                      auctor neque vitae
                    </div>
                  </div>
                  <div className="button-div">
                    <div className="inscrever-se-div" />
                    <div className="saiba-mais-div">Saiba mais</div>
                  </div>
                </div>
                <div className="content-2-div">
                  <div className="box-1-div" />
                  <div className="woman-div">Woman</div>
                  <div className="bibendum-enim-facilisis-gravid1">
                    bibendum enim facilisis gravida neque convallis a cras semper
                    auctor neque vitae
                  </div>
                  <div className="button-div">
                    <div className="inscrever-se-div" />
                    <div className="saiba-mais-div">Saiba mais</div>
                  </div>
                </div>
                <div className="content-3-div">
                  <div className="box-1-div" />
                  <div className="woman-div">Shivers</div>
                  <div className="bibendum-enim-facilisis-gravid1">
                    bibendum enim facilisis gravida neque convallis a cras semper
                    auctor neque vitae
                  </div>
                  <div className="button-div">
                    <div className="inscrever-se-div" />
                    <div className="saiba-mais-div">Saiba mais</div>
                  </div>
                </div>
                <div className="content-4-div">
                  <div className="box-1-div" />
                  <div className="woman-div">Todo de Ti</div>
                  <div className="bibendum-enim-facilisis-gravid1">
                    bibendum enim facilisis gravida neque convallis a cras semper
                    auctor neque vitae
                  </div>
                  <div className="button-div">
                    <div className="inscrever-se-div" />
                    <div className="saiba-mais-div">Saiba mais</div>
                  </div>
                </div>
              </div>
              <div className="frame-div2">
                <div className="lorem-ipsum-dolor-sit-amet-con1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
                  nobis! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dicta, nobis!
                </div>
              </div>
              <div className="frame-div3">
                <div className="artistas-renomados-div">Artistas Renomados</div>
              </div>
            </div>
            <div className="sobre-div">
              <div className="background-div5" />
              <div className="text-div3">
                <div className="topic-div">
                  <div className="stay-div">
                    <p className="lorem-ipsum-dolor">
                      Lorem ipsum dolor sit amet consectetur,{" "}
                    </p>
                    <p className="adipisicing-elit-omnis">
                      adipisicing elit. Omnis, vitae?
                    </p>
                  </div>
                </div>
                <div className="topic-div1">
                  <div className="stay-div">
                    <p className="lorem-ipsum-dolor">
                      Lorem ipsum dolor sit amet consectetur,{" "}
                    </p>
                    <p className="adipisicing-elit-omnis">
                      adipisicing elit. Omnis, vitae?
                    </p>
                  </div>
                </div>
                <div className="topic-div2">
                  <div className="stay-div">
                    <p className="lorem-ipsum-dolor">
                      Lorem ipsum dolor sit amet consectetur,{" "}
                    </p>
                    <p className="adipisicing-elit-omnis">
                      adipisicing elit. Omnis, vitae?
                    </p>
                  </div>
                </div>
                <div className="topic-div3">
                  <div className="stay-div">
                    <p className="lorem-ipsum-dolor">
                      Lorem ipsum dolor sit amet consectetur,{" "}
                    </p>
                    <p className="adipisicing-elit-omnis">
                      adipisicing elit. Omnis, vitae?
                    </p>
                  </div>
                </div>
                <div className="frame-div4">
                  <div className="title-div">
                    <p className="lorem-ipsum-dolor">
                      Lorem ipsum dolor sit amet consectetur,{" "}
                    </p>
                    <p className="adipisicing-elit-omnis">
                      adipisicing elit. Omnis, vitae!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-div">
              <div className="main-copy-div">
                <div className="call-to-action">
                  <div className="rectangle-div6" />
                  <div className="call-to-action1">Call to action</div>
                </div>
                <div className="lorem-ipsum-dolor-sit-amet-con6">
                  <p className="lorem-ipsum-dolor">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
                  </p>
                  <p className="lorem-ipsum-dolor">
                    Omnis, vitae? Lorem ipsum dolor sit amet consectetur,{" "}
                  </p>
                  <p className="adipisicing-elit-omnis">
                    adipisicing elit. Omnis, vitae?
                  </p>
                </div>
                <div className="lorem-ipsum-dolor-sit-amet-con7">
                  <p className="lorem-ipsum-dolor">
                    Lorem ipsum dolor sit amet consectetur,{" "}
                  </p>
                  <p className="adipisicing-elit-omnis">
                    adipisicing elit. Omnis, vitae?
                  </p>
                </div>
              </div>
              <img className="image-hero-icon" alt="" src="image-hero@2x.png" />
            </div>
            <div className="header-div">
              <div className="frame-div5">
                <div className="background-div6" />
              </div>
              <div className="linksanchors-div">
                <div className="title-div">Noticias</div>
                <div className="artistas-renomados-div1">Artistas Renomados</div>
                <div className="discos-do-momentos">Discos do Momentos</div>
                <div className="perguntas-frequentes-div1">Perguntas Frequentes</div>
                <div className="title-div">Contatos</div>
                <div className="fale-conosco-div2">Fale Conosco</div>
              </div>
            </div>
            <img className="frame-icon" alt="" src="frame-3.svg" />
            <img className="frame-icon1" alt="" src="frame-4.svg" />
            <img className="frame-icon2" alt="" src="frame-5.svg" />
            <img className="frame-icon3" alt="" src="frame-6.svg" />
            <img className="frame-icon4" alt="" src="frame-7.svg" />
            <img className="logo-ms-dev-2-icon" alt="" src="logo-ms-dev-2@2x.png" />
            <img className="frame-icon5" alt="" src="frame-10.svg" />
            <img className="ellipse-icon" alt="" src="ellipse-33@2x.png" />
            <img className="ellipse-icon1" alt="" src="ellipse-331@2x.png" />
            <img className="ellipse-icon2" alt="" src="ellipse-332@2x.png" />
            <div className="boxes-div1">
              <div className="content-1-div1">
                <div className="box-1-div4" />
                <div className="topics-div">
                {this.state.noticias.map(noticia => (
                       <div className="lorem-ipsum-dolor-sit-amet">
                          {noticia}
                      </div>
                ))}
                </div>
                <div className="button-div4">
                  {this.state.artistas.map(artista => (
                        <div className="lorem-ipsum-dolor-sit-amet">
                          <div className="inscrever-se-div4" />
                          <div className="oua-j-div">Ouça Já</div>
                          {artista}
                        </div>
                  ))}
                  
                </div>
              </div>
            </div>
            <div className="topics-div1">
            {this.state.albums.map(album => (
                       <div className="lorem-ipsum-dolor-sit-amet">
                       Lorem ipsum dolor sit amet.
                     </div>
                          {album}
                        </div>
                  ))}
              <
              <div className="lorem-ipsum-dolor-sit-amet1">
                Lorem ipsum dolor sit amet.
              </div>
              <div className="lorem-ipsum-dolor-sit-amet2">
                Lorem ipsum dolor sit amet.
              </div>
              <div className="lorem-ipsum-dolor-sit-amet3">
                Lorem ipsum dolor sit amet.
              </div>
              <div className="lorem-ipsum-dolor-sit-amet4">
                Lorem ipsum dolor sit amet.
              </div>
            </div>
            <div className="topics-div2">
              <div className="lorem-ipsum-dolor-sit-amet">
                Lorem ipsum dolor sit amet.
              </div>
              <div className="lorem-ipsum-dolor-sit-amet1">
                Lorem ipsum dolor sit amet.
              </div>
              <div className="lorem-ipsum-dolor-sit-amet2">
                Lorem ipsum dolor sit amet.
              </div>
              <div className="lorem-ipsum-dolor-sit-amet3">
                Lorem ipsum dolor sit amet.
              </div>
              <div className="lorem-ipsum-dolor-sit-amet4">
                Lorem ipsum dolor sit amet.
              </div>
            </div>
            <div className="topics-div3">
              <div className="lorem-ipsum-dolor-sit-amet">
                Lorem ipsum dolor sit amet.
              </div>
              <div className="lorem-ipsum-dolor-sit-amet1">
                Lorem ipsum dolor sit amet.
              </div>
              <div className="lorem-ipsum-dolor-sit-amet2">
                Lorem ipsum dolor sit amet.
              </div>
              <div className="lorem-ipsum-dolor-sit-amet3">
                Lorem ipsum dolor sit amet.
              </div>
              <div className="lorem-ipsum-dolor-sit-amet4">
                Lorem ipsum dolor sit amet.
              </div>
            </div>
            <img className="ellipse-icon3" alt="" src="ellipse-333@2x.png" />
            <img className="ellipse-icon4" alt="" src="ellipse-334@2x.png" />
            <img className="ellipse-icon5" alt="" src="ellipse-335@2x.png" />
            <img className="ellipse-icon6" alt="" src="ellipse-336@2x.png" />
          </div>
      );
  }
}

export default AndrTeste;



