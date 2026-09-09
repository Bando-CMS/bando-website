import Link from "next/link";
import type { ReactNode } from "react";

type Language = "pt" | "en";

const copy = {
  pt: {
    eyebrow: "Bando CMS · v1.0.0",

    title: "Documentação para construir conteúdo <em>com código.</em>",

    intro:
      "O Bando é um CMS headless, open source e self-hosted. Define collections em TypeScript, gere documentos no Studio e consome conteúdo através da API REST.",

    onThisPage: "Nesta página",

    gettingStarted: "Começar",
    requirements: "Requisitos e instalação",
    firstProject: "Primeiro projeto",

    using: "Usar o Bando",
    usingTitle: "Usa o Bando como backend de conteúdo",
    usingText:
      "O Bando fica responsável pelo conteúdo. A tua aplicação fica responsável pela experiência que os utilizadores veem.",

    workflow: "O fluxo é simples",
    workflowText:
      "Define o conteúdo no código, gere-o através do Studio e consome-o na tua aplicação através da API ou do client TypeScript.",

    nextjs: "Exemplo: Blog com Next.js",
    nextjsText:
      "O Bando pode funcionar como backend de conteúdo de uma aplicação Next.js. O frontend continua no teu projeto e o Bando fornece os dados.",

    installClient: "Instalar o client",
    clientSetup: "Configurar o client",

    consumeContent: "Consumir conteúdo",
    renderContent: "Renderizar no frontend",

    core: "Conceitos base",
    collections: "Collections e fields",
    documents: "Documentos",
    relations: "Relations",

    server: "Server",
    config: "Configuração e autenticação",
    api: "REST API",

    client: "Client TypeScript",
    studio: "Studio",
    architecture: "Arquitetura",
    contributing: "Contribuir",

    requirementsText:
      "Precisas de Node.js, pnpm, Docker e PostgreSQL. O repositório inclui uma configuração Docker para PostgreSQL.",

    installText:
      "Instala as dependências, inicia PostgreSQL e arranca as aplicações. O comando de desenvolvimento executa as apps do monorepo em paralelo.",

    firstProjectText:
      "O server regista collections definidas em código. O exemplo incluído regista posts em apps/server/src/collections/posts.ts.",

    fieldsText:
      "Uma collection descreve os campos dos seus documentos. Os helpers disponíveis são string, text, image, richText, boolean, number, date e relation. required é validado antes de persistir um documento.",

    fieldTypesTitle: "Tipos de field",
    fieldTypesIntro:
      "Cada campo é criado por um helper importado de bando-cms. O helper define o tipo de dados guardado e como o Studio renderiza o campo.",
    fieldTypeCol: "Helper",
    fieldTypeDescCol: "Guarda",

    fieldStringDesc: "Texto curto, para títulos, labels ou slugs.",
    fieldTextDesc: "Texto livre, sem limite de tamanho definido pelo helper.",
    fieldImageDesc: "Referência a um ficheiro de imagem carregado.",
    fieldRichTextDesc: "Conteúdo formatado, editado no editor rich text do Studio.",
    fieldBooleanDesc: "Verdadeiro ou falso.",
    fieldNumberDesc: "Valor numérico.",
    fieldDateDesc: "Data e hora.",
    fieldRelationDesc:
      "Um ID de documento de outra collection, ou uma lista de IDs quando multiple: true.",

    fieldOptionsTitle: "Opções comuns a todos os fields",
    fieldOptionsIntro:
      "Além do tipo, cada helper aceita as mesmas três opções. Nenhuma é obrigatória.",
    fieldOptionCol: "Opção",
    fieldOptionDescCol: "Efeito",

    optRequiredDesc:
      "Obriga o campo a ter um valor; o Bando rejeita o documento antes de o persistir se faltar.",
    optDefaultDesc:
      "Valor usado quando o campo não é fornecido ao criar o documento.",
    optDescriptionDesc:
      "Texto de apoio mostrado junto ao campo no formulário do Studio.",

    fieldExampleTitle: "Exemplo com opções",
    fieldExampleText:
      "required, default e description combinam-se livremente em qualquer helper, incluindo relation.",

    relationOptionsTitle: "Opções específicas de relation",
    relationCollectionOpt: "collection",
    relationCollectionDesc:
      "Nome da collection registada que contém os documentos referenciados. Obrigatório.",
    relationMultipleOpt: "multiple",
    relationMultipleDesc:
      "Quando true, guarda uma lista de IDs em vez de um único ID. O valor por omissão é false.",

    documentsText:
      "Cada documento tem id, collection, data, createdAt e updatedAt. Usa a API autenticada ou o Studio para criar, editar e apagar documentos.",

    relationsText:
      "Uma relation guarda IDs de documentos no JSON. Uma relation simples representa uma referência; multiple: true aceita uma lista de IDs. O Bando valida a collection destino e todos os IDs ao criar ou atualizar.",

    relationDelete:
      "Não é possível apagar um documento que ainda é referenciado. A API responde com 409 até que as referências sejam removidas. Relations inversas não são sincronizadas automaticamente na v1.0.0.",

    configText:
      "Define DATABASE_URL, JWT_SECRET e as credenciais do primeiro administrador. BANDO_ADMIN_EMAIL e BANDO_ADMIN_PASSWORD devem ser fornecidos juntos; a password deve ter pelo menos 8 caracteres.",

    apiText:
      "As rotas de collections e documentos exigem Authorization: Bearer <token>. Primeiro inicia sessão em POST /api/auth/login.",

    clientText:
      "O client preserva a API de collection e aceita um generic para os dados do documento. Envia o token nas headers quando consomes a API protegida.",

    clientMethods:
      "findMany(), findById(), create(), update() e delete() estão disponíveis no collection client.",

    studioText:
      "O Studio usa a API real. Inclui dashboard, descoberta de collections e schema, listagem, criação, edição, remoção e selectors dinâmicos para relations. Configura VITE_API_URL para apontar ao server.",

    architectureText:
      "Core define schemas e valida documentos; Database persiste-os; Server expõe a API e autenticação; Client consome a API; Studio fornece a interface editorial.",

    contributingText:
      "Consulta CONTRIBUTING.md no repositório principal. Antes de abrir uma pull request, mantém a alteração focada e executa typecheck, testes e build disponíveis.",

    apiReference: "Referência rápida",
    endpoint: "Endpoint",
    purpose: "Propósito",

    collectionDiscovery: "Listar collections registadas",
    collectionSchema: "Ler o schema de uma collection",
    listDocs: "Listar documentos; suporta limit, offset, sort e filtros por field",
    readDoc: "Ler um documento",
    createDoc: "Criar um documento",
    updateDoc: "Atualizar um documento",
    deleteDoc: "Apagar um documento",

    community: "Visitar a página da comunidade →",
  },

  en: {
    eyebrow: "Bando CMS · v1.0.0",

    title: "Documentation for building content <em>with code.</em>",

    intro:
      "Bando is an open-source, self-hosted headless CMS. Define collections in TypeScript, manage documents in Studio, and consume content through the REST API.",

    onThisPage: "On this page",

    gettingStarted: "Getting started",
    requirements: "Requirements and installation",
    firstProject: "First project",

    using: "Using Bando",
    usingTitle: "Use Bando as your content backend",
    usingText:
      "Bando takes care of your content. Your application stays responsible for the experience your users see.",

    workflow: "The flow is simple",
    workflowText:
      "Define content in code, manage it through Studio, and consume it in your application through the API or TypeScript client.",

    nextjs: "Example: Blog with Next.js",
    nextjsText:
      "Bando can work as the content backend for a Next.js application. Your frontend stays in your project while Bando provides the content.",

    installClient: "Install the client",
    clientSetup: "Configure the client",

    consumeContent: "Consume content",
    renderContent: "Render in the frontend",

    core: "Core concepts",
    collections: "Collections and fields",
    documents: "Documents",
    relations: "Relations",

    server: "Server",
    config: "Configuration and authentication",
    api: "REST API",

    client: "TypeScript client",
    studio: "Studio",
    architecture: "Architecture",
    contributing: "Contributing",

    requirementsText:
      "You need Node.js, pnpm, Docker, and PostgreSQL. The repository includes a Docker configuration for PostgreSQL.",

    installText:
      "Install dependencies, start PostgreSQL, then start the apps. The development command runs monorepo apps in parallel.",

    firstProjectText:
      "The server registers collections defined in code. The included example registers posts in apps/server/src/collections/posts.ts.",

    fieldsText:
      "A collection describes its document fields. Available helpers are string, text, image, richText, boolean, number, date, and relation. required is validated before a document is persisted.",

    fieldTypesTitle: "Field types",
    fieldTypesIntro:
      "Every field is created by a helper imported from bando-cms. The helper defines the data type stored and how Studio renders the field.",
    fieldTypeCol: "Helper",
    fieldTypeDescCol: "Stores",

    fieldStringDesc: "Short text, for titles, labels, or slugs.",
    fieldTextDesc: "Free-form text, with no length limit defined by the helper.",
    fieldImageDesc: "Reference to an uploaded image file.",
    fieldRichTextDesc: "Formatted content, edited in Studio's rich text editor.",
    fieldBooleanDesc: "True or false.",
    fieldNumberDesc: "Numeric value.",
    fieldDateDesc: "Date and time.",
    fieldRelationDesc:
      "A document ID from another collection, or a list of IDs when multiple: true.",

    fieldOptionsTitle: "Options shared by every field",
    fieldOptionsIntro:
      "Besides the type, every helper accepts the same three options. None of them are required.",
    fieldOptionCol: "Option",
    fieldOptionDescCol: "Effect",

    optRequiredDesc:
      "Requires the field to have a value; Bando rejects the document before persisting it if it's missing.",
    optDefaultDesc:
      "Value used when the field isn't provided while creating the document.",
    optDescriptionDesc:
      "Helper text shown next to the field in Studio's form.",

    fieldExampleTitle: "Example with options",
    fieldExampleText:
      "required, default, and description combine freely on any helper, including relation.",

    relationOptionsTitle: "Options specific to relation",
    relationCollectionOpt: "collection",
    relationCollectionDesc:
      "Name of the registered collection containing the referenced documents. Required.",
    relationMultipleOpt: "multiple",
    relationMultipleDesc:
      "When true, stores a list of IDs instead of a single ID. Defaults to false.",

    documentsText:
      "Every document has id, collection, data, createdAt, and updatedAt. Use the authenticated API or Studio to create, edit, and delete documents.",

    relationsText:
      "A relation stores document IDs in JSON. A single relation represents one reference; multiple: true accepts an ID list. Bando validates the target collection and every ID on create and update.",

    relationDelete:
      "A referenced document cannot be deleted. The API returns 409 until references are removed. Inverse relations are not synchronized automatically in v1.0.0.",

    configText:
      "Set DATABASE_URL, JWT_SECRET, and first administrator credentials. BANDO_ADMIN_EMAIL and BANDO_ADMIN_PASSWORD must be set together; the password must be at least 8 characters.",

    apiText:
      "Collection and document routes require Authorization: Bearer <token>. Sign in first with POST /api/auth/login.",

    clientText:
      "The client keeps the collection API and accepts a generic for document data. Send the token in headers when consuming the protected API.",

    clientMethods:
      "findMany(), findById(), create(), update(), and delete() are available from a collection client.",

    studioText:
      "Studio uses the real API. It includes a dashboard, collection and schema discovery, listing, creation, editing, deletion, and dynamic relation selectors. Set VITE_API_URL to your server.",

    architectureText:
      "Core defines schemas and validates documents; Database persists them; Server exposes API and authentication; Client consumes the API; Studio is the editorial interface.",

    contributingText:
      "See CONTRIBUTING.md in the main repository. Before opening a pull request, keep the change focused and run the available typecheck, tests, and build.",

    apiReference: "Quick reference",
    endpoint: "Endpoint",
    purpose: "Purpose",

    collectionDiscovery: "List registered collections",
    collectionSchema: "Read a collection schema",
    listDocs: "List documents; supports limit, offset, sort, and field filters",
    readDoc: "Read a document",
    createDoc: "Create a document",
    updateDoc: "Update a document",
    deleteDoc: "Delete a document",

    community: "Visit the community page →",
  },
} as const;

const schema = `import {
  boolean,
  defineCollection,
  image,
  richText,
  text,
} from "bando-cms";

export const posts = defineCollection({
  name: "posts",
  fields: {
    title: text({ required: true }),
    slug: text({ required: true }),
    cover: image(),
    content: richText(),
    published: boolean({ default: false }),
  },
});`;

const fieldOptionsExample = `title: text({
  required: true,
  description: "Shown as the page heading and in the Studio list view.",
}),
subtitle: text({
  description: "Optional short subtitle.",
}),
featured: boolean({
  default: false,
  description: "Highlight this post on the homepage.",
}),
publishedAt: date({
  description: "When the post should go live.",
}),
author: relation({
  collection: "authors",
  required: true,
  description: "The author of this post.",
}),
tags: relation({
  collection: "tags",
  multiple: true,
  description: "Used for filtering and search.",
}),`;

const clientSetup = `import {
  createBandoClient,
} from "bando-cms";

type Post = {
  title: string;
  content: string;
  published: boolean;
  author: string;
  reviewers?: string[];
};

export const bando = createBandoClient({
  baseUrl: process.env.BANDO_API_URL!,
  headers: {
    Authorization: \`Bearer \${process.env.BANDO_TOKEN}\`,
  },
});`;

const clientQuery = `const { data, total } =
  await bando
    .collection<Post>("posts")
    .findMany({
      limit: 10,
      sort: "-createdAt",
      filters: {
        published: true,
      },
    });`;

const nextjsExample = `export default async function Home() {
  const { data: posts } =
    await bando
      .collection<Post>("posts")
      .findMany({
        filters: {
          published: true,
        },
        sort: "-createdAt",
      });

  return (
    <main>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.data.title}</h2>
          <p>{post.data.content}</p>
        </article>
      ))}
    </main>
  );
}`;

const fieldTypeRowsKey = [
  "string",
  "text",
  "image",
  "richText",
  "boolean",
  "number",
  "date",
  "relation",
] as const;

const rowsKey = [
  ["GET", "/api/collections"],
  ["GET", "/api/collections/:name"],
  ["GET", "/api/:collection"],
  ["GET", "/api/:collection/:id"],
  ["POST", "/api/:collection"],
  ["PATCH", "/api/:collection/:id"],
  ["DELETE", "/api/:collection/:id"],
] as const;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function highlightCode(value: string, language: string) {
  const escaped = escapeHtml(value);

  const strings: string[] = [];

  const protectedCode = escaped.replace(
    /(`(?:\\.|[^`])*`|"(?:\\.|[^"])*"|'(?:\\.|[^'])*')/g,
    (match) => {
      const index = strings.push(match) - 1;
      return `___STRING_${index}___`;
    },
  );

  let result = protectedCode;

  result = result.replace(
    /(\/\/.*$|#.*$)/gm,
    '<span class="code-comment">$1</span>',
  );

  if (
    language === "ts" ||
    language === "tsx" ||
    language === "typescript"
  ) {
    result = result.replace(
      /\b(import|from|export|const|let|var|type|interface|return|await|async|true|false|null|undefined|new|function)\b/g,
      '<span class="code-keyword">$1</span>',
    );

    result = result.replace(
      /\b(string|number|boolean|unknown|void)\b/g,
      '<span class="code-type">$1</span>',
    );

    result = result.replace(
      /\b([A-Za-z_$][\w$]*)\s*(?=\()/g,
      '<span class="code-function">$1</span>',
    );
  }

  result = result.replace(
    /\b(\d+(?:\.\d+)?)\b/g,
    '<span class="code-number">$1</span>',
  );

  result = result.replace(
    /___STRING_(\d+)___/g,
    (_, index) => `<span class="code-string">${strings[index]}</span>`,
  );

  return result;
}

export function Documentation({
  language,
}: {
  language: Language;
}) {
  const t = copy[language];
  const prefix = language === "en" ? "/en" : "";

  const nav = [
    ["getting-started", t.gettingStarted],
    ["using-bando", t.using],
    ["collections", t.collections],
    ["relations", t.relations],
    ["server", t.server],
    ["client", t.client],
    ["studio", t.studio],
    ["architecture", t.architecture],
    ["contributing", t.contributing],
  ];

  const fieldTypeRows = [
    [fieldTypeRowsKey[0], t.fieldStringDesc],
    [fieldTypeRowsKey[1], t.fieldTextDesc],
    [fieldTypeRowsKey[2], t.fieldImageDesc],
    [fieldTypeRowsKey[3], t.fieldRichTextDesc],
    [fieldTypeRowsKey[4], t.fieldBooleanDesc],
    [fieldTypeRowsKey[5], t.fieldNumberDesc],
    [fieldTypeRowsKey[6], t.fieldDateDesc],
    [fieldTypeRowsKey[7], t.fieldRelationDesc],
  ];

  const fieldOptionRows = [
    ["required", t.optRequiredDesc],
    ["default", t.optDefaultDesc],
    ["description", t.optDescriptionDesc],
  ];

  const relationOptionRows = [
    [t.relationCollectionOpt, t.relationCollectionDesc],
    [t.relationMultipleOpt, t.relationMultipleDesc],
  ];

  const rows = [
    [rowsKey[0][0], rowsKey[0][1], t.collectionDiscovery],
    [rowsKey[1][0], rowsKey[1][1], t.collectionSchema],
    [rowsKey[2][0], rowsKey[2][1], t.listDocs],
    [rowsKey[3][0], rowsKey[3][1], t.readDoc],
    [rowsKey[4][0], rowsKey[4][1], t.createDoc],
    [rowsKey[5][0], rowsKey[5][1], t.updateDoc],
    [rowsKey[6][0], rowsKey[6][1], t.deleteDoc],
  ];

  return (
    <main className="docs-page">
      <section className="docs-hero">
        <div className="wrap">
          <span className="eyebrow">{t.eyebrow}</span>

          <h1
            dangerouslySetInnerHTML={{
              __html: t.title,
            }}
          />

          <p>{t.intro}</p>

          <div className="docs-actions">
            <Link
              className="btn btn-primary"
              href="#getting-started"
            >
              {t.gettingStarted}
            </Link>

            <a
              className="btn btn-ghost"
              href="https://github.com/Bando-CMS/bando-cms"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <div className="wrap docs-layout">
        <aside className="docs-sidebar">
          <span>{t.onThisPage}</span>

          {nav.map(([id, label]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </aside>

        <article className="docs-content">
          <DocSection
            id="getting-started"
            title={t.gettingStarted}
          >
            <h3>{t.requirements}</h3>
            <p>Node.js 20+ e PostgreSQL 16+. Docker é uma forma simples de executar PostgreSQL localmente.</p>
            <h3>1. Instalar e inicializar</h3>
            <Code language="bash" value={`npm init -y
npm install bando-cms
npx bando init
cp .env.example .env`} />
            <p><code>npx bando init</code> cria <code>bando.config.ts</code>, a primeira collection em <code>collections/posts.ts</code>, e um <code>.env.example</code>. Não exige o monorepo.</p>
            <h3>2. Configurar PostgreSQL e o primeiro administrador</h3>
            <Code language="env" value={`DATABASE_URL=postgresql://bando:bando@localhost:5432/bando
PORT=3333
JWT_SECRET=replace-with-a-long-random-secret
BANDO_ADMIN_EMAIL=admin@example.com
BANDO_ADMIN_PASSWORD=change-me-now
BANDO_ADMIN_NAME=Bando Administrator`} />
            <p>Inicia PostgreSQL antes do runtime. Por exemplo: <code>docker run --name bando-postgres -e POSTGRES_USER=bando -e POSTGRES_PASSWORD=bando -e POSTGRES_DB=bando -p 5432:5432 -d postgres:16-alpine</code>.</p>
            <h3>3. Iniciar</h3>
            <Code language="bash" value="npx bando dev" />
            <p>Abre <code>http://localhost:3333/admin</code>, inicia sessão com as credenciais do <code>.env</code>, e cria o primeiro documento no Studio.</p>
          </DocSection>

          <DocSection
            id="using-bando"
            title={t.using}
          >
            <h3>{t.usingTitle}</h3>
            <p>{t.usingText}</p>

            <h3>{t.workflow}</h3>
            <p>{t.workflowText}</p>

            <Code
              language="text"
              value={`Your application
       │
       │ @bando-cms/client
       ▼
Bando API
       │
       ▼
PostgreSQL`}
            />

            <h3>{t.nextjs}</h3>
            <p>{t.nextjsText}</p>

            <Code
              language="text"
              value={`my-blog/                 bando-cms/
├── app/                 ├── Studio
├── components/         ├── Server
├── lib/                └── PostgreSQL
│   └── bando.ts
└── package.json
       │
       └──── API ────────►`}
            />

            <h3>{t.installClient}</h3>

            <Code
              language="bash"
              value="npm install bando-cms"
            />

            <h3>{t.clientSetup}</h3>

            <Code
              language="ts"
              value={clientSetup}
            />

            <h3>{t.consumeContent}</h3>

            <Code
              language="ts"
              value={clientQuery}
            />

            <h3>{t.renderContent}</h3>

            <Code
              language="tsx"
              value={nextjsExample}
            />
          </DocSection>

          <DocSection
            id="collections"
            title={t.core}
          >
            <h3>Criar uma collection</h3>
            <p>Cria ou edita um ficheiro em <code>collections/</code>. Uma collection tem um nome e campos; o runtime valida os documentos antes de os guardar.</p>

            <Code
              language="ts"
              value={schema}
            />

            <h3>Registar a collection no projeto</h3>
            <p>Importa-a em <code>bando.config.ts</code> e adiciona-a ao array <code>collections</code>. Reinicia <code>npx bando dev</code> depois de alterar o schema.</p>
            <Code language="ts" value={`import { defineConfig } from "bando-cms";
import { posts } from "./collections/posts.js";

export default defineConfig({
  database: { url: process.env.DATABASE_URL },
  collections: [posts],
});`} />
            <p>{t.fieldsText}</p>

            <h3>{t.fieldTypesTitle}</h3>
            <p>{t.fieldTypesIntro}</p>

            <div className="docs-table">
              <div>
                <b>{t.fieldTypeCol}</b>
                <b>{t.fieldTypeDescCol}</b>
              </div>

              {fieldTypeRows.map(([helper, description]) => (
                <div key={helper}>
                  <code>{helper}()</code>
                  <span>{description}</span>
                </div>
              ))}
            </div>

            <h3>{t.fieldOptionsTitle}</h3>
            <p>{t.fieldOptionsIntro}</p>

            <div className="docs-table">
              <div>
                <b>{t.fieldOptionCol}</b>
                <b>{t.fieldOptionDescCol}</b>
              </div>

              {fieldOptionRows.map(([option, description]) => (
                <div key={option}>
                  <code>{option}</code>
                  <span>{description}</span>
                </div>
              ))}
            </div>

            <h3>{t.fieldExampleTitle}</h3>
            <p>{t.fieldExampleText}</p>

            <Code
              language="ts"
              value={fieldOptionsExample}
            />

            <h3>{t.documents}</h3>
            <p>{t.documentsText}</p>
          </DocSection>

          <DocSection
            id="relations"
            title={t.relations}
          >
            <p>{t.relationsText}</p>

            <Code
              language="ts"
              value={`relation({
  collection: "authors",
})

relation({
  collection: "tags",
  multiple: true,
})`}
            />

            <h3>{t.relationOptionsTitle}</h3>

            <div className="docs-table">
              <div>
                <b>{t.fieldOptionCol}</b>
                <b>{t.fieldOptionDescCol}</b>
              </div>

              {relationOptionRows.map(([option, description]) => (
                <div key={option}>
                  <code>{option}</code>
                  <span>{description}</span>
                </div>
              ))}
            </div>

            <p>{t.relationDelete}</p>
          </DocSection>

          <DocSection
            id="server"
            title={t.server}
          >
            <h3>{t.config}</h3>
            <p>{t.configText}</p>

            <Code
              language="env"
              value={`DATABASE_URL=postgresql://bando:bando@localhost:5432/bando
JWT_SECRET=replace-with-a-secure-secret
BANDO_ADMIN_EMAIL=admin@bando.dev
BANDO_ADMIN_PASSWORD=change-me-now`}
            />

            <h3>{t.api}</h3>
            <p>{t.apiText}</p>

            <Code
              language="bash"
              value={`curl -X POST http://localhost:3333/api/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{"email":"admin@bando.dev","password":"change-me-now"}'`}
            />

            <h3>{t.apiReference}</h3>

            <div className="docs-table">
              <div>
                <b>{t.endpoint}</b>
                <b>{t.purpose}</b>
              </div>

              {rows.map(
                ([method, path, purpose]) => (
                  <div
                    key={`${method}-${path}`}
                  >
                    <code>
                      {method} {path}
                    </code>

                    <span>{purpose}</span>
                  </div>
                ),
              )}
            </div>
          </DocSection>

          <DocSection
            id="client"
            title={t.client}
          >
            <p>{t.clientText}</p>

            <Code
              language="ts"
              value={`import {
  createBandoClient,
} from "bando-cms";

const bando = createBandoClient({
  baseUrl: process.env.BANDO_API_URL!,
  headers: {
    Authorization: \`Bearer \${token}\`,
  },
});

const { data, total } =
  await bando
    .collection<Post>("posts")
    .findMany({
      limit: 10,
      sort: "-createdAt",
      filters: {
        author: "author-document-id",
      },
    });`}
            />

            <p>{t.clientMethods}</p>

            <h3>Listar documentos com findMany()</h3>
            <Code
              language="ts"
              value={`const page = await bando.collection<Post>("posts").findMany({
  limit: 10,
  offset: 0,
  sort: "-createdAt",
  filters: { published: true },
});

console.log(page.data);  // Document<Post>[]
console.log(page.total); // total de documentos`}
            />

            <h3>Encontrar um documento com findById()</h3>
            <Code
              language="ts"
              value={`const post = await bando
  .collection<Post>("posts")
  .findById("document-id");

if (post) {
  console.log(post.data.title);
}
// findById() devolve null quando a API responde 404.`}
            />

            <h3>Criar um documento com create()</h3>
            <Code
              language="ts"
              value={`const post = await bando.collection<Post>("posts").create({
  title: "Hello Bando",
  slug: "hello-bando",
  content: "O primeiro documento criado pela API.",
  published: false,
});

console.log(post.id);`}
            />

            <h3>Atualizar um documento com update()</h3>
            <Code
              language="ts"
              value={`const updated = await bando
  .collection<Post>("posts")
  .update(post.id, { published: true });

console.log(updated.data.published); // true`}
            />

            <h3>Apagar um documento com delete()</h3>
            <Code
              language="ts"
              value={`await bando.collection<Post>("posts").delete(post.id);`}
            />

            <p>Estes métodos chamam as routes autenticadas do Bando. Mantém o Bearer token fora de código público do browser; em Next.js, usa-o apenas no servidor.</p>
          </DocSection>

          <DocSection
            id="studio"
            title={t.studio}
          >
            <p>{t.studioText}</p>
            <p>Não há um segundo servidor para iniciar no projeto consumidor: o Studio de produção é incluído no package e servido pelo runtime em <code>/admin</code>.</p>
            <Code language="bash" value={`npx bando dev
# open http://localhost:3333/admin`} />
          </DocSection>

          <DocSection
            id="architecture"
            title={t.architecture}
          >
            <p>{t.architectureText}</p>

            <Code
              language="text"
              value={`Bando
├── Core
├── Database
├── Server
├── Client
└── Studio`}
            />
          </DocSection>

          <DocSection
            id="contributing"
            title={t.contributing}
          >
            <p>{t.contributingText}</p>

            <Link
              className="text-link"
              href={`${prefix}/community`}
            >
              {t.community}
            </Link>
          </DocSection>
        </article>
      </div>
    </main>
  );
}

function DocSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      className="docs-section"
      id={id}
    >
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function Code({
  value,
  language = "text",
}: {
  value: string;
  language?: string;
}) {
  return (
    <pre
      className={`docs-code language-${language}`}
    >
      <code
        dangerouslySetInnerHTML={{
          __html: highlightCode(
            value,
            language,
          ),
        }}
      />
    </pre>
  );
}