---
layout: default
title: "Contato"
permalink: /pages/contact/
---

<article class="page-content">
<header class="page-header">
  <h1 class="page-title"
      data-pt="Contato"
      data-en="Contact">Contato</h1>
  <p class="page-subtitle"
     data-pt="Vamos conversar sobre pesquisa, colaborações ou oportunidades."
     data-en="Let's talk about research, collaborations, or opportunities.">
    Vamos conversar sobre pesquisa, colaborações ou oportunidades.
  </p>
</header>

<div class="contact-grid">

  <!-- Info column -->
  <div class="contact-info">
    <h3 data-pt="Onde me encontrar" data-en="Where to find me">
      Onde me encontrar
    </h3>

    <a class="contact-link"
       href="http://lattes.cnpq.br/7858546276170392"
       target="_blank" rel="noopener">
      <i class="fas fa-graduation-cap"></i>
      <div>
        <strong>Lattes CNPq</strong><br>
        <small>7858546276170392</small>
      </div>
    </a>

    <a class="contact-link"
       href="https://orcid.org/0009-0004-4009-3405"
       target="_blank" rel="noopener">
      <i class="ai ai-orcid"></i>
      <div>
        <strong>ORCID</strong><br>
        <small>0009-0004-4009-3405</small>
      </div>
    </a>

    <a class="contact-link"
       href="https://scholar.google.com.br/citations?hl=pt-BR&user=IUR5BAIAAAAJ"
       target="_blank" rel="noopener">
      <i class="ai ai-google-scholar"></i>
      <div>
        <strong>Google Scholar</strong><br>
        <small>george-felipe-fv</small>
      </div>
    </a>

    <a class="contact-link"
       href="https://www.researchgate.net/profile/George-Vieira-2"
       target="_blank" rel="noopener">
      <i class="ai ai-researchgate"></i>
      <div>
        <strong>ResearchGate</strong><br>
        <small>George-Vieira-2</small>
      </div>
    </a>

    <a class="contact-link"
       href="https://github.com/GeorgFFV"
       target="_blank" rel="noopener">
      <i class="fab fa-github"></i>
      <div>
        <strong>GitHub</strong><br>
        <small>github.com/GeorgFFV</small>
      </div>
    </a>

    <a class="contact-link"
       href="https://linkedin.com/in/george-felipe-fv"
       target="_blank" rel="noopener">
      <i class="fab fa-linkedin"></i>
      <div>
        <strong>LinkedIn</strong><br>
        <small>george-felipe-fv</small>
      </div>
    </a>

    <a class="contact-link"
       href="mailto:georgeffv1@gmail.com">
      <i class="fas fa-envelope"></i>
      <div>
        <strong>E-mail</strong><br>
        <small>georgeffv1@gmail.com</small>
      </div>
    </a>
  </div>

  <!-- Formspree form column -->
  <div class="contact-form">
    <h3 data-pt="Envie uma mensagem" data-en="Send a message">
      Envie uma mensagem
    </h3>

    <form action="https://formspree.io/f/maqvlavo"
          method="POST"
          id="contactForm">
      <div class="form-group">
        <label for="name"
               data-pt="Nome" data-en="Name">Nome</label>
        <input type="text" id="name" name="name"
               placeholder="Seu nome completo"
               data-placeholder-pt="Seu nome completo"
               data-placeholder-en="Your full name"
               required>
      </div>

      <div class="form-group">
        <label for="email"
               data-pt="E-mail" data-en="Email">E-mail</label>
        <input type="email" id="email" name="email"
               placeholder="seu@email.com"
               required>
      </div>

      <div class="form-group">
        <label for="message"
               data-pt="Mensagem" data-en="Message">Mensagem</label>
        <textarea id="message" name="message"
                  placeholder="Escreva sua mensagem aqui..."
                  data-placeholder-pt="Escreva sua mensagem aqui..."
                  data-placeholder-en="Write your message here..."
                  required></textarea>
      </div>

      <input type="hidden" name="_subject"
             value="Contato via Portfólio — George Felipe">

      <button type="submit" class="btn btn-primary" style="width:100%">
        <i class="fas fa-paper-plane"></i>
        <span data-pt="Enviar Mensagem" data-en="Send Message">Enviar Mensagem</span>
      </button>
    </form>

    <p id="formSuccess" style="display:none;color:var(--accent);margin-top:1rem;text-align:center">
      <i class="fas fa-check-circle"></i>
      <span data-pt="Mensagem enviada com sucesso!" data-en="Message sent successfully!">
        Mensagem enviada com sucesso!
      </span>
    </p>
  </div>

</div>
</article>

<script>
  if (window.location.search.includes('success')) {
    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('formSuccess').style.display = 'block';
  }

  document.addEventListener('langchange', function (e) {
    document.querySelectorAll('[data-placeholder-pt]').forEach(function (el) {
      var lang = e.detail || localStorage.getItem('gf-lang') || 'pt';
      el.placeholder = lang === 'pt' ? el.dataset.placeholderPt : el.dataset.placeholderEn;
    });
  });
</script>
