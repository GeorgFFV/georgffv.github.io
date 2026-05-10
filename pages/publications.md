---
layout: default
title: "Publicações"
permalink: /pages/publications/
---

<article class="page-content">
<header class="page-header">
  <h1 class="page-title"
      data-pt="Publicações"
      data-en="Publications">Publicações</h1>
  <p class="page-subtitle"
     data-pt="Produção bibliográfica completa em ordem cronológica inversa, baseada no Currículo Lattes."
     data-en="Complete bibliographic production in reverse chronological order, based on the Lattes CV.">
    Produção bibliográfica completa em ordem cronológica inversa, baseada no Currículo Lattes.
  </p>
</header>

<!-- ── ANAIS DE CONGRESSOS ──────────────────────────────────────────────── -->
<section class="pub-category">
  <h2 class="pub-category-title">
    <i class="fas fa-chalkboard-teacher"></i>
    <span data-pt="Anais de Congressos" data-en="Conference Papers">Anais de Congressos</span>
  </h2>

  <div class="pub-list">
    {% assign conferences = site.data.publications.conferences | sort: "year" | reverse %}
    {% for pub in conferences %}
    <div class="pub-item">
      <span class="pub-year">{{ pub.year }}</span>
      <h3 class="pub-title"
          data-pt="{{ pub.title }}"
          data-en="{{ pub.title_en }}">{{ pub.title }}</h3>
      <p class="pub-authors">{{ pub.authors }}</p>
      <p class="pub-venue">
        {{ pub.venue }}{% if pub.location %} — {{ pub.location }}{% endif %}
        {% if pub.publisher %} · {{ pub.publisher }}{% endif %}
        {% if pub.pages %} · p. {{ pub.pages }}{% endif %}
      </p>
      <div class="pub-abstract">
        <details>
          <summary data-pt="Ver resumo" data-en="Show abstract">Ver resumo</summary>
          <div class="abstract-body">
            <p data-pt="{{ pub.abstract_pt }}"
               data-en="{{ pub.abstract_en }}">{{ pub.abstract_pt }}</p>
          </div>
        </details>
      </div>
      <div class="pub-footer">
        <div class="tags">
          {% for tag in pub.tags %}<span class="tag">{{ tag }}</span>{% endfor %}
        </div>
        <div class="pub-actions">
          {% if pub.doi_url and pub.doi_url != "" %}
          <a class="pub-btn" href="{{ pub.doi_url }}" target="_blank" rel="noopener">
            <i class="fas fa-external-link-alt"></i>
            <span data-pt="Artigo" data-en="Article">Artigo</span>
          </a>
          {% endif %}
          {% if pub.github_url and pub.github_url != "" %}
          <a class="pub-btn pub-btn--gh" href="{{ pub.github_url }}" target="_blank" rel="noopener">
            <i class="fab fa-github"></i>
            <span data-pt="Repositório" data-en="Repository">Repositório</span>
          </a>
          {% endif %}
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
</section>

<!-- ── ARTIGOS EM PERIÓDICOS ─────────────────────────────────────────────── -->
<section class="pub-category">
  <h2 class="pub-category-title">
    <i class="fas fa-newspaper"></i>
    <span data-pt="Artigos em Periódicos" data-en="Journal Articles">Artigos em Periódicos</span>
  </h2>

  <div class="pub-list">
    {% assign journals = site.data.publications.journals | sort: "year" | reverse %}
    {% for pub in journals %}
    <div class="pub-item">
      <span class="pub-year">{{ pub.year }}</span>
      <h3 class="pub-title"
          data-pt="{{ pub.title }}"
          data-en="{{ pub.title_en }}">{{ pub.title }}</h3>
      <p class="pub-authors">{{ pub.authors }}</p>
      <p class="pub-venue">
        <em>{{ pub.journal }}</em>
        {% if pub.volume %}, v. {{ pub.volume }}{% endif %}
        {% if pub.pages %}, p. {{ pub.pages }}{% endif %}
      </p>
      <div class="pub-abstract">
        <details>
          <summary data-pt="Ver resumo" data-en="Show abstract">Ver resumo</summary>
          <div class="abstract-body">
            <p data-pt="{{ pub.abstract_pt }}"
               data-en="{{ pub.abstract_en }}">{{ pub.abstract_pt }}</p>
          </div>
        </details>
      </div>
      <div class="pub-footer">
        <div class="tags">
          {% for tag in pub.tags %}<span class="tag">{{ tag }}</span>{% endfor %}
        </div>
        <div class="pub-actions">
          {% if pub.doi_url and pub.doi_url != "" %}
          <a class="pub-btn" href="{{ pub.doi_url }}" target="_blank" rel="noopener">
            <i class="fas fa-external-link-alt"></i>
            <span data-pt="Artigo" data-en="Article">Artigo</span>
          </a>
          {% endif %}
          {% if pub.github_url and pub.github_url != "" %}
          <a class="pub-btn pub-btn--gh" href="{{ pub.github_url }}" target="_blank" rel="noopener">
            <i class="fab fa-github"></i>
            <span data-pt="Repositório" data-en="Repository">Repositório</span>
          </a>
          {% endif %}
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
</section>

<!-- ── CAPÍTULOS DE LIVROS ───────────────────────────────────────────────── -->
<section class="pub-category">
  <h2 class="pub-category-title">
    <i class="fas fa-book"></i>
    <span data-pt="Capítulos de Livros" data-en="Book Chapters">Capítulos de Livros</span>
  </h2>

  <div class="pub-list">
    {% assign chapters = site.data.publications.book_chapters | sort: "year" | reverse %}
    {% for pub in chapters %}
    <div class="pub-item">
      <span class="pub-year">{{ pub.year }}</span>
      <h3 class="pub-title"
          data-pt="{{ pub.title }}"
          data-en="{{ pub.title_en }}">{{ pub.title }}</h3>
      <p class="pub-authors">{{ pub.authors }}</p>
      <p class="pub-venue">
        In: <em>{{ pub.book }}</em>{% if pub.publisher %} — {{ pub.publisher }}{% endif %}
        {% if pub.location %}, {{ pub.location }}{% endif %}
        {% if pub.volume %}, v. {{ pub.volume }}{% endif %}
        {% if pub.pages %}, p. {{ pub.pages }}{% endif %}
      </p>
      <div class="pub-abstract">
        <details>
          <summary data-pt="Ver resumo" data-en="Show abstract">Ver resumo</summary>
          <div class="abstract-body">
            <p data-pt="{{ pub.abstract_pt }}"
               data-en="{{ pub.abstract_en }}">{{ pub.abstract_pt }}</p>
          </div>
        </details>
      </div>
      <div class="pub-footer">
        <div class="tags">
          {% for tag in pub.tags %}<span class="tag">{{ tag }}</span>{% endfor %}
        </div>
        <div class="pub-actions">
          {% if pub.doi_url and pub.doi_url != "" %}
          <a class="pub-btn" href="{{ pub.doi_url }}" target="_blank" rel="noopener">
            <i class="fas fa-external-link-alt"></i>
            <span data-pt="Artigo" data-en="Article">Artigo</span>
          </a>
          {% endif %}
          {% if pub.github_url and pub.github_url != "" %}
          <a class="pub-btn pub-btn--gh" href="{{ pub.github_url }}" target="_blank" rel="noopener">
            <i class="fab fa-github"></i>
            <span data-pt="Repositório" data-en="Repository">Repositório</span>
          </a>
          {% endif %}
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
</section>

<!-- ── PROJETOS DE PESQUISA ──────────────────────────────────────────────── -->
<section class="pub-category">
  <h2 class="pub-category-title">
    <i class="fas fa-flask"></i>
    <span data-pt="Projetos de Pesquisa e Desenvolvimento" data-en="Research & Development Projects">
      Projetos de Pesquisa e Desenvolvimento
    </span>
  </h2>

  {% assign projects = site.data.publications.projects %}
  {% for proj in projects %}
  <div class="project-card{% if proj.highlight %} highlight{% endif %}">
    <div class="project-header">
      <h3 class="project-title"
          data-pt="{{ proj.title }}"
          data-en="{{ proj.title_en }}">{{ proj.title }}</h3>
      <div style="text-align:right;flex-shrink:0">
        <span class="project-period">{{ proj.period }}</span><br>
        <span class="tag" style="margin-top:.25rem;display:inline-block"
              data-pt="{{ proj.status_pt }}"
              data-en="{{ proj.status_en }}">{{ proj.status_pt }}</span>
      </div>
    </div>
    <p class="project-role">
      <i class="fas fa-user-tie" style="color:var(--accent);margin-right:.4rem"></i>
      <span data-pt="{{ proj.role_pt }}" data-en="{{ proj.role_en }}">{{ proj.role_pt }}</span>
      — {{ proj.institution }}
      {% if proj.advisor_pt %}
      <span class="project-advisor"
            data-pt="{{ proj.advisor_pt }}"
            data-en="{{ proj.advisor_en }}"> · {{ proj.advisor_pt }}</span>
      {% endif %}
    </p>
    <p class="project-desc"
       data-pt="{{ proj.description_pt }}"
       data-en="{{ proj.description_en }}">{{ proj.description_pt }}</p>
    <div class="tags" style="margin-top:1rem">
      {% for tag in proj.tags %}<span class="tag">{{ tag }}</span>{% endfor %}
    </div>
  </div>
  {% endfor %}

</section>
</article>
