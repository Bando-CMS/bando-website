export const homeMarkup = `

    <!-- HERO -->
    <section class="hero">
      <div class="wrap hero-grid">
        <div>
          <span class="eyebrow">
            Open source · TypeScript-first · Self-hosted
          </span>
          <h1 class="hero-headline">
            Your content starts with <em>code.</em>
          </h1>
          <p class="hero-sub">
            Bando is an open source headless CMS for developers.
            Define your content in TypeScript and build a content infrastructure
            that you can run and control within your own application.
          </p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="#comecar">
              Start building
            </a>
            <a
              class="btn btn-ghost"
              href="https://github.com/Bando-CMS"
              target="_blank"
              rel="noopener noreferrer"
            >
              View source code
            </a>
          </div>
          <div class="install-line">
            <span>
              <span class="dollar">$</span>
              npm create bando-cms@latest
            </span>
            <button
              class="copy-btn"
              aria-label="Copy command"
              data-copy="npm create bando-cms@latest"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke-width="2">
                <rect x="9" y="9" width="12" height="12" rx="2" />
                <path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" />
              </svg>
            </button>
          </div>
        </div>

        <div class="studio-window">
          <div class="studio-chrome">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="url">
              bando.local — schema.ts
            </span>
          </div>

          <div class="studio-body">
            <div class="studio-code">
              <span class="ln">1</span>
              <span class="tok-kw">import</span>
              {
              <span class="tok-fn">defineCollection</span>,
              <span class="tok-fn">text</span>,
              <span class="tok-fn">image</span>,
              <span class="tok-fn">richText</span>
              }
              <span class="tok-kw">from</span>
              <span class="tok-str">'@bando-cms/core'</span>
              <br>
              <span class="ln">2</span>
              <br>
              <span class="ln">3</span>
              <span class="tok-kw">export const</span>
              post =
              <span class="tok-fn">defineCollection</span>({
              <br>
              <span class="ln">4</span>
              &nbsp; name:
              <span class="tok-str">'posts'</span>,
              <br>
              <span class="ln">5</span>
              &nbsp; fields: {
              <br>
              <span class="ln">6</span>
              &nbsp;&nbsp;&nbsp; title:
              <span class="tok-fn">text</span>({
              required:
              <span class="tok-kw">true</span>
              }),
              <br>
              <span class="ln">7</span>
              &nbsp;&nbsp;&nbsp; cover:
              <span class="tok-fn">image</span>(),
              <br>
              <span class="ln">8</span>
              &nbsp;&nbsp;&nbsp; body:
              <span class="tok-fn">richText</span>(),
              <br>
              <span class="ln">9</span>
              &nbsp;&nbsp;&nbsp; published:
              <span class="tok-fn">boolean</span>(),
              <br>
              <span class="ln">10</span>
              &nbsp; },
              <br>
              <span class="ln">11</span>
              })
            </div>

            <div class="compile-row">
              schema defined
              <span class="arrow">↓</span>
              Studio + API + types
            </div>

            <div class="studio-form">
              <div class="field f-string">
                <span class="field-label">
                  title
                  <span class="field-type">string</span>
                </span>
                <div class="field-input"></div>
              </div>

              <div class="field f-image">
                <span class="field-label">
                  cover
                  <span class="field-type">image</span>
                </span>
                <div class="field-input short"></div>
              </div>

              <div class="field f-rich">
                <span class="field-label">
                  body
                  <span class="field-type">richText</span>
                </span>
                <div class="field-input tall"></div>
              </div>

              <div class="field f-bool">
                <span class="field-label">
                  published
                  <span class="field-type">boolean</span>
                </span>
                <div class="field-toggle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- STUDIO PREVIEW -->
    <section class="studio-preview">
      <div class="wrap">
        <div class="studio-preview-head">
          <div>
            <span class="eyebrow">
              Bando Studio
            </span>
            <h2>
              Your content.<br>
              <em>In a Studio built for it.</em>
            </h2>
          </div>
          <p>
            Bando Studio is designed to work with the content
            defined by your project. The goal is to keep the editorial
            experience close to your application's architecture.
          </p>
        </div>

        <div class="studio-screenshot">
          <div class="screenshot-chrome">
            <div class="chrome-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="chrome-url">
              bando.local / studio
            </div>
            <div class="chrome-spacer"></div>
          </div>
          <div class="screenshot-image">
            <!--
              Replace "studio.png" with the path to your screenshot.
              Example:
              /images/studio.png
            -->
            <img
              src="/studio.png"
              alt="Bando Studio — content management interface"
              loading="lazy"
            >
          </div>
        </div>

        <div class="studio-preview-footer">
          <span>
            <strong>01</strong>
            Schema
          </span>
          <span>
            <strong>02</strong>
            Studio
          </span>
          <span>
            <strong>03</strong>
            API
          </span>
          <span>
            <strong>04</strong>
            Application
          </span>
        </div>
      </div>
    </section>

    <!-- FEATURES -->
    <section class="section" id="recursos">
      <div class="wrap">
        <div class="section-head">
          <span class="eyebrow">
            Features
          </span>
          <h2>
            Content infrastructure built for developers.
          </h2>
          <p>
            Bando is being built to turn TypeScript schemas
            into a consistent foundation for managing and consuming
            content across your applications.
          </p>
        </div>

        <div class="feature-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke-width="1.8">
                <path d="M4 4h16v4H4zM4 10h10v10H4zM16 10h4v10h-4z" />
              </svg>
            </div>
            <h3>
              Schema as code
            </h3>
            <p>
              Define types, validations, relationships, and configurations
              directly in TypeScript. Your schema lives in your project
              and can be versioned with Git.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke-width="1.8">
                <path d="M12 2l9 4.5v11L12 22l-9-4.5v-11L12 2z" />
                <path d="M12 12v10M3 6.5l9 5.5 9-5.5" />
              </svg>
            </div>
            <h3>
              API
            </h3>
            <p>
              Content can be exposed through Bando's infrastructure
              and consumed by the applications you build.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke-width="1.8">
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <path d="M3 9h18M8 4v5" />
              </svg>
            </div>
            <h3>
              React Studio
            </h3>
            <p>
              An editorial interface built to work with
              the collections and fields defined by your project.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke-width="1.8">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 3" />
              </svg>
            </div>
            <h3>
              Developer-first
            </h3>
            <p>
              Content configuration and architecture are part
              of the code, making it easy to work with Git,
              reviews, and collaboration.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke-width="1.8">
                <path d="M12 8v4l3 3" />
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12a9 9 0 0 1 9-9" />
              </svg>
            </div>
            <h3>
              Open roadmap
            </h3>
            <p>
              New capabilities such as realtime, collaboration,
              and editorial workflows are part of the project's
              planned evolution.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke-width="1.8">
                <path d="M12 3v18M3 12h18" />
                <rect x="6" y="6" width="12" height="12" rx="2" />
              </svg>
            </div>
            <h3>
              Self-hosted
            </h3>
            <p>
              Run Bando on your machine, a VPS, or your own
              infrastructure. Your data remains under your control.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CODE -->
    <section class="section section-alt" id="codigo">
      <div class="wrap">
        <div class="section-head">
          <span class="eyebrow">
            Developer experience
          </span>
          <h2>
            Define. Query. Render.
          </h2>
          <p>
            The same schema that defines your content provides
            the foundation for working with that data in your application.
          </p>
        </div>

        <div class="showcase-panel">
          <div class="tabbar" role="tablist">
            <button
              class="tab"
              role="tab"
              aria-selected="true"
              data-tab="schema"
            >
              schema.ts
            </button>
            <button
              class="tab"
              role="tab"
              aria-selected="false"
              data-tab="query"
            >
              query.ts
            </button>
            <button
              class="tab"
              role="tab"
              aria-selected="false"
              data-tab="component"
            >
              PostList.tsx
            </button>
          </div>

          <div
            class="tabpanel"
            data-panel="schema"
            data-active="true"
          >
            <span class="ln">1</span>
            <span class="tok-kw">import</span>
            {
            <span class="tok-fn">defineCollection</span>,
            <span class="tok-fn">text</span>,
            <span class="tok-fn">image</span>,
            <span class="tok-fn">slug</span>
            }
            <span class="tok-kw">from</span>
            <span class="tok-str">'@bando-cms/core'</span>
            <br>
            <span class="ln">2</span>
            <br>
            <span class="ln">3</span>
            <span class="tok-kw">export const</span>
            post =
            <span class="tok-fn">defineCollection</span>({
            <br>
            <span class="ln">4</span>
            &nbsp; name:
            <span class="tok-str">'posts'</span>,
            <br>
            <span class="ln">5</span>
            &nbsp; fields: {
            <br>
            <span class="ln">6</span>
            &nbsp;&nbsp;&nbsp; title:
            <span class="tok-fn">text</span>({
            required:
            <span class="tok-kw">true</span>
            }),
            <br>
            <span class="ln">7</span>
            &nbsp;&nbsp;&nbsp; slug:
            <span class="tok-fn">slug</span>({
            source:
            <span class="tok-str">'title'</span>
            }),
            <br>
            <span class="ln">8</span>
            &nbsp;&nbsp;&nbsp; cover:
            <span class="tok-fn">image</span>(),
            <br>
            <span class="ln">9</span>
            &nbsp; }
            <br>
            <span class="ln">10</span>
            })
          </div>

          <div
            class="tabpanel"
            data-panel="query"
          >
            <span class="ln">1</span>
            <span class="tok-kw">import</span>
            { bando }
            <span class="tok-kw">from</span>
            <span class="tok-str">'@bando-cms/client'</span>
            <br>
            <span class="ln">2</span>
            <br>
            <span class="ln">3</span>
            <span class="tok-kw">const</span>
            posts =
            <span class="tok-kw">await</span>
            bando
            <br>
            <span class="ln">4</span>
            &nbsp;.
            <span class="tok-fn">collection</span>(
            <span class="tok-str">'posts'</span>
            )
            <br>
            <span class="ln">5</span>
            &nbsp;.
            <span class="tok-fn">where</span>(
            <span class="tok-str">'published'</span>,
            <span class="tok-str">'=='</span>,
            <span class="tok-kw">true</span>
            )
            <br>
            <span class="ln">6</span>
            &nbsp;.
            <span class="tok-fn">select</span>(
            <span class="tok-str">'title'</span>,
            <span class="tok-str">'slug'</span>
            )
            <br>
            <span class="ln">7</span>
            &nbsp;.
            <span class="tok-fn">orderBy</span>(
            <span class="tok-str">'createdAt'</span>,
            <span class="tok-str">'desc'</span>
            )
            <br>
            <span class="ln">8</span>
            &nbsp;.
            <span class="tok-fn">get</span>()
          </div>

          <div
            class="tabpanel"
            data-panel="component"
          >
            <span class="ln">1</span>
            <span class="tok-kw">import</span>
            { useQuery }
            <span class="tok-kw">from</span>
            <span class="tok-str">'@bando-cms/react'</span>
            <br>
            <span class="ln">2</span>
            <br>
            <span class="ln">3</span>
            <span class="tok-kw">export function</span>
            <span class="tok-fn">PostList</span>() {
            <br>
            <span class="ln">4</span>
            &nbsp;
            <span class="tok-kw">const</span>
            { data } =
            <span class="tok-fn">useQuery</span>(posts)
            <br>
            <span class="ln">5</span>
            <br>
            <span class="ln">6</span>
            &nbsp;
            <span class="tok-kw">return</span> (
            <br>
            <span class="ln">7</span>
            &nbsp;&nbsp;&nbsp;
            &lt;ul&gt;
            <br>
            <span class="ln">8</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {data?.map((post) =&gt; (
            <br>
            <span class="ln">9</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &lt;li key={post.slug}&gt;
            <br>
            <span class="ln">10</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {post.title}
            <br>
            <span class="ln">11</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &lt;/li&gt;
            <br>
            <span class="ln">12</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            ))}
            <br>
            <span class="ln">13</span>
            &nbsp;&nbsp;&nbsp;
            &lt;/ul&gt;
            <br>
            <span class="ln">14</span>
            &nbsp;)
            <br>
            <span class="ln">15</span>
            }
          </div>
        </div>
      </div>
    </section>

    <!-- HOW IT WORKS -->
    <section class="section" id="como-funciona">
      <div class="wrap">
        <div class="section-head">
          <span class="eyebrow">
            How it works
          </span>
          <h2>
            A single source of truth for all your content.
          </h2>
        </div>

        <div class="flow">
          <div class="flow-step">
            <span class="flow-eyebrow">
              Step 01
            </span>
            <h3>
              Define
            </h3>
            <p>
              Create collections in TypeScript and describe your content's
              fields, validations, relationships, and behaviors.
            </p>
          </div>

          <div class="flow-step">
            <span class="flow-eyebrow">
              Step 02
            </span>
            <h3>
              Run
            </h3>
            <p>
              Bando Server provides the infrastructure needed to
              manage your content and make data available to your application.
            </p>
          </div>

          <div class="flow-step">
            <span class="flow-eyebrow">
              Step 03
            </span>
            <h3>
              Consume
            </h3>
            <p>
              Your application consumes data through the API
              or the tools provided by the Bando ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ARCHITECTURE -->
    <section class="section section-alt" id="arquitetura">
      <div class="wrap">
        <div class="section-head">
          <span class="eyebrow">
            Architecture
          </span>
          <h2>
            Modular by nature.
          </h2>
          <p>
            Bando is organized as an ecosystem of applications
            and packages that can evolve independently.
          </p>
        </div>

        <div class="feature-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <span>01</span>
            </div>
            <h3>
              Core
            </h3>
            <p>
              The foundation of Bando: schemas, types, validations,
              and fundamental abstractions used across the ecosystem.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <span>02</span>
            </div>
            <h3>
              Server
            </h3>
            <p>
              The application responsible for running the CMS,
              managing data, and providing the backend infrastructure.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <span>03</span>
            </div>
            <h3>
              Studio
            </h3>
            <p>
              The React interface used to manage the content
              defined through your project's collections.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- OPEN SOURCE -->
    <section class="section" id="open-source">
      <div class="wrap">
        <div class="section-head">
          <span class="eyebrow">
            Open source
          </span>
          <h2>
            Built in public.
          </h2>
          <p>
            Bando is born as an open source project. Its architecture,
            technical decisions, and evolution will be developed
            transparently and openly with the community.
          </p>
        </div>

        <div class="oss-grid">
          <div class="oss-card">
            <div class="oss-card-head">
              <svg width="16" height="16" viewBox="0 0 16 16">
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                />
              </svg>
              Bando-CMS
            </div>

            <div class="oss-stat-row">
              <span class="label">Status</span>
              <span class="val">In development</span>
            </div>
            <div class="oss-stat-row">
              <span class="label">License</span>
              <span class="val">MIT</span>
            </div>
            <div class="oss-stat-row">
              <span class="label">Language</span>
              <span class="val">TypeScript</span>
            </div>
            <div class="oss-stat-row">
              <span class="label">Architecture</span>
              <span class="val">Self-hosted</span>
            </div>
          </div>

          <ul class="oss-list">
            <li>
              <span class="num">01</span>
              <div>
                <h4>
                  Open RFCs
                </h4>
                <p>
                  Important architectural decisions can be discussed
                  publicly before they are implemented.
                </p>
              </div>
            </li>

            <li>
              <span class="num">02</span>
              <div>
                <h4>
                  Open contributions
                </h4>
                <p>
                  Issues, pull requests, and community proposals
                  are part of Bando's evolution.
                </p>
              </div>
            </li>

            <li>
              <span class="num">03</span>
              <div>
                <h4>
                  No vendor lock-in
                </h4>
                <p>
                  The project can run on your own infrastructure
                  and your data remains yours.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- ROADMAP -->
    <section class="section section-alt" id="roadmap">
      <div class="wrap">
        <div class="section-head">
          <span class="eyebrow">
            Roadmap
          </span>
          <h2>
            What's next.
          </h2>
          <p>
            Bando is still in development. Some capabilities
            are part of the project's planned evolution.
          </p>
        </div>

        <div class="flow">
          <div class="flow-step">
            <span class="flow-eyebrow">
              Planned
            </span>
            <h3>
              Realtime
            </h3>
            <p>
              Real-time synchronization of changes through
              WebSocket.
            </p>
          </div>

          <div class="flow-step">
            <span class="flow-eyebrow">
              Planned
            </span>
            <h3>
              Workflows
            </h3>
            <p>
              Tools for publishing, reviewing, and collaborating
              across different team members.
            </p>
          </div>

          <div class="flow-step">
            <span class="flow-eyebrow">
              Planned
            </span>
            <h3>
              Ecosystem
            </h3>
            <p>
              More packages, integrations, and tools to make
              Bando a complete content platform.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="final-cta" id="comecar">
      <div class="wrap">
        <span
          class="eyebrow"
          style="justify-content:center;"
        >
          The project starts here
        </span>
        <h2>
          Give your content an infrastructure you can control.
        </h2>
        <p>
          Bando is still being built.
          The next line of code could be yours.
        </p>

        <div class="final-actions">
          <div class="install-line">
            <span>
              <span class="dollar">$</span>
              npm create bando-cms@latest
            </span>
            <button
              class="copy-btn"
              aria-label="Copy command"
              data-copy="npm create bando-cms@latest"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
              >
                <rect
                  x="9"
                  y="9"
                  width="12"
                  height="12"
                  rx="2"
                />
                <path
                  d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"
                />
              </svg>
            </button>
          </div>

          <a
            class="btn btn-ghost"
            href="https://github.com/Bando-CMS"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
`;