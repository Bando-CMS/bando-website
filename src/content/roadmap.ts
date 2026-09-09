export const roadmapMarkup = `
  <!-- =====================================================
       HERO
  ====================================================== -->
  <section class="page-hero">
    <div class="wrap">
      <div class="page-hero-inner">
        <span class="eyebrow">
          Open source · Roadmap público
        </span>

        <h1>
          Veja para onde o Bando está indo
          <em>a seguir.</em>
        </h1>

        <p>
          O Bando já está disponível na versão v1.0.0, com sua
          infraestrutura principal implementada: motor de schemas,
          camada de banco de dados, API, autenticação, client,
          CLI e Studio.
          Este roadmap mostra o que já existe hoje e o que vem a seguir.
        </p>

        <div class="page-meta">
          <span class="meta-tag">Licença MIT</span>
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
            O CMS deve trabalhar para o desenvolvedor.
          </h2>
        </div>

        <div class="manifesto-content">
          <p>
            O Bando começou com uma ideia simples:
            <strong>
              o conteúdo da sua aplicação deve poder viver
              na sua própria infraestrutura.
            </strong>
          </p>

          <p>
            Criamos um headless CMS moderno baseado em uma filosofia
            diferente: local-first, open source, self-hosted e pensado
            para a forma como os desenvolvedores realmente trabalham.
          </p>

          <p>
            Hoje, o Bando oferece a base necessária para definir conteúdo
            em TypeScript, armazená-lo com PostgreSQL, disponibilizá-lo
            através de uma API, proteger o acesso com autenticação,
            consultá-lo através de um client tipado e gerenciá-lo
            através do Bando Studio.
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
          Arquitetura
        </span>

        <h2>
          Uma base modular. Um sistema completo.
        </h2>

        <p>
          O Bando é organizado como um monorepo modular. Cada parte
          possui uma responsabilidade clara, trabalhando em conjunto
          como uma infraestrutura completa de conteúdo.
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
            Defina seu conteúdo usando TypeScript e
            <code>defineCollection()</code>.
          </p>
        </div>

        <div class="system-box">
          <div class="system-number">02</div>
          <h3>Engine</h3>
          <p>
            O motor de schemas descobre suas collections,
            campos, relacionamentos e configurações.
          </p>
        </div>

        <div class="system-box">
          <div class="system-number">03</div>
          <h3>Database</h3>
          <p>
            A camada de banco de dados armazena seu conteúdo
            e fornece operações CRUD através do PostgreSQL.
          </p>
        </div>

        <div class="system-box">
          <div class="system-number">04</div>
          <h3>Studio</h3>
          <p>
            O Bando Studio descobre collections e permite
            gerenciar documentos através de uma interface visual.
          </p>
        </div>

        <div class="system-box">
          <div class="system-number">05</div>
          <h3>API</h3>
          <p>
            A API REST disponibiliza seu conteúdo para
            as aplicações e frontends que você construir.
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
          Experiência do desenvolvedor
        </span>

        <h2>
          Defina seu conteúdo em código.
        </h2>

        <p>
          O Bando permite definir seu modelo de conteúdo diretamente
          em TypeScript, mantendo o schema próximo da sua aplicação.
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
          O que existe hoje. O que vem a seguir.
        </h2>

        <p>
          O Bando v1.0.0 fornece a infraestrutura principal necessária
          para executar e utilizar a plataforma. O roadmap agora foca
          na expansão das suas capacidades e da experiência do desenvolvedor.
          As prioridades podem evoluir de acordo com o feedback da comunidade.
        </p>
      </div>

      <div class="roadmap-list">


        <!-- PHASE 0 -->
        <div class="roadmap-item">
          <div class="roadmap-phase">
            Fase 0<br>
            Fundação
          </div>

          <div class="roadmap-content">
            <h3>
              Fundação do Projeto
            </h3>

            <p>
              O monorepo, as ferramentas, a configuração TypeScript,
              o workspace, o ambiente Docker e a estrutura principal
              do projeto estão implementados.
            </p>

            <div class="roadmap-tasks">
              <span class="task">Monorepo</span>
              <span class="task">TypeScript</span>
              <span class="task">pnpm</span>
              <span class="task">Docker</span>
              <span class="task">PostgreSQL</span>
              <span class="task">Estrutura do projeto</span>
            </div>
          </div>

          <div class="roadmap-status status-complete">
            ● Concluído
          </div>
        </div>


        <!-- PHASE 1 -->
        <div class="roadmap-item">
          <div class="roadmap-phase">
            Fase 1<br>
            Schema
          </div>

          <div class="roadmap-content">
            <h3>
              Motor de Schemas
            </h3>

            <p>
              O motor de schemas fornece definições de collections,
              descoberta de schemas, definição de campos, relacionamentos,
              validação de referências e tipos TypeScript.
            </p>

            <div class="roadmap-tasks">
              <span class="task">defineCollection()</span>
              <span class="task">Campos</span>
              <span class="task">Descoberta de schemas</span>
              <span class="task">Tipos TypeScript</span>
              <span class="task">Validação</span>
              <span class="task">Relacionamentos</span>
              <span class="task">Validação de referências</span>
              <span class="task">Proteção de referências</span>
            </div>
          </div>

          <div class="roadmap-status status-complete">
            ● Concluído
          </div>
        </div>


        <!-- PHASE 2 -->
        <div class="roadmap-item">
          <div class="roadmap-phase">
            Fase 2<br>
            Database
          </div>

          <div class="roadmap-content">
            <h3>
              Motor de Banco de Dados
            </h3>

            <p>
              A persistência com PostgreSQL está funcional, com operações
              CRUD, queries, adapters e integração com collections.
            </p>

            <div class="roadmap-tasks">
              <span class="task">PostgreSQL</span>
              <span class="task">Persistência</span>
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
            Fase 3<br>
            API
          </div>

          <div class="roadmap-content">
            <h3>
              Camada de API
            </h3>

            <p>
              A API HTTP fornece operações para collections e documentos,
              incluindo leitura, criação, atualização, exclusão,
              filtragem e validação.
            </p>

            <div class="roadmap-tasks">
              <span class="task">REST</span>
              <span class="task">Collections</span>
              <span class="task">Documentos</span>
              <span class="task">Queries</span>
              <span class="task">Filtros</span>
              <span class="task">Validação</span>
            </div>
          </div>

          <div class="roadmap-status status-complete">
            ● Concluído
          </div>
        </div>


        <!-- PHASE 4 -->
        <div class="roadmap-item">
          <div class="roadmap-phase">
            Fase 4<br>
            Auth
          </div>

          <div class="roadmap-content">
            <h3>
              Autenticação e Autorização
            </h3>

            <p>
              A autenticação e autorização fornecem a base para proteger
              o Studio e a API através de controles de acesso seguros.
            </p>

            <div class="roadmap-tasks">
              <span class="task">Login</span>
              <span class="task">JWT</span>
              <span class="task">Sessões</span>
              <span class="task">Logout</span>
              <span class="task">RBAC</span>
              <span class="task">Permissões</span>
            </div>
          </div>

          <div class="roadmap-status status-complete">
            ● Concluído
          </div>
        </div>


        <!-- PHASE 5 -->
        <div class="roadmap-item">
          <div class="roadmap-phase">
            Fase 5<br>
            Studio
          </div>

          <div class="roadmap-content">
            <h3>
              Bando Studio
            </h3>

            <p>
              O Bando Studio conecta-se à API real, fornece um dashboard,
              descobre collections e schemas e permite gerenciar documentos
              através da interface.
            </p>

            <div class="roadmap-tasks">
              <span class="task">React</span>
              <span class="task">Autenticação</span>
              <span class="task">Explorador de collections</span>
              <span class="task">Listagem de documentos</span>
              <span class="task">Criar</span>
              <span class="task">Editar</span>
              <span class="task">Excluir</span>
              <span class="task">Dashboard</span>
              <span class="task">Seletores de relacionamentos</span>
            </div>
          </div>

          <div class="roadmap-status status-complete">
            ● Concluído
          </div>
        </div>


        <!-- PHASE 6 -->
        <div class="roadmap-item">
          <div class="roadmap-phase">
            Fase 6<br>
            Client
          </div>

          <div class="roadmap-content">
            <h3>
              Experiência do Desenvolvedor
            </h3>

            <p>
              O client TypeScript fornece operações CRUD, queries com filtros,
              paginação e tipagem genérica de collections para trabalhar
              com o Bando diretamente na sua aplicação.
            </p>

            <div class="roadmap-tasks">
              <span class="task">Client</span>
              <span class="task">Queries tipadas</span>
              <span class="task">Tipagem genérica</span>
              <span class="task">Geração de tipos</span>
              <span class="task">Integrações com frameworks</span>
              <span class="task">CLI</span>
            </div>
          </div>

          <div class="roadmap-status status-complete">
            ● Concluído
          </div>
        </div>


        <!-- PHASE 7 -->
        <div class="roadmap-item">
          <div class="roadmap-phase">
            Fase 7<br>
            Conteúdo
          </div>

          <div class="roadmap-content">
            <h3>
              Experiência de Conteúdo
            </h3>

            <p>
              Expandir a experiência editorial com fluxos de conteúdo
              mais completos e capacidades mais avançadas de mídia
              e publicação.
            </p>

            <div class="roadmap-tasks">
              <span class="task">Rich Text</span>
              <span class="task">Mídia</span>
              <span class="task">Uploads</span>
              <span class="task">Rascunhos</span>
              <span class="task">Publicação</span>
              <span class="task">Preview</span>
              <span class="task">Revisões</span>
            </div>
          </div>

          <div class="roadmap-status status-planned">
            ○ Planejado
          </div>
        </div>


        <!-- PHASE 8 -->
        <div class="roadmap-item">
          <div class="roadmap-phase">
            Fase 8<br>
            Extensibilidade
          </div>

          <div class="roadmap-content">
            <h3>
              Sistema de Extensões
            </h3>

            <p>
              Dar aos desenvolvedores mais controle sobre o Bando através
              de plugins, adapters, campos personalizados, hooks e integrações.
            </p>

            <div class="roadmap-tasks">
              <span class="task">Plugins</span>
              <span class="task">Adapters</span>
              <span class="task">Campos personalizados</span>
              <span class="task">Hooks</span>
              <span class="task">Integrações</span>
            </div>
          </div>

          <div class="roadmap-status status-planned">
            ○ Planejado
          </div>
        </div>


        <!-- PHASE 9 -->
        <div class="roadmap-item">
          <div class="roadmap-phase">
            Fase 9<br>
            Realtime
          </div>

          <div class="roadmap-content">
            <h3>
              Tempo Real
            </h3>

            <p>
              Adicionar atualizações em tempo real, WebSockets,
              presença e fluxos de trabalho colaborativos.
            </p>

            <div class="roadmap-tasks">
              <span class="task">WebSockets</span>
              <span class="task">Atualizações em tempo real</span>
              <span class="task">Presença</span>
              <span class="task">Colaboração</span>
            </div>
          </div>

          <div class="roadmap-status status-planned">
            ○ Planejado
          </div>
        </div>


        <!-- PHASE 10 -->
        <div class="roadmap-item">
          <div class="roadmap-phase">
            Fase 10<br>
            Produção
          </div>

          <div class="roadmap-content">
            <h3>
              Preparação para Produção
            </h3>

            <p>
              Fortalecer o Bando para ambientes de produção mais exigentes,
              com maior segurança, migrations, backups, observabilidade
              e ferramentas operacionais.
            </p>

            <div class="roadmap-tasks">
              <span class="task">Segurança</span>
              <span class="task">Migrations</span>
              <span class="task">Backups</span>
              <span class="task">Observabilidade</span>
              <span class="task">Docker para produção</span>
              <span class="task">Documentação</span>
            </div>
          </div>

          <div class="roadmap-status status-planned">
            ○ Planejado
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
            Versão atual
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
          <span>Infraestrutura principal disponível</span>
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
          Algumas coisas não são negociáveis.
        </h2>
      </div>

      <div class="principles-grid">

        <div class="principle">
          <span class="principle-number">01</span>

          <h3>
            Local-first
          </h3>

          <p>
            O desenvolvimento deve funcionar localmente e dar aos
            desenvolvedores controle sobre como e onde sua
            infraestrutura é executada.
          </p>
        </div>


        <div class="principle">
          <span class="principle-number">02</span>

          <h3>
            Open source
          </h3>

          <p>
            O core é aberto, auditável e desenvolvido publicamente
            junto com a comunidade.
          </p>
        </div>


        <div class="principle">
          <span class="principle-number">03</span>

          <h3>
            Self-hosted
          </h3>

          <p>
            Os desenvolvedores podem executar o Bando em sua própria
            infraestrutura e manter o controle sobre seus dados.
          </p>
        </div>


        <div class="principle">
          <span class="principle-number">04</span>

          <h3>
            TypeScript-first
          </h3>

          <p>
            Schemas, APIs, queries e ferramentas devem oferecer
            uma experiência de desenvolvimento fortemente tipada.
          </p>
        </div>


        <div class="principle">
          <span class="principle-number">05</span>

          <h3>
            Extensível
          </h3>

          <p>
            O Bando deve se adaptar a diferentes stacks,
            aplicações e necessidades dos desenvolvedores.
          </p>
        </div>


        <div class="principle">
          <span class="principle-number">06</span>

          <h3>
            Sem lock-in
          </h3>

          <p>
            Seus dados e sua infraestrutura permanecem
            sob seu controle.
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
            Desenvolvimento aberto
          </span>

          <h2>
            O trabalho permanece visível.
          </h2>

          <p>
            O Bando é desenvolvido de forma aberta. A comunidade pode
            acompanhar releases, discutir decisões, reportar problemas
            e contribuir diretamente para o projeto.
          </p>

          <ul class="public-list">
            <li>
              Issues públicas
            </li>

            <li>
              RFCs para decisões importantes
            </li>

            <li>
              Pull requests abertos
            </li>

            <li>
              Roadmap público
            </li>

            <li>
              Releases públicas
            </li>

            <li>
              Documentação desde o primeiro dia
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
        O que vem a seguir
      </span>

      <h2>
        O Bando v1.0.0 é apenas o começo.
      </h2>

      <p>
        Use o Bando hoje, explore o código, acompanhe o roadmap
        ou entre na comunidade e ajude a definir o que vem a seguir.
      </p>

      <div class="cta-actions">

        <a
          class="btn btn-primary"
          href="https://github.com/Bando-CMS"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explorar GitHub
        </a>

        <a
          class="btn btn-ghost"
          href="/"
        >
          Voltar para o Bando
        </a>

      </div>
    </div>
  </section>
`;