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
          We are building Bando
          <em>in public.</em>
        </h1>
        <p>
          Bando already has its technical foundation, including the schema engine,
          database layer, API, authentication, client, and Studio. This page
          tracks what has already been built and what comes next.
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
            Bando was born from a simple idea:
            <strong>
              your application's content should be able to live
              on your own infrastructure.
            </strong>
          </p>
          <p>
            We want to build a modern headless CMS, but with a
            different philosophy. Local-first, open source, and
            developer-focused.
          </p>
          <p>
            Bando's foundation is already being built: schemas defined
            in TypeScript, PostgreSQL persistence, a REST API, authentication,
            a typed client, and a Studio for managing content.
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
  <section class="architecture" id="architecture">
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
          has a clear responsibility and can evolve independently.
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
│   └── database/
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
            Define content through TypeScript and
            <code>defineCollection()</code>.
          </p>
        </div>

        <div class="system-box">
          <div class="system-number">02</div>
          <h3>Engine</h3>
          <p>
            The schema engine interprets and discovers collections
            and their fields.
          </p>
        </div>

        <div class="system-box">
          <div class="system-number">03</div>
          <h3>Database</h3>
          <p>
            The database layer persists content and provides
            CRUD operations over collections.
          </p>
        </div>

        <div class="system-box">
          <div class="system-number">04</div>
          <h3>Studio</h3>
          <p>
            Studio discovers collections and allows documents
            to be managed visually.
          </p>
        </div>

        <div class="system-box">
          <div class="system-number">05</div>
          <h3>API</h3>
          <p>
            The REST API exposes content to external applications
            and frontends.
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
          The syntax we are building.
        </h2>
        <p>
          Bando lets you define your content model directly
          in TypeScript code.
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
<span class="ln">18</span><span class="comment">// content consumed via the client</span></pre>
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
          What we've built. What's next.
        </h2>
        <p>
          The roadmap represents the project's current direction.
          Priorities may change as Bando evolves and receives
          feedback from the community.
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
              The monorepo foundation, tooling, TypeScript, workspace,
              Docker, and initial infrastructure are already implemented.
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
            ● Completed
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
              Bando already has the foundation of its schema engine,
              including <code>defineCollection()</code>, schema discovery,
              and field definitions.
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
            ● Completed
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
              The PostgreSQL persistence layer is already functional,
              including CRUD operations and integration with collections.
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
            ● Completed
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
              The HTTP API already exposes collections and documents,
              including read, create, update, and delete operations.
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
            ● Completed
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
              The authentication and authorization system already has
              a functional foundation for protecting Studio and the API.
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
            ● Completed
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
              Studio can already communicate with the real API,
              discover collections and schemas, and manage documents
              through the interface.
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
            ● In progress
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
              The client foundation already exists. The next goal is
              to make the Bando consumption experience increasingly
              typed, simple, and integrated with different frameworks.
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
            ● In progress
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
              Improve the editorial experience and prepare Studio
              for more complete content workflows.
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
              Allow developers to adapt Bando through plugins,
              adapters, custom fields, and hooks.
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
              Add real-time updates, WebSockets, and collaboration
              features.
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
              Production Ready
            </h3>
            <p>
              Prepare Bando for production use through security hardening,
              migrations, backups, observability, and complete documentation.
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
            Overall progress
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
          <span>Functional foundation</span>
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
            Development should work locally and allow developers
            to maintain control over their infrastructure.
          </p>
        </div>

        <div class="principle">
          <span class="principle-number">02</span>
          <h3>
            Open source
          </h3>
          <p>
            The core is open, auditable, and developed publicly
            with the community.
          </p>
        </div>

        <div class="principle">
          <span class="principle-number">03</span>
          <h3>
            Self-hosted
          </h3>
          <p>
            Users can run Bando on their own infrastructure.
          </p>
        </div>

        <div class="principle">
          <span class="principle-number">04</span>
          <h3>
            TypeScript-first
          </h3>
          <p>
            Schemas, APIs, queries, and tools should provide
            a strongly typed experience.
          </p>
        </div>

        <div class="principle">
          <span class="principle-number">05</span>
          <h3>
            Extensible
          </h3>
          <p>
            Bando should be able to adapt to different stacks,
            projects, and requirements.
          </p>
        </div>

        <div class="principle">
          <span class="principle-number">06</span>
          <h3>
            No lock-in
          </h3>
          <p>
            Data and infrastructure remain under the user's control.
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
            Every decision is visible.
          </h2>
          <p>
            Bando is not being developed behind closed doors.
            We want the community to follow its evolution,
            discuss decisions, and contribute from the beginning.
          </p>
          <ul class="public-list">
            <li>
              Public issues
            </li>
            <li>
              RFCs for important decisions
            </li>
            <li>
              Open Pull Requests
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
        The next step
      </span>
      <h2>
        Bando is being built right now.
      </h2>
      <p>
        Follow the development, explore the code, or join
        the community to help build the future of the project.
      </p>
      <div class="cta-actions">
        <a
          class="btn btn-primary"
          href="https://github.com/Bando-CMS"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
        <a
          class="btn btn-ghost"
          href="/en"
        >
          Back to Bando
        </a>
      </div>
    </div>
  </section>
`