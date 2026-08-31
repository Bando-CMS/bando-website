export const roadmapMarkup = `
  <!-- =====================================================
       HERO
  ====================================================== -->

  <section class="page-hero">
    <div class="wrap">
      <div class="page-hero-inner">
        <span class="eyebrow">
          Building in public · Open source
        </span>

        <h1>
          Estamos a construir o Bando
          <em>em público.</em>
        </h1>

        <p>
          O Bando já possui a sua fundação técnica, incluindo o schema engine,
          database layer, API, autenticação, client e Studio. Esta página
          acompanha o que já foi construído e o que vem a seguir.
        </p>

        <div class="page-meta">
          <span class="meta-tag">MIT License</span>
          <span class="meta-tag">TypeScript</span>
          <span class="meta-tag">Local-first</span>
          <span class="meta-tag">Self-hosted</span>
          <span class="meta-tag">React</span>
          <span class="meta-tag">PostgreSQL</span>
        </div>
      </div>
    </div>
  </section>


  <!-- =====================================================
       MANIFESTO
  ====================================================== -->

  <section class="manifesto">
    <div class="wrap">
      <div class="manifesto-grid">

        <div class="manifesto-title">
          <span class="eyebrow">
            A ideia
          </span>

          <h2>
            O CMS deve trabalhar para o developer.
          </h2>
        </div>

        <div class="manifesto-content">

          <p>
            O Bando nasceu de uma ideia simples:
            <strong>
              o conteúdo da tua aplicação deveria poder viver
              na tua própria infraestrutura.
            </strong>
          </p>

          <p>
            Queremos construir um CMS headless moderno, mas com uma
            filosofia diferente. Local-first, open source e orientado
            para developers.
          </p>

          <p>
            A fundação do Bando já está a ser construída: schemas definidos
            em TypeScript, persistência em PostgreSQL, API REST, autenticação,
            typed client e um Studio para gerir conteúdo.
          </p>

          <div class="terminal-line">
            <span class="prompt">$</span>
            defineCollection(...)
          </div>

        </div>

      </div>
    </div>
  </section>


  <!-- =====================================================
       ARCHITECTURE
  ====================================================== -->

  <section class="architecture" id="arquitetura">
    <div class="wrap">

      <div class="section-head">

        <span class="eyebrow">
          Arquitetura
        </span>

        <h2>
          Uma base modular. Um sistema inteiro.
        </h2>

        <p>
          O Bando está organizado como um monorepo modular. Cada parte
          possui uma responsabilidade clara e pode evoluir de forma
          independente.
        </p>

      </div>

      <div class="architecture-panel">

        <div class="architecture-header">

          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>

          <span>bando/</span>

        </div>

        <div class="architecture-body">

<pre class="architecture-tree"><span class="highlight">bando/</span>
│
├── <span class="accent">apps/</span>
│   ├── cli/
│   ├── server/
│   └── studio/
│
├── <span class="accent">packages/</span>
│   ├── client/
│   ├── config/
│   ├── core/
│   ├── database/
│
├── <span class="accent">examples/</span>
│   ├── nextjs/
│   ├── react/
│   └── node/
│
├── docs/
├── tests/
│
├── docker-compose.yml
├── pnpm-workspace.yaml
└── package.json</pre>

        </div>

      </div>

    </div>
  </section>


  <!-- =====================================================
       SYSTEM FLOW
  ====================================================== -->

  <section class="system-flow">

    <div class="wrap">

      <div class="system-flow-grid">

        <div class="system-box">

          <div class="system-number">01</div>

          <h3>Schema</h3>

          <p>
            Define o conteúdo através de TypeScript e
            <code>defineCollection()</code>.
          </p>

        </div>

        <div class="system-box">

          <div class="system-number">02</div>

          <h3>Engine</h3>

          <p>
            O schema engine interpreta e descobre as collections
            e os seus campos.
          </p>

        </div>

        <div class="system-box">

          <div class="system-number">03</div>

          <h3>Database</h3>

          <p>
            O database layer persiste e disponibiliza operações
            CRUD sobre o conteúdo.
          </p>

        </div>

        <div class="system-box">

          <div class="system-number">04</div>

          <h3>Studio</h3>

          <p>
            O Studio descobre collections e permite gerir
            documentos visualmente.
          </p>

        </div>

        <div class="system-box">

          <div class="system-number">05</div>

          <h3>API</h3>

          <p>
            A API REST disponibiliza o conteúdo para aplicações
            externas e frontends.
          </p>

        </div>

      </div>

    </div>

  </section>


  <!-- =====================================================
       SYNTAX
  ====================================================== -->

  <section class="syntax-section">

    <div class="wrap">

      <div class="section-head">

        <span class="eyebrow">
          Developer experience
        </span>

        <h2>
          A sintaxe que estamos a construir.
        </h2>

        <p>
          O Bando permite definir o modelo de conteúdo diretamente
          no código TypeScript.
        </p>

      </div>


      <div class="syntax-grid">

        <div class="code-card">

          <div class="code-card-header">
            <span>schema.ts</span>
            <span>Bando Core</span>
          </div>

          <pre class="code"><span class="ln">1</span><span class="kw">import</span> {
<span class="ln">2</span>  <span class="fn">defineCollection</span>,
<span class="ln">3</span>  text,
<span class="ln">4</span>  image,
<span class="ln">5</span>  richText,
<span class="ln">6</span>} <span class="kw">from</span> <span class="str">"@bando-cms/core"</span>
<span class="ln">7</span>
<span class="ln">8</span><span class="kw">export const</span> post =
<span class="ln">9</span>  <span class="fn">defineCollection</span>({
<span class="ln">10</span>    name: <span class="str">"posts"</span>,
<span class="ln">11</span>
<span class="ln">12</span>    fields: {
<span class="ln">13</span>      title: <span class="fn">text</span>({
<span class="ln">14</span>        required: <span class="kw">true</span>,
<span class="ln">15</span>      }),
<span class="ln">16</span>
<span class="ln">17</span>      cover: <span class="fn">image</span>(),
<span class="ln">18</span>
<span class="ln">19</span>      body: <span class="fn">richText</span>(),
<span class="ln">20</span>    },
<span class="ln">21</span>  })</pre>

        </div>


        <div class="code-card">
  <div class="code-card-header">
    <span>query.ts</span>
    <span>Bando Client</span>
  </div>

  <pre class="code"><span class="ln">1</span><span class="kw">import</span> { createBandoClient }
<span class="ln">2</span>  <span class="kw">from</span> <span class="str">"@bando-cms/client"</span>
<span class="ln">3</span>
<span class="ln">4</span><span class="kw">const</span> bando = createBandoClient({
<span class="ln">5</span>  baseUrl: <span class="str">"http://localhost:3333"</span>,
<span class="ln">6</span>});
<span class="ln">7</span>
<span class="ln">8</span><span class="kw">const</span> { data, total } = <span class="kw">await</span> bando
<span class="ln">9</span>  .<span class="fn">collection</span>(<span class="str">"posts"</span>)
<span class="ln">10</span>  .<span class="fn">findMany</span>({
<span class="ln">11</span>    limit: <span class="num">10</span>,
<span class="ln">12</span>    sort: <span class="str">"-createdAt"</span>,
<span class="ln">13</span>    filters: {
<span class="ln">14</span>      published: <span class="kw">true</span>,
<span class="ln">15</span>    },
<span class="ln">16</span>  });
<span class="ln">17</span>
<span class="ln">18</span><span class="comment">// conteúdo consumido através do client</span></pre>
</div>

      </div>

    </div>

  </section>


  <!-- =====================================================
       ROADMAP
  ====================================================== -->

  <section class="roadmap" id="roadmap">

    <div class="wrap">

      <div class="section-head">

        <span class="eyebrow">
          Roadmap público
        </span>

        <h2>
          O que já construímos. O que vem a seguir.
        </h2>

        <p>
          O roadmap representa a direção atual do projeto. As prioridades
          podem mudar conforme o Bando evolui e recebe feedback da comunidade.
        </p>

      </div>


      <div class="roadmap-list">


        <!-- PHASE 0 -->

        <div class="roadmap-item">

          <div class="roadmap-phase">
            Phase 0<br>
            Foundation
          </div>

          <div class="roadmap-content">

            <h3>
              Fundação do projeto
            </h3>

            <p>
              A fundação do monorepo, tooling, TypeScript, workspace,
              Docker e infraestrutura inicial já está implementada.
            </p>

            <div class="roadmap-tasks">
              <span class="task">Monorepo</span>
              <span class="task">TypeScript</span>
              <span class="task">pnpm</span>
              <span class="task">Docker</span>
              <span class="task">PostgreSQL</span>
              <span class="task">Project structure</span>
            </div>

          </div>

          <div class="roadmap-status status-complete">
            ● Concluído
          </div>

        </div>


        <!-- PHASE 1 -->

        <div class="roadmap-item">

          <div class="roadmap-phase">
            Phase 1<br>
            Schema
          </div>

          <div class="roadmap-content">

            <h3>
              Schema Engine
            </h3>

            <p>
              O Bando já possui a fundação do schema engine, incluindo
              <code>defineCollection()</code>, descoberta de schemas
              e definição de campos.
            </p>

            <div class="roadmap-tasks">
              <span class="task">defineCollection()</span>
              <span class="task">Fields</span>
              <span class="task">Schema discovery</span>
              <span class="task">TypeScript types</span>
              <span class="task">Validation foundation</span>
            </div>

          </div>

          <div class="roadmap-status status-complete">
            ● Concluído
          </div>

        </div>


        <!-- PHASE 2 -->

        <div class="roadmap-item">

          <div class="roadmap-phase">
            Phase 2<br>
            Database
          </div>

          <div class="roadmap-content">

            <h3>
              Database Engine
            </h3>

            <p>
              A camada de persistência PostgreSQL já está funcional,
              incluindo operações CRUD e integração com as collections.
            </p>

            <div class="roadmap-tasks">
              <span class="task">PostgreSQL</span>
              <span class="task">Persistence</span>
              <span class="task">CRUD</span>
              <span class="task">Queries</span>
              <span class="task">Database adapter</span>
            </div>

          </div>

          <div class="roadmap-status status-complete">
            ● Concluído
          </div>

        </div>


        <!-- PHASE 3 -->

        <div class="roadmap-item">

          <div class="roadmap-phase">
            Phase 3<br>
            API
          </div>

          <div class="roadmap-content">

            <h3>
              API Layer
            </h3>

            <p>
              A API HTTP já disponibiliza collections e documents,
              incluindo operações de leitura, criação, atualização
              e remoção.
            </p>

            <div class="roadmap-tasks">
              <span class="task">REST</span>
              <span class="task">Collections</span>
              <span class="task">Documents</span>
              <span class="task">Queries</span>
              <span class="task">Filtering</span>
              <span class="task">Validation</span>
            </div>

          </div>

          <div class="roadmap-status status-complete">
            ● Concluído
          </div>

        </div>


        <!-- PHASE 4 -->

        <div class="roadmap-item">

          <div class="roadmap-phase">
            Phase 4<br>
            Auth
          </div>

          <div class="roadmap-content">

            <h3>
              Authentication & Authorization
            </h3>

            <p>
              O sistema de autenticação e autorização já possui uma
              fundação funcional para proteger o Studio e a API.
            </p>

            <div class="roadmap-tasks">
              <span class="task">Login</span>
              <span class="task">JWT</span>
              <span class="task">Sessions</span>
              <span class="task">Logout</span>
              <span class="task">RBAC</span>
              <span class="task">Permissions</span>
            </div>

          </div>

          <div class="roadmap-status status-complete">
            ● Concluído
          </div>

        </div>


        <!-- PHASE 5 -->

        <div class="roadmap-item">

          <div class="roadmap-phase">
            Phase 5<br>
            Studio
          </div>

          <div class="roadmap-content">

            <h3>
              Bando Studio
            </h3>

            <p>
              O Studio já é capaz de comunicar com a API real, descobrir
              collections e schemas e gerir documentos através da interface.
            </p>

            <div class="roadmap-tasks">
              <span class="task">React</span>
              <span class="task">Authentication</span>
              <span class="task">Collection explorer</span>
              <span class="task">Document listing</span>
              <span class="task">Create</span>
              <span class="task">Edit</span>
              <span class="task">Delete</span>
            </div>

          </div>

          <div class="roadmap-status status-progress">
            ● Em evolução
          </div>

        </div>


        <!-- PHASE 6 -->

        <div class="roadmap-item">

          <div class="roadmap-phase">
            Phase 6<br>
            Client
          </div>

          <div class="roadmap-content">

            <h3>
              Developer Experience
            </h3>

            <p>
              A base do client já existe. O próximo objetivo é tornar
              a experiência de consumo do Bando cada vez mais tipada,
              simples e integrada com diferentes frameworks.
            </p>

            <div class="roadmap-tasks">
              <span class="task">Client</span>
              <span class="task">Typed queries</span>
              <span class="task">Type generation</span>
              <span class="task">Framework integrations</span>
              <span class="task">CLI</span>
            </div>

          </div>

          <div class="roadmap-status status-progress">
            ● Em construção
          </div>

        </div>


        <!-- PHASE 7 -->

        <div class="roadmap-item">

          <div class="roadmap-phase">
            Phase 7<br>
            Content
          </div>

          <div class="roadmap-content">

            <h3>
              Content Experience
            </h3>

            <p>
              Melhorar a experiência editorial e preparar o Studio
              para fluxos de conteúdo mais completos.
            </p>

            <div class="roadmap-tasks">
              <span class="task">Rich Text</span>
              <span class="task">Media</span>
              <span class="task">Uploads</span>
              <span class="task">Drafts</span>
              <span class="task">Publishing</span>
              <span class="task">Preview</span>
              <span class="task">Revisions</span>
            </div>

          </div>

          <div class="roadmap-status status-planned">
            ○ Planeado
          </div>

        </div>


        <!-- PHASE 8 -->

        <div class="roadmap-item">

          <div class="roadmap-phase">
            Phase 8<br>
            Extensibility
          </div>

          <div class="roadmap-content">

            <h3>
              Sistema de extensões
            </h3>

            <p>
              Permitir que developers possam adaptar o Bando através
              de plugins, adapters, custom fields e hooks.
            </p>

            <div class="roadmap-tasks">
              <span class="task">Plugins</span>
              <span class="task">Adapters</span>
              <span class="task">Custom Fields</span>
              <span class="task">Hooks</span>
              <span class="task">Integrations</span>
            </div>

          </div>

          <div class="roadmap-status status-planned">
            ○ Planeado
          </div>

        </div>


        <!-- PHASE 9 -->

        <div class="roadmap-item">

          <div class="roadmap-phase">
            Phase 9<br>
            Realtime
          </div>

          <div class="roadmap-content">

            <h3>
              Real-time
            </h3>

            <p>
              Adicionar atualizações em tempo real, WebSockets e
              funcionalidades de colaboração.
            </p>

            <div class="roadmap-tasks">
              <span class="task">WebSockets</span>
              <span class="task">Live Updates</span>
              <span class="task">Presence</span>
              <span class="task">Collaboration</span>
            </div>

          </div>

          <div class="roadmap-status status-planned">
            ○ Planeado
          </div>

        </div>


        <!-- PHASE 10 -->

        <div class="roadmap-item">

          <div class="roadmap-phase">
            Phase 10<br>
            Production
          </div>

          <div class="roadmap-content">

            <h3>
              Production Ready
            </h3>

            <p>
              Preparar o Bando para utilização em produção através
              de hardening de segurança, migrations, backups,
              observabilidade e documentação completa.
            </p>

            <div class="roadmap-tasks">
              <span class="task">Security</span>
              <span class="task">Migrations</span>
              <span class="task">Backups</span>
              <span class="task">Observability</span>
              <span class="task">Production Docker</span>
              <span class="task">Documentation</span>
            </div>

          </div>

          <div class="roadmap-status status-planned">
            ○ Planeado
          </div>

        </div>


      </div>

    </div>

  </section>


  <!-- =====================================================
       PROGRESS
  ====================================================== -->

  <section class="progress-section">

    <div class="wrap">

      <div class="progress-panel">

        <div class="progress-header">

          <h3>
            Progresso geral
          </h3>

          <span class="progress-percent">
            50%
          </span>

        </div>

        <div class="progress-bar">

          <div
            class="progress-fill"
            style="width: 50%;"
          ></div>

        </div>

        <div class="progress-labels">

          <span>Fundação funcional</span>
          <span>v1.0.0</span>

        </div>

      </div>

    </div>

  </section>


  <!-- =====================================================
       PRINCIPLES
  ====================================================== -->

  <section class="principles">

    <div class="wrap">

      <div class="section-head">

        <span class="eyebrow">
          Princípios
        </span>

        <h2>
          Algumas coisas não vamos negociar.
        </h2>

      </div>


      <div class="principles-grid">

        <div class="principle">

          <span class="principle-number">01</span>

          <h3>
            Local-first
          </h3>

          <p>
            O desenvolvimento deve funcionar localmente e permitir
            que developers tenham controlo sobre a infraestrutura.
          </p>

        </div>


        <div class="principle">

          <span class="principle-number">02</span>

          <h3>
            Open source
          </h3>

          <p>
            O core é aberto, auditável e desenvolvido publicamente
            com a comunidade.
          </p>

        </div>


        <div class="principle">

          <span class="principle-number">03</span>

          <h3>
            Self-hosted
          </h3>

          <p>
            Os utilizadores podem executar o Bando na sua própria
            infraestrutura.
          </p>

        </div>


        <div class="principle">

          <span class="principle-number">04</span>

          <h3>
            TypeScript-first
          </h3>

          <p>
            Schemas, APIs, queries e ferramentas devem proporcionar
            uma experiência fortemente tipada.
          </p>

        </div>


        <div class="principle">

          <span class="principle-number">05</span>

          <h3>
            Extensível
          </h3>

          <p>
            O Bando deve poder adaptar-se a diferentes stacks,
            projetos e necessidades.
          </p>

        </div>


        <div class="principle">

          <span class="principle-number">06</span>

          <h3>
            Sem lock-in
          </h3>

          <p>
            Os dados e a infraestrutura continuam sob controlo
            do utilizador.
          </p>

        </div>

      </div>

    </div>

  </section>


  <!-- =====================================================
       BUILDING IN PUBLIC
  ====================================================== -->

  <section class="public-development" id="open-source">

    <div class="wrap">

      <div class="public-grid">

        <div class="public-content">

          <span class="eyebrow">
            Building in public
          </span>

          <h2>
            Cada decisão fica visível.
          </h2>

          <p>
            O Bando não está a ser desenvolvido numa sala fechada.
            Queremos que a comunidade possa acompanhar a evolução,
            discutir decisões e contribuir desde o início.
          </p>

          <ul class="public-list">

            <li>
              Issues públicas
            </li>

            <li>
              RFCs para decisões importantes
            </li>

            <li>
              Pull Requests abertas
            </li>

            <li>
              Roadmap público
            </li>

            <li>
              Releases públicas
            </li>

            <li>
              Documentação desde o início
            </li>

          </ul>

        </div>


        <div class="public-terminal">

          <div class="terminal-muted">
            bando/
          </div>

          <div>
            ├── <span class="terminal-cyan">issue</span>
            <span class="terminal-muted">define schema API</span>
          </div>

          <div>
            ├── <span class="terminal-cyan">rfc</span>
            <span class="terminal-muted">database adapters</span>
          </div>

          <div>
            ├── <span class="terminal-cyan">pull</span>
            <span class="terminal-muted">request #12</span>
          </div>

          <div>
            ├── <span class="terminal-green">commit</span>
            <span class="terminal-muted">schema engine</span>
          </div>

          <div>
            ├── <span class="terminal-green">release</span>
            <span class="terminal-muted">v0.1.0</span>
          </div>

          <div>
            └── <span class="terminal-amber">community</span>
            <span class="terminal-muted">contribute</span>
          </div>

        </div>

      </div>

    </div>

  </section>


  <!-- =====================================================
       CTA
  ====================================================== -->

  <section class="roadmap-cta">

    <div class="wrap">

      <span
        class="eyebrow"
        style="justify-content:center;"
      >
        O próximo passo
      </span>

      <h2>
        O Bando está a ser construído agora.
      </h2>

      <p>
        Acompanha o desenvolvimento, explora o código ou junta-te
        à comunidade para ajudar a construir o futuro do projeto.
      </p>

      <div class="cta-actions">

        <a
          class="btn btn-primary"
          href="https://github.com/Bando-CMS"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver no GitHub
        </a>

        <a
          class="btn btn-ghost"
          href="/"
        >
          Voltar ao Bando
        </a>

      </div>

    </div>

  </section>
`