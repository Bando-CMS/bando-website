export const roadmapMarkup = `
  <!-- =====================================================
       HERO
  ====================================================== -->
  <section class="page-hero">
    <div class="wrap">
      <div class="page-hero-inner">
        <span class="eyebrow">
          Open source · Public roadmap
        </span>

        <h1>
          See where Bando is going
          <em>next.</em>
        </h1>

        <p>
          Bando is already available as v1.0.0, with its core
          infrastructure in place: schema engine, database layer,
          API, authentication, client, CLI, and Studio.
          This roadmap shows what is available today and what comes next.
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
            The idea
          </span>

          <h2>
            The CMS should work for the developer.
          </h2>
        </div>

        <div class="manifesto-content">
          <p>
            Bando started with a simple idea:
            <strong>
              your application's content should be able to live
              on your own infrastructure.
            </strong>
          </p>

          <p>
            We built a modern headless CMS around a different philosophy:
            local-first, open source, self-hosted, and designed
            around the way developers actually work.
          </p>

          <p>
            Today, Bando provides the foundation to define content
            in TypeScript, persist it with PostgreSQL, expose it
            through an API, authenticate access, query it through
            a typed client, and manage it through Bando Studio.
          </p>

          <div class="terminal-line">
            <span class="prompt">$</span>
            npm install bando-cms
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
          Architecture
        </span>

        <h2>
          A modular foundation. A complete system.
        </h2>

        <p>
          Bando is organized as a modular monorepo. Each part
          has a clear responsibility while working together
          as a complete content infrastructure.
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
            Define your content using TypeScript and
            <code>defineCollection()</code>.
          </p>
        </div>

        <div class="system-box">
          <div class="system-number">02</div>
          <h3>Engine</h3>
          <p>
            The schema engine discovers your collections,
            fields, relationships, and configuration.
          </p>
        </div>

        <div class="system-box">
          <div class="system-number">03</div>
          <h3>Database</h3>
          <p>
            The database layer persists your content and
            provides CRUD operations through PostgreSQL.
          </p>
        </div>

        <div class="system-box">
          <div class="system-number">04</div>
          <h3>Studio</h3>
          <p>
            Bando Studio discovers collections and lets you
            manage documents through a visual interface.
          </p>
        </div>

        <div class="system-box">
          <div class="system-number">05</div>
          <h3>API</h3>
          <p>
            The REST API makes your content available to
            the applications and frontends you build.
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
          Define your content in code.
        </h2>

        <p>
          Bando lets you define your content model directly
          in TypeScript, keeping your schema close to your application.
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
<span class="ln">6</span>} <span class="kw">from</span> <span class="str">"bando-cms"</span>
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
<span class="ln">2</span>  <span class="kw">from</span> <span class="str">"bando-cms"</span>
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
<span class="ln">18</span><span class="comment">// content consumed through the client</span></pre>
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
          Public roadmap
        </span>

        <h2>
          What exists today. What comes next.
        </h2>

        <p>
          Bando v1.0.0 provides the core infrastructure needed
          to run and use the platform. The roadmap now focuses
          on expanding its capabilities and developer experience.
          Priorities may evolve with community feedback.
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
              Project Foundation
            </h3>

            <p>
              The monorepo, tooling, TypeScript setup, workspace,
              Docker environment, and core project structure are in place.
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
            ● Complete
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
              The schema engine provides collection definitions,
              schema discovery, field definitions, relationships,
              reference validation, and TypeScript types.
            </p>

            <div class="roadmap-tasks">
              <span class="task">defineCollection()</span>
              <span class="task">Fields</span>
              <span class="task">Schema discovery</span>
              <span class="task">TypeScript types</span>
              <span class="task">Validation</span>
              <span class="task">Relations</span>
              <span class="task">Reference validation</span>
              <span class="task">Reference protection</span>
            </div>
          </div>

          <div class="roadmap-status status-complete">
            ● Complete
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
              PostgreSQL persistence is functional, with CRUD
              operations, queries, adapters, and collection integration.
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
            ● Complete
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
              The HTTP API provides collection and document
              operations, including reading, creation, updates,
              deletion, filtering, and validation.
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
            ● Complete
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
              Authentication and authorization provide the foundation
              for protecting the Studio and API with secure access controls.
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
            ● Complete
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
              Bando Studio connects to the real API, provides
              a dashboard, discovers collections and schemas,
              and lets you manage documents through the interface.
            </p>

            <div class="roadmap-tasks">
              <span class="task">React</span>
              <span class="task">Authentication</span>
              <span class="task">Collection explorer</span>
              <span class="task">Document listing</span>
              <span class="task">Create</span>
              <span class="task">Edit</span>
              <span class="task">Delete</span>
              <span class="task">Dashboard</span>
              <span class="task">Relation selectors</span>
            </div>
          </div>

          <div class="roadmap-status status-complete">
            ● Complete
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
              The TypeScript client provides CRUD operations,
              filtered queries, pagination, and generic collection
              typing for working with Bando from your application.
            </p>

            <div class="roadmap-tasks">
              <span class="task">Client</span>
              <span class="task">Typed queries</span>
              <span class="task">Generic typing</span>
              <span class="task">Type generation</span>
              <span class="task">Framework integrations</span>
              <span class="task">CLI</span>
            </div>
          </div>

          <div class="roadmap-status status-complete">
            ● Complete
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
              Expand the editorial experience with richer content
              workflows and more powerful media and publishing capabilities.
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
            ○ Planned
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
              Extension System
            </h3>

            <p>
              Give developers more control over Bando through
              plugins, adapters, custom fields, hooks, and integrations.
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
            ○ Planned
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
              Add real-time updates, WebSockets, presence,
              and collaborative workflows.
            </p>

            <div class="roadmap-tasks">
              <span class="task">WebSockets</span>
              <span class="task">Live Updates</span>
              <span class="task">Presence</span>
              <span class="task">Collaboration</span>
            </div>
          </div>

          <div class="roadmap-status status-planned">
            ○ Planned
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
              Production Hardening
            </h3>

            <p>
              Strengthen Bando for demanding production environments
              with deeper security hardening, migrations, backups,
              observability, and operational tooling.
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
            ○ Planned
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
            Current release
          </h3>

          <span class="progress-percent">
            v1.0.0
          </span>
        </div>

        <div class="progress-bar">
          <div
            class="progress-fill"
            style="width: 100%;"
          ></div>
        </div>

        <div class="progress-labels">
          <span>Core infrastructure available</span>
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
          Principles
        </span>

        <h2>
          Some things are non-negotiable.
        </h2>
      </div>

      <div class="principles-grid">

        <div class="principle">
          <span class="principle-number">01</span>

          <h3>
            Local-first
          </h3>

          <p>
            Development should work locally and give developers
            control over how and where their infrastructure runs.
          </p>
        </div>


        <div class="principle">
          <span class="principle-number">02</span>

          <h3>
            Open source
          </h3>

          <p>
            The core is open, auditable, and developed in public
            alongside the community.
          </p>
        </div>


        <div class="principle">
          <span class="principle-number">03</span>

          <h3>
            Self-hosted
          </h3>

          <p>
            Developers can run Bando on their own infrastructure
            and keep control of their data.
          </p>
        </div>


        <div class="principle">
          <span class="principle-number">04</span>

          <h3>
            TypeScript-first
          </h3>

          <p>
            Schemas, APIs, queries, and tooling should provide
            a strongly typed developer experience.
          </p>
        </div>


        <div class="principle">
          <span class="principle-number">05</span>

          <h3>
            Extensible
          </h3>

          <p>
            Bando should adapt to different stacks,
            applications, and developer needs.
          </p>
        </div>


        <div class="principle">
          <span class="principle-number">06</span>

          <h3>
            No lock-in
          </h3>

          <p>
            Your data and infrastructure remain under
            your control.
          </p>
        </div>

      </div>
    </div>
  </section>


  <!-- =====================================================
       OPEN DEVELOPMENT
  ====================================================== -->
  <section class="public-development" id="open-source">
    <div class="wrap">
      <div class="public-grid">

        <div class="public-content">
          <span class="eyebrow">
            Open development
          </span>

          <h2>
            The work stays visible.
          </h2>

          <p>
            Bando is developed openly. The community can follow
            releases, discuss decisions, report issues, and contribute
            directly to the project.
          </p>

          <ul class="public-list">
            <li>
              Public issues
            </li>

            <li>
              RFCs for important decisions
            </li>

            <li>
              Open pull requests
            </li>

            <li>
              Public roadmap
            </li>

            <li>
              Public releases
            </li>

            <li>
              Documentation from day one
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
            <span class="terminal-muted">v1.0.0</span>
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
        What's next
      </span>

      <h2>
        Bando v1.0.0 is just the beginning.
      </h2>

      <p>
        Use Bando today, explore the code, follow the roadmap,
        or join the community and help shape what comes next.
      </p>

      <div class="cta-actions">

        <a
          class="btn btn-primary"
          href="https://github.com/Bando-CMS"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore GitHub
        </a>

        <a
          class="btn btn-ghost"
          href="/"
        >
          Back to Bando
        </a>

      </div>
    </div>
  </section>
`;