export const homeMarkup = `

    <!-- HERO -->

    <section class="hero">

      <div class="wrap hero-grid">

        <div>

          <span class="eyebrow">

            Open source · TypeScript-first · Self-hosted

          </span>

          <h1 class="hero-headline">

            Constrói a tua aplicação. O Bando trata do <em>conteúdo.</em>

          </h1>

          <p class="hero-sub">

            Bando é um CMS headless open source para developers.

            Define o teu conteúdo em TypeScript e deixa o Bando tratar

            da infraestrutura necessária para armazenar, gerir e disponibilizar

            os dados da tua aplicação.

          </p>

          <div class="hero-actions">

            <a class="btn btn-primary" href="/docs">

              Começar a construir

            </a>

            <a

              class="btn btn-ghost"

              href="https://github.com/Bando-CMS"

              target="_blank"

              rel="noopener noreferrer"

            >

              Ver código-fonte

            </a>

          </div>

          <div class="install-line">

            <span>

              <span class="dollar">$</span>

              npm install bando-cms

            </span>

            <button

              class="copy-btn"

              aria-label="Copiar comando"

              data-copy="npm install bando-cms"

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

              <span class="tok-str">'bando-cms'</span>

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

              schema definido

              <span class="arrow">↓</span>

              Studio + API + tipos

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

              O teu conteúdo.<br>

              <em>Num Studio feito para ele.</em>

            </h2>

          </div>

          <p>

            O Bando Studio foi pensado para trabalhar com o conteúdo

            definido pelo teu projeto. O objetivo é manter a experiência

            editorial próxima da arquitetura da aplicação.

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

              Substitui "studio.png" pelo caminho da tua screenshot.

              Exemplo:

              /images/studio.png

            -->

            <img

              src="/studio.png"

              alt="Bando Studio — interface de gestão de conteúdo"

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

            Aplicação

          </span>

        </div>

      </div>

    </section>


    <!-- FEATURES -->

    <section class="section" id="recursos">

      <div class="wrap">

        <div class="section-head">

          <span class="eyebrow">

            Recursos

          </span>

          <h2>

            Infraestrutura de conteúdo pensada para developers.

          </h2>

          <p>

            O Bando transforma schemas TypeScript numa infraestrutura

            completa para definir, gerir e consumir conteúdo nas tuas aplicações.

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

              Schema como código

            </h3>

            <p>

              Define tipos, validações, relações e configurações

              diretamente em TypeScript. O schema vive no teu projeto

              e pode ser versionado com Git.

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

              O conteúdo fica disponível através da API do Bando

              para ser consumido pelas aplicações que construíres.

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

              Studio em React

            </h3>

            <p>

              Uma interface editorial construída para trabalhar com

              as collections e campos definidos pelo teu projeto.

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

              A configuração e a arquitetura do conteúdo fazem parte

              do código, permitindo trabalhar com Git, revisão e colaboração.

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

              Evolução contínua

            </h3>

            <p>

              O Bando continua a evoluir com novas capacidades,

              integrações e ferramentas para tornar a infraestrutura

              de conteúdo cada vez mais completa.

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

              Corre o Bando na tua máquina, num VPS ou na tua própria

              infraestrutura. Os teus dados permanecem sob o teu controlo.

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

            Define. Consulta. Renderiza.

          </h2>

          <p>

            O mesmo schema que define o conteúdo serve de base para

            trabalhar com os dados na tua aplicação.

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

            <span class="tok-str">'bando-cms'</span>

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

            { createBandoClient }

            <span class="tok-kw">from</span>

            <span class="tok-str">'bando-cms'</span>

            <br>

            <span class="ln">2</span>

            <br>

            <span class="ln">3</span>

            <span class="tok-kw">const</span>

            bando = createBandoClient({

            <br>

            <span class="ln">4</span>

            &nbsp;&nbsp;baseUrl:

            <span class="tok-str">'http://localhost:3333'</span>,

            <br>

            <span class="ln">5</span>

            });

            <br>

            <br>

            <span class="ln">6</span>

            <span class="tok-kw">const</span>

            { data, total } =

            <span class="tok-kw">await</span>

            bando

            <br>

            <span class="ln">7</span>

            &nbsp;.<span class="tok-fn">collection</span>(<span class="tok-str">'posts'</span>)

            <br>

            <span class="ln">8</span>

            &nbsp;.<span class="tok-fn">findMany</span>({

            <br>

            <span class="ln">9</span>

            &nbsp;&nbsp;limit: <span class="tok-num">10</span>,

            <br>

            <span class="ln">10</span>

            &nbsp;&nbsp;sort:

            <span class="tok-str">'-createdAt'</span>,

            <br>

            <span class="ln">11</span>

            &nbsp;&nbsp;filters: {

            <br>

            <span class="ln">12</span>

            &nbsp;&nbsp;&nbsp;&nbsp;published:

            <span class="tok-kw">true</span>,

            <br>

            <span class="ln">13</span>

            &nbsp;&nbsp;}

            <br>

            <span class="ln">14</span>

            });

          </div>


          <div

            class="tabpanel"

            data-panel="component"

          >

            <span class="ln">1</span>

            <span class="tok-kw">import</span>

            { createBandoClient }

            <span class="tok-kw">from</span>

            <span class="tok-str">'bando-cms'</span>

            <br>

            <span class="ln">2</span>

            <br>

            <span class="ln">3</span>

            <span class="tok-kw">const</span>

            bando =

            <span class="tok-fn">createBandoClient</span>({

            <br>

            <span class="ln">4</span>

            &nbsp;&nbsp;baseUrl:

            <span class="tok-str">'http://localhost:3333'</span>

            <br>

            <span class="ln">5</span>
            });
            

            <br>
            <span class="ln">6</span>
            <br>

            <span class="ln">7</span>

            <span class="tok-kw">export async function</span>

            <span class="tok-fn">getPosts</span>() {

            <br>

            <span class="ln">8</span>

            &nbsp;&nbsp;<span class="tok-kw">const</span>

            { data } =

            <span class="tok-kw">await</span>

            bando

            <br>

            <span class="ln">9</span>

            &nbsp;&nbsp;&nbsp;&nbsp;.<span class="tok-fn">collection</span>(<span class="tok-str">'posts'</span>)

            <br>

            <span class="ln">10</span>

            &nbsp;&nbsp;&nbsp;&nbsp;.<span class="tok-fn">findMany</span>({

            <br>

            <span class="ln">11</span>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;limit:

            <span class="tok-num">12</span>

            <br>

            <span class="ln">13</span>

            &nbsp;&nbsp;&nbsp;&nbsp;});

            <br>

            <span class="ln">14</span>

            <span class="tok-kw">&nbsp;&nbsp;&nbsp;&nbsp;return</span> data;

            <br>
            
            <span class="ln">15</span>

            }

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

            O código é teu. A infraestrutura também.

          </h2>

          <p>

            O Bando é open source e pode ser executado na tua própria

            infraestrutura. Tens acesso ao código, aos teus dados e à

            forma como o conteúdo é integrado na tua aplicação.

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

              <span class="label">Estado</span>

              <span class="val">Disponível</span>

            </div>

            <div class="oss-stat-row">

              <span class="label">Licença</span>

              <span class="val">MIT</span>

            </div>

            <div class="oss-stat-row">

              <span class="label">Linguagem</span>

              <span class="val">TypeScript</span>

            </div>

            <div class="oss-stat-row">

              <span class="label">Arquitetura</span>

              <span class="val">Self-hosted</span>

            </div>

          </div>


          <ul class="oss-list">

            <li>

              <span class="num">01</span>

              <div>

                <h4>

                  Código aberto

                </h4>

                <p>

                  O código-fonte está disponível publicamente para

                  consulta, utilização e contribuição.

                </p>

              </div>

            </li>


            <li>

              <span class="num">02</span>

              <div>

                <h4>

                  Contribuições abertas

                </h4>

                <p>

                  Issues, pull requests e propostas da comunidade

                  fazem parte da evolução do Bando.

                </p>

              </div>

            </li>


            <li>

              <span class="num">03</span>

              <div>

                <h4>

                  Sem vendor lock-in

                </h4>

                <p>

                  O projeto pode ser executado na tua própria

                  infraestrutura e os teus dados continuam teus.

                </p>

              </div>

            </li>

          </ul>

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

          Começa agora

        </span>

        <h2>

          Menos infraestrutura. Mais produto.

        </h2>

        <p>

          Define o teu conteúdo, executa o Bando e concentra-te

          na aplicação que estás realmente a construir.

        </p>


        <div class="final-actions">

          <div class="install-line">

            <span>

              <span class="dollar">$</span>

              npm install bando-cms

            </span>

            <button

              class="copy-btn"

              aria-label="Copiar comando"

              data-copy="npm install bando-cms"

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

            Ver no GitHub

          </a>

        </div>

      </div>

    </section>

`;