import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <div class="scroll-up-btn">
        <ion-icon name="arrow-up-circle-outline"></ion-icon>
      </div>



      <nav id="navbar" class="navbar navbar-expand-lg fixed-top">
        <div class="container">
          <div class="logo"><a href="#">Fábrica de <span> Softwares</span></a></div>
          <div class="menu-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <ion-icon name="menu-outline">
            </ion-icon>
          </div>
          <div class="navbar-collapse collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <a class="nav-link" href="#home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#sobre">Sobre</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#conhecimentos">Habilidades</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#projetos">Projetos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#equipe">Equipe</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">Contato</a>
              </li>
            </ul>
            <ul class="navbar-nav flex-row">
              <li class="nav-item">
                <a class="social-icon" href="#">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </li>
              <li class="nav-item">
                <a class="social-icon" href="https://github.com/">
                  <ion-icon name="logo-github"></ion-icon>
                </a>
              </li>
              <li class="nav-item">
                <a class="social-icon" href="https://www.instagram.com/github/">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>



      <section id="hero" class="min-vh-100 d-flex align-items-center text-center">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h1 data-aos="fade-left" class="text-uppercase text-white fw-semibold display-1">Bem-vindo a
                <span>Fábrica de Software</span>
              </h1>
              <h5 class="text-white mt-3 mb-4" data-aos="fade-right">Nós trabalhamos com <span
                class="typing"></span></h5>
              <div data-aos="fade-right">
                <a href="">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
                <a href="">
                  <ion-icon name="logo-github"></ion-icon>
                </a>
                <a href="">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section class="about" id="sobre">
        <div class="container">
          <div class="section-title" data-aos="fade-down">
            <h3 class="text-center fw-bold main-title">Sobre nós</h3>
            <p class="text-center fw-bold ms-4 ps-3 sub-title">Especializada em projetos</p>
          </div>
          <div class="row">
            <div class="about-content" data-aos="fade-down">
              <div class="column left">
                <img src="./src/assets/img/Icons/icone1.png" alt=""></img>
              </div>
              <div class="column right">
                <div class="text">Olá, somos a <span class="typing-2"></span></div>
                <p>Este site foi desenvolvido com o intúito de mostrar nossos trabalhos e para que fiquem por
                  dentro do que estamos trabalhos e qual é a nossa equipe na linha de frente dos projetos
                  feitos. Caso tenha alguma proposta ou ideia para nós desenvolvermos use esse botão logo
                  abaixo, nele você será direcionado para entrar em contato conosco.</p>
                <a href="#">Sugestões e ideias</a>
              </div>
            </div>
            <div class="row mt-5 text-center exp" data-aos="fade-up">
              <div class="col-6 col-lg-3">
                <div class="d-flex justify-content-center">
                  <h4 class="fw-boldu exp-number" data-val="6">0</h4>
                  <h5 class="mt-4 ps-1">+</h5>
                </div>
                <p>Partcipantes</p>
              </div>
              <div class="col-6 col-lg-3">
                <div class="d-flex justify-content-center">
                  <h4 class="fw-boldu exp-number" data-val="3">0</h4>
                  <h5 class="mt-4 ps-1">+</h5>
                </div>
                <p>Projetos</p>
              </div>
              <div class="col-6 col-lg-3">
                <div class="d-flex justify-content-center">
                  <h4 class="fw-boldu exp-number" data-val="3">0</h4>
                  <h5 class="mt-4 ps-1">+</h5>
                </div>
                <p>Pedidos</p>
              </div>
              <div class="col-6 col-lg-3">
                <div class="d-flex justify-content-center">
                  <h4 class="fw-boldu exp-number" data-val="100">0</h4>
                  <h5 class="mt-4 ps-1">%</h5>
                </div>
                <p>Experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section id="conhecimentos" class="full-height">
        <div class="container">
          <div class="section-title" data-aos="fade-down">
            <h3 class="text-center fw-bold main-title">Nossas habilidades</h3>
            <p class="text-center fw-bold ms-1 ps-3 sub-title">Identifica alguma delas?</p>
          </div>
          <div class="grid three-col-grid">

            <div data-aos="fade-up" data-aos-delay="100">
              <div class="card card-padding">
                <div class="icon"><ion-icon name="logo-html5"></ion-icon></div>
                <h4 class="heading-3">HTML5</h4>
                <p>Inserir um texto.</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <div class="card card-padding">
                <div class="icon"><ion-icon name="logo-css3"></ion-icon></div>
                <h4 class="heading-3">CSS</h4>
                <p>Inserir um texto.</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <div class="card card-padding">
                <div class="icon"><ion-icon name="logo-javascript"></ion-icon></div>
                <h4 class="heading-3">Java Script</h4>
                <p>Inserir um texto.</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <div class="card card-padding">
                <div class="icon"><ion-icon name="logo-react"></ion-icon></div>
                <h4 class="heading-3">React</h4>
                <p>Inserir um texto.</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="500">
              <div class="card card-padding">
                <div class="icon"><ion-icon name="logo-python"></ion-icon></div>
                <h4 class="heading-3">Python</h4>
                <p>Inserir um texto.</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="600">
              <div class="card card-padding">
                <div class="icon"><ion-icon name="logo-nodejs"></ion-icon></div>
                <h4 class="heading-3">NodeJs</h4>
                <p>Inserir um texto.</p>
              </div>
            </div>

          </div>
        </div>
      </section>



      <section class="skills" id="projetos">
        <div class="container">
          <div class="section-title">
            <h3 class="text-center fw-bold main-title">Projetos</h3>
            <p class="text-center fw-bold ms-4 ps-3 sub-title">Realizados e em andamentos</p>
          </div>
          <div class="row">
            <div class="skills-content">
              <div class="column left">
                <div class="text">Quais foram e quais são nossos projetos</div>
                <p>Aqui está algumas informações importantes sobre o que já fisemos, nossos projetoss em
                  andamento, horas já realizadas, estudos já feitos e ideias propostas já feitas!</p>
                <a href="#">Mais informações</a>
              </div>
              <div class="column right">
                <div class="bars">
                  <div class="info">
                    <span>Projetos realizados</span>
                    <span>0%</span>
                  </div>
                  <div class="line html"></div>
                </div>
                <div class="bars">
                  <div class="info">
                    <span>Projetos em andamento</span>
                    <span>70%</span>
                  </div>
                  <div class="line css"></div>
                </div>
                <div class="bars">
                  <div class="info">
                    <span>Horas já cumpridas</span>
                    <span>100%</span>
                  </div>
                  <div class="line js"></div>
                </div>
                <div class="bars">
                  <div class="info">
                    <span>Estudos já feitos</span>
                    <span>47%</span>
                  </div>
                  <div class="line php"></div>
                </div>
                <div class="bars">
                  <div class="info">
                    <span>Ideias realizadas</span>
                    <span>0%</span>
                  </div>
                  <div class="line mysql"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>






      <section id="projects">
    <div class="container">
      <div class="section-title" data-aos="fade-down">
        <h3 class="text-center fw-bold main-title">Nossos projetos</h3>
        <p class="text-center fw-bold ms-4 ps-3 sub-title">Especializada em projetos</p>
      </div>
      <div class="all-items">
        <div class="item">
          <div class="left">
            <div class="img">
              <img src="./src/assets/img/background/img_1.jpg" alt=""></img>
            </div>
          </div>
          <div data-aos="fade-up" class="right">
            <h2 class="project-title">Projeto 1</h2>
            <h3 class="project-sub-title">Site apresentação da Fab.</h3>
            <p class="project-desc">I made this application for a USA customer. This application is truly Amazing. Here
              you can chat with your friend
              constantly inside a secure environment and there will be no information reserved after the end of the
              session.</p>
            <div class="buttons">
              <a href="#" class="primary-btn">Saiba mais</a>
              <a href="#" class="primary-btn outline external-link"> <span>Veja</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="item">
          <div class="left">
            <div class="img">
              <img src="./src/assets/img/background/img_1.jpg" alt=""></img>
            </div>
          </div>
          <div data-aos="fade-up" class="right">
            <h2 class="project-title">Projeto 2</h2>
            <h3 class="project-sub-title">Nome a ser definido.
            </h3>
            <p class="project-desc">Hotel zaman is one of the famous hotel in Chittagong. We created their website. The
              client wanted a clean and smooth
              design which I was able to provide at the end of the project.</p>
            <div class="buttons">
              <a href="#" class="primary-btn">Saiba mais</a>
              <a href="#" class="primary-btn outline external-link"> <span>Veja</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="item">
          <div class="left">
            <div class="img">
              <img src="./src/assets/img/background/img_1.jpg" alt=""></img>
            </div>
          </div>
          <div data-aos="fade-up" class="right">
            <h2 class="project-title">Projeto 3</h2>
            <h3 class="project-sub-title">Nome a ser definido</h3>
            <p class="project-desc">Piranz is one of the famous music composer in UAE. The challenge was to keep the
              music environment in the web. It was
              hard but in the end
              we provided a good quality website that satisfied the client.</p>
            <div class="buttons">
              <a href="#" class="primary-btn">Saiba mais</a>
              <a href="#" class="primary-btn outline external-link"> <span>Veja</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>







      <section class="teams" id="equipe">
        <div class="container">
          <div class="section-title" data-aos="fade-down">
            <h3 class="text-center fw-bold main-title">Nossa equipe</h3>
            <p class="text-center fw-bold ms-4 ps-3 sub-title">Especializada em projetos</p>
          </div>
          <div class="row">
            <div class="carousel owl-carousel">
              <div class="card">
                <div class="box">
                  <img src="./src/assets/img/equipe/prof_claudio.png" alt=""></img>
                  <div class="text">Prof. Cláudio Ulisse</div>
                  <p>Coordenado da Fábrica de Softwares.</p>
                  <ul class="links">
                    <li>
                      <a href="">
                        <ion-icon name="logo-linkedin"></ion-icon>
                      </a>
                      <a href="">
                        <ion-icon name="logo-instagram"></ion-icon>
                      </a>
                      <a href="">
                        <ion-icon name="logo-github"></ion-icon>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="card">
                <div class="box">
                  <img src="./src/assets/img/equipe/eu.jpg" alt=""></img>
                  <div class="text">Vínicius Raniery Pereira</div>
                  <p>Aluno de Informática do 3º Ano "A".</p>
                  <ul class="links">
                    <li>
                      <a href="">
                        <ion-icon name="logo-linkedin"></ion-icon>
                      </a>
                      <a href="https://www.instagram.com/vini_raniery/?next=%2F">
                        <ion-icon name="logo-instagram"></ion-icon>
                      </a>
                      <a href="https://github.com/V1niciusR">
                        <ion-icon name="logo-github"></ion-icon>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="card">
                <div class="box">
                  <img src="./src/assets/img/equipe/adiel.jpg" alt=""></img>
                  <div class="text">Adiel Trani Pacheco Gomes</div>
                  <p>aluno de Informática do 3º ano "A".</p>
                  <ul class="links">
                    <li>
                      <a href="https://www.linkedin.com/in/adiel-trani-255b3b1b8/">
                        <ion-icon name="logo-linkedin"></ion-icon>
                      </a>
                      <a href="https://www.instagram.com/adiel_trani/">
                        <ion-icon name="logo-instagram"></ion-icon>
                      </a>
                      <a href="https://github.com/adiexx">
                        <ion-icon name="logo-github"></ion-icon>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="card">
                <div class="box">
                  <img src="#" alt=""></img>
                  <div class="text">...</div>
                  <p>...</p>
                </div>
              </div>
              <div class="card">
                <div class="box">
                  <img src="#" alt=""></img>
                  <div class="text">...</div>
                  <p>...</p>
                </div>
              </div>
              <div class="card">
                <div class="box">
                  <img src="#" alt=""></img>
                  <div class="text">...</div>
                  <p>...</p>
                </div>
              </div>
              <div class="card">
                <div class="box">
                  <img src="#" alt=""></img>
                  <div class="text">...</div>
                  <p>...</p>
                </div>
              </div>
              <div class="card">
                <div class="box">
                  <img src="#" alt=""></img>
                  <div class="text">...</div>
                  <p>...</p>
                </div>
              </div>
              <div class="card">
                <div class="box">
                  <img src="#" alt=""></img>
                  <div class="text">...</div>
                  <p>...</p>
                </div>
              </div>
              <div class="card">
                <div class="box">
                  <img src="#" alt=""></img>
                  <div class="text">...</div>
                  <p>...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      <section id="contact">
        <div class="container">
          <div class="section-title" data-aos="fade-down">
            <h3 class="text-center fw-bold main-title">Contato</h3>
            <p class="text-center fw-bold ms-4 ps-3 sub-title">Entre em contato</p>
          </div>
          <div class="row gx-5" data-aos="fade-up">
            <div class="col-lg-6 text-center">
              <div class="contact-bg d-flex flex-column justify-content-center rounded-2">
                <h5 class="py-3">Entre em contato conosco na caixa ao lado</h5>
                <div class="contact-info d-flex flex-column gap-2 text-center">
                  <a href="tel: +8437648" class="text-white"><i class="bi bi-telephone-fill me-3"></i>5814 984
                    9814</a>
                  <a href="mailto:email@mail.com" class="text-white"><i
                    class="bi bi-envelope-fill me-3"></i>mail@mail.com</a>
                  <a href="#" class="text-white"><i class="bi bi-geo-alt-fill me-3"></i>Campos Belos - GO</a>
                </div>
              </div>
            </div>
            <div class="col-lg-6 mt-4">
              <form>
                <div class="mb-3">
                  <input type="text" class="form-control" id="Name" placeholder="Digite seu nome e sobrenome"></input>
                </div>
                <div class="mb-3">
                  <input type="email" class="form-control" id="email" placeholder="Seu email pessoal ou de trabalho"></input>
                </div>
                <div class="mb-3">
                  <input type="text" class="form-control" id="subject" placeholder="Proposta"></input>
                </div>
                <div class="mb-3">
                  <textarea class="form-control" placeholder="Fale mais sobre sua proposta"
                    id="floatingTextarea" rows="8"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </section>



      <footer class="mt-5 py-5">
        <div class="container">
          <div class="footer-logo text-center">
            <img src="#" class="img-fluid"></img>
          </div>
          <div class="footer-social d-flex justify-content-center gap-3 text-center mt-3">
            <a href="https://www.github.com/" class="text-white"><i class="bi bi-github"></i></a>
            <a href="https://www.instagram.com/" class="text-white"><i class="bi bi-instagram"></i></a>
            <a href="https://www.linkedin.com/" class="text-white"><i class="bi bi-linkedin"></i></a>
            <a href="https://www.youtube.com/" class="text-white"><i class="bi bi-youtube"></i></a>
          </div>
          <div class="footer-copyright text-center mt-3 mt-lg-2">
            <p>Copyright 2023 Mert | Feito por Vinícius Raniery</p>
          </div>
        </div>
      </footer>



    </div>
  )
}

export default App
