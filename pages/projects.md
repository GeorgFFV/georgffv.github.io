---
layout: default
title: "Projetos"
permalink: /pages/projects/
---

<article class="page-content">
<header class="page-header">
  <h1 class="page-title"
      data-pt="Projetos"
      data-en="Projects">Projetos</h1>
  <p class="page-subtitle"
     data-pt="Projetos de pesquisa e desenvolvimento em destaque."
     data-en="Featured research and development projects.">
    Projetos de pesquisa e desenvolvimento em destaque.
  </p>
</header>

<div class="page-body">

{% for proj in site.data.publications.projects %}
<div class="project-card{% if proj.highlight %} highlight{% endif %}">
  <div class="project-header">
    <h3 class="project-title"
        data-pt="{{ proj.title }}"
        data-en="{{ proj.title_en }}">{{ proj.title }}</h3>
    <span class="project-period">{{ proj.period }}</span>
  </div>
  <p class="project-role">
    <i class="fas fa-user-tie" style="color:var(--accent);margin-right:.4rem"></i>
    <span data-pt="{{ proj.role_pt }}" data-en="{{ proj.role_en }}">{{ proj.role_pt }}</span>
    — {{ proj.institution }}
  </p>
  <p class="project-desc"
     data-pt="{{ proj.description_pt }}"
     data-en="{{ proj.description_en }}">{{ proj.description_pt }}</p>
  <div class="tags" style="margin-top:1rem">
    {% for tag in proj.tags %}
    <span class="tag">{{ tag }}</span>
    {% endfor %}
  </div>
</div>
{% endfor %}

</div>
</article>
