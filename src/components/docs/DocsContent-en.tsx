import Link from "next/link";
import { CodeBlock, FileCodeBlock } from "./CodeBlock";
import { CodeTabs } from "./CodeTabs";
import {
  Callout,
  Endpoint,
  ParameterTable,
  Step,
  Steps,
} from "./DocsPrimitives";
import "./docs-content.css";

const schema = `import { boolean, defineCollection, text } from "bando-cms";

export const posts = defineCollection({
  name: "posts",
  description: "Blog articles",
  fields: {
    title: text({ required: true }),
    slug: text({ required: true }),
    content: text({ required: true }),
    published: boolean(),
  },
});`;

const config = `import { defineConfig } from "bando-cms";
import { posts } from "./collections/posts.js";

export default defineConfig({
  database: {
    url: process.env.DATABASE_URL,
  },
  collections: [posts],
});`;

const client = `import { createBandoClient } from "bando-cms";

export const bando = createBandoClient({
  baseUrl: process.env.BANDO_URL!,
  apiKey: process.env.BANDO_API_KEY!,
});`;

const pages: Record<string, [string, string]> = {
  "": [
    "Documentation",
    "Define content with TypeScript, manage it in Studio, and consume it quickly in your website or application.",
  ],
  "getting-started": [
    "Installation",
    "Create your first Bando project, define the content you need, and start using it in your website.",
  ],
  configuration: [
    "Configuration",
    "Configure the project and register the collections that represent your application's content.",
  ],
  "concepts/collections": [
    "Collections and fields",
    "Learn how to define the structure of the content your application will store.",
  ],
  "concepts/documents": [
    "Documents and relations",
    "Understand the difference between a collection and a document, and learn how to relate documents.",
  ],
  studio: [
    "Studio",
    "Create, edit, and organize content through Studio without changing your application code.",
  ],
  "using-bando/querying": [
    "Querying content",
    "Search, filter, paginate, and sort Bando documents.",
  ],
  client: [
    "TypeScript client",
    "Consume Bando through the official TypeScript client.",
  ],
  "client/find-many": [
    "findMany()",
    "Query documents and receive the results together with the total count.",
  ],
  "client/mutations": [
    "findById(), create(), update() and delete()",
    "Read, create, update, and delete documents.",
  ],
  "api/authentication": [
    "REST authentication",
    "Authenticate clients and use Bearer tokens to access protected resources.",
  ],
  "api/documents": [
    "Documents REST API",
    "Query and modify collections and documents directly through HTTP.",
  ],
  "frameworks/nextjs": [
    "Bando with Next.js",
    "Consume Bando content on the server using Server Components.",
  ],
  "frameworks/react": [
    "React and REST",
    "Consume the Bando API from any application capable of making HTTP requests.",
  ],
  "reference/environment": [
    "Environment variables",
    "Configure the variables your project uses in development and production.",
  ],
  "reference/deployment": [
    "Architecture and deployment",
    "Prepare your project for production and understand the main pieces that make it work.",
  ],
};

export function getDocsPage(path: string) {
  const [title, description] = pages[path] ?? pages[""];
  return {
    title,
    description,
  };
}

const queryRows = [
  {
    name: "limit",
    type: "integer",
    description:
      "Maximum number of documents returned. Must be a non-negative integer.",
  },
  {
    name: "offset",
    type: "integer",
    defaultValue: "0",
    description:
      "Number of documents skipped before results start being returned.",
  },
  {
    name: "sort",
    type: "string",
    defaultValue: "-createdAt",
    description:
      "Field used to sort results. Accepts id, createdAt, or updatedAt. The - prefix indicates descending order.",
  },
  {
    name: "field",
    type: "string",
    description:
      "Equality filter. For example, published=true searches for documents whose published field is true.",
  },
];

export function DocsContent({ path }: { path: string }) {
  if (path === "") {
    return (
      <div className="docs-content">
        <section className="docs-hero-panel">
          <p className="eyebrow">Bando CMS · v1.0.0</p>
          <h2>Structure your content. Build faster.</h2>
          <p>
            Bando is a headless, TypeScript-first CMS for websites and
            applications. Define your content in code, manage it in Studio,
            and consume it through the API or TypeScript client.
          </p>

          <Link
            className="btn btn-primary"
            href="/en/docs/getting-started"
          >
            Create your first project
          </Link>
        </section>

        <h3>Where does Bando fit?</h3>
        <p>
          Bando sits in the content layer of your application. Instead of
          building schemas, storage, management, and content access from
          scratch, you define the structure once and let Bando handle the
          rest. Your frontend remains free to use React, Next.js, Vue, or
          any other stack.
        </p>

        <div className="system-flow-grid four">
          <div className="system-box">
            <div className="system-number">01</div>
            <h3>Define</h3>
            <p>Model your content and fields with TypeScript.</p>
          </div>

          <div className="system-box">
            <div className="system-number">02</div>
            <h3>Store</h3>
            <p>Bando stores documents and makes them available to your application.</p>
          </div>

          <div className="system-box">
            <div className="system-number">03</div>
            <h3>Manage</h3>
            <p>Use Studio to create, edit, and organize your content.</p>
          </div>

          <div className="system-box">
            <div className="system-number">04</div>
            <h3>Deliver</h3>
            <p>Access your content through the API or TypeScript client.</p>
          </div>
        </div>

        <h3>From content to frontend</h3>
        <p>
          Imagine you are building a blog. First, define what a post should
          contain:
        </p>

        <CodeTabs
          tabs={[
            {
              label: "collections/posts.ts",
              code: schema,
            },
            {
              label: "bando.config.ts",
              code: config,
            },
            {
              label: "lib/bando.ts",
              code: client,
            },
          ]}
        />

        <p>
          With these three pieces, you have a reusable content structure and
          a simple way to consume it in your frontend.
        </p>

        <Callout>
          You do not need to understand the entire infrastructure to get
          started. The following pages show only what you need to define,
          manage, and consume content.
        </Callout>

        <h3>Get started in minutes</h3>
        <p>
          If this is your first time using Bando, follow the installation
          guide. By the end, you will have a local project with Studio ready
          for creating content and an API ready for your frontend to consume.
        </p>

        <Link href="/en/docs/getting-started" className="btn btn-ghost">
          Get started with Bando →
        </Link>
      </div>
    );
  }

  if (path === "getting-started") {
    return (
      <div className="docs-content">
        <p>
          In this guide, we will get Bando running locally. You do not need
          to understand the entire infrastructure to follow these steps.
        </p>

        <h3>What we are building</h3>
        <p>
          By the end of this guide, we will have four pieces working together:
        </p>

        <ul>
          <li>
            <strong>Node.js</strong> — runs the Bando runtime.
          </li>
          <li>
            <strong>PostgreSQL</strong> — stores the documents.
          </li>
          <li>
            <strong>Bando</strong> — organizes content and makes it available to the application.
          </li>
          <li>
            <strong>Studio</strong> — lets you manage content through the browser.
          </li>
        </ul>

        <h3>Prerequisites</h3>
        <p>
          You need Node.js 20 or later, PostgreSQL, and an empty Node project.
        </p>

        <p>
          If you do not have PostgreSQL installed, you can use Docker. Docker
          is simply a convenient way to run PostgreSQL locally; it is not a
          conceptual dependency of Bando.
        </p>

        <Steps>
          <Step title="1. Create the project">
            <p>
              First, create a Node project. <code>npm init</code> creates the
              <code>package.json</code>, which will be used to manage the
              project&apos;s dependencies.
            </p>

            <CodeBlock
              language="bash"
              code={`npm init -y
npm install bando-cms
npx bando init`}
            />

            <p>
              The first command creates the project, the second installs Bando,
              and the third initializes the required configuration.
            </p>
          </Step>

          <Step title="2. Start PostgreSQL">
            <p>
              Bando needs a database to persist documents. The command below
              creates a local PostgreSQL instance using Docker.
            </p>

            <CodeBlock
              language="bash"
              code={`docker run --name bando-postgres -e POSTGRES_USER=bando -e POSTGRES_PASSWORD=bando -e POSTGRES_DB=bando -p 5432:5432 -d postgres:16-alpine`}
            />
          </Step>

          <Step title="3. Start Bando">
            <p>Now start the runtime in development mode:</p>

            <CodeBlock
              language="bash"
              code="npx bando dev"
            />

            <p>The runtime will be available at:</p>

            <CodeBlock
              language="text"
              code="http://localhost:3333"
            />

            <p>Studio is available at:</p>

            <CodeBlock
              language="text"
              code="http://localhost:3333/admin"
            />
          </Step>
        </Steps>

        <Callout type="warning">
          In production, <code>JWT_SECRET</code> is required. Do not use
          development credentials in public environments.
        </Callout>

        <h3>Next step</h3>
        <p>
          Now that the project is running, let us define the content types
          your application needs.
        </p>

        <Link href="/en/docs/configuration" className="btn btn-ghost">
          Configure Bando →
        </Link>
      </div>
    );
  }

  if (path === "configuration") {
    return (
      <div className="docs-content">
        <h3>What is the configuration for?</h3>
        <p>
          Bando needs to know two important things before running the
          application:
        </p>

        <ol>
          <li>
            Where the database that stores the documents is located.
          </li>
          <li>
            Which collections are part of the project.
          </li>
        </ol>

        <p>
          This information lives in <code>bando.config.ts</code>.
        </p>

        <CodeBlock
          language="ts"
          code={config}
        />

        <h3>database.url</h3>
        <p>
          <code>database.url</code> tells Bando how to connect to PostgreSQL.
        </p>

        <p>
          In the example, we use <code>process.env.DATABASE_URL</code>. This
          means the value comes from an environment variable instead of being
          written directly in the code.
        </p>

        <h3>collections</h3>
        <p>
          <code>collections</code> tells Bando which collections have been
          registered by the application.
        </p>

        <p>
          A collection is the definition of a content type. For example, a
          blog can have a collection called <code>posts</code>.
        </p>

        <ParameterTable
          rows={[
            {
              name: "database.url",
              type: "string",
              description:
                "PostgreSQL connection URL. If missing, the runtime uses DATABASE_URL and then the predefined local URL.",
            },
            {
              name: "collections",
              type: "array or record",
              required: "yes",
              description:
                "Collections available to the runtime. At least one registered collection is required.",
            },
          ]}
        />

        <Callout>
          The configuration describes how the runtime should work. The actual
          content data remains stored in PostgreSQL.
        </Callout>

        <Link href="/en/docs/concepts/collections" className="btn btn-ghost">
          Learn about collections →
        </Link>
      </div>
    );
  }

  if (path === "concepts/collections") {
    return (
      <div className="docs-content">
        <h3>What is a collection?</h3>

        <p>
          A collection defines the structure of a content type.
        </p>

        <p>
          If you are familiar with TypeScript, you can initially think of it
          as a definition that describes which data a particular content type
          can contain.
        </p>

        <p>In a blog, for example, we might have:</p>

        <div className="docs-example-list">
          <div>
            <strong>posts</strong>
            <br />
            <span>Articles published on the blog.</span>
          </div>

          <div>
            <strong>authors</strong>
            <br />
            <span>People who write the articles.</span>
          </div>
        </div>

        <h3>Defining a collection</h3>

        <FileCodeBlock
          path="collections/posts.ts"
          language="ts"
          code={schema}
        />

        <h3>Understanding the code</h3>

        <p>
          <code>defineCollection()</code> creates the collection definition.
        </p>

        <p>
          <code>name</code> identifies the collection:
        </p>

        <CodeBlock
          language="ts"
          code={`name: "posts"`}
        />

        <p>
          <code>description</code> explains the purpose of the collection:
        </p>

        <CodeBlock
          language="ts"
          code={`description: "Blog articles"`}
        />

        <p>
          And <code>fields</code> defines the fields that documents in this
          collection can contain.
        </p>

        <h3>Fields</h3>

        <p>
          A field is a property of a document.
        </p>

        <p>
          In our example, a post has a title, slug, content, and publication
          status.
        </p>

        <ParameterTable
          rows={[
            {
              name: "string / text",
              type: "field",
              description: "Field intended for text values.",
            },
            {
              name: "boolean",
              type: "field",
              description: "Field representing true or false.",
            },
            {
              name: "number",
              type: "field",
              description: "Field intended for numeric values.",
            },
            {
              name: "date",
              type: "field",
              description: "Date field. Accepts Date or string.",
            },
            {
              name: "relation",
              type: "field",
              description: "Field that stores a reference to another document.",
            },
          ]}
        />

        <h3>Required fields</h3>

        <p>When we write:</p>

        <CodeBlock
          language="ts"
          code={`title: text({ required: true })`}
        />

        <p>
          we are saying that a document cannot be created without a
          <code>title</code>.
        </p>

        <Callout>
          A collection describes the structure. Documents are the concrete
          values that are created later.
        </Callout>

        <Link href="/en/docs/concepts/documents" className="btn btn-ghost">
          Understand documents →
        </Link>
      </div>
    );
  }

  if (path === "concepts/documents") {
    return (
      <div className="docs-content">
        <h3>Collection vs. document</h3>

        <p>
          This is one of the most important distinctions in Bando.
        </p>

        <p>
          A <strong>collection</strong> describes the structure. A
          <strong>document</strong> is a concrete record of that structure.
        </p>

        <div className="docs-flow">
          <div>
            <strong>Collection</strong>
            <span>Defines what a post should look like.</span>
          </div>

          <div>
            <strong>Document</strong>
            <span>Represents a specific post.</span>
          </div>
        </div>

        <p>
          If the collection is <code>posts</code>, we can have documents such
          as:
        </p>

        <CodeBlock
          language="json"
          code={`{
  "id": "post-123",
  "collection": "posts",
  "data": {
    "title": "Learning Bando",
    "slug": "learning-bando",
    "content": "My first article",
    "published": true
  }
}`}
        />

        <h3>Document structure</h3>

        <p>
          Bando works with documents that contain information about the
          record itself and the data defined by the collection.
        </p>

        <ul>
          <li>
            <code>id</code> identifies the document.
          </li>
          <li>
            <code>collection</code> indicates which collection it belongs to.
          </li>
          <li>
            <code>data</code> contains the fields defined by the collection.
          </li>
          <li>
            <code>createdAt</code> indicates when it was created.
          </li>
          <li>
            <code>updatedAt</code> indicates when it was updated.
          </li>
        </ul>

        <h3>Relations</h3>

        <p>
          A relation allows a document to reference another document.
        </p>

        <p>
          Imagine that every post has an author. Instead of duplicating all
          the author&apos;s information inside the post, we can store a reference
          to a document in the <code>authors</code> collection.
        </p>

        <CodeBlock
          language="ts"
          code={`author: relation({
  collection: "authors",
  required: true,
})`}
        />

        <p>The flow can be understood like this:</p>

        <div className="docs-flow">
          <div>
            <strong>posts</strong>
            <span>Article document.</span>
          </div>

          <div>
            <strong>author</strong>
            <span>Reference.</span>
          </div>

          <div>
            <strong>authors</strong>
            <span>Author document.</span>
          </div>
        </div>

        <h3>One relation to multiple documents</h3>

        <p>
          When a document can reference multiple documents, use
          <code>multiple: true</code>.
        </p>

        <CodeBlock
          language="ts"
          code={`reviewers: relation({
  collection: "authors",
  multiple: true,
})`}
        />

        <Callout type="warning">
          The target collection and referenced IDs must exist. A document
          that is still referenced cannot be deleted. In that case, the API
          returns <code>409</code>.
        </Callout>

        <Link href="/en/docs/studio" className="btn btn-ghost">
          Manage documents in Studio →
        </Link>
      </div>
    );
  }

  if (path === "studio") {
    return (
      <div className="docs-content">
        <h3>What is Bando Studio?</h3>

        <p>
          Bando Studio is the interface where you create, edit, and organize
          your project content.
        </p>

        <p>
          If you are building a website for yourself or a client, content
          should not require anyone to edit TypeScript files. Bando Studio
          provides a simple interface for creating and editing documents
          defined by your collections.
        </p>

        <h3>How does Bando Studio relate to your project?</h3>

        <div className="docs-flow">
          <div>
            <strong>Collection</strong>
            <span>Defines the structure.</span>
          </div>

          <div>
            <strong>Studio</strong>
            <span>Lets you manage documents.</span>
          </div>

          <div>
            <strong>API</strong>
            <span>Provides the data.</span>
          </div>
        </div>

        <p>
          Studio and the API work with the same collections and documents.
          They are not two separate data systems.
        </p>

        <Steps>
          <Step title="Configure your credentials">
            <p>
              Define the administrator credentials using Bando environment
              variables.
            </p>

            <CodeBlock
              language="bash"
              code={`BANDO_ADMIN_EMAIL = bando@admin.com
                BANDO_ADMIN_PASSWORD = password`}
            />

            <p>
              These credentials will be used to sign in to Bando Studio.
            </p>
          </Step>

          <Step title="Start Bando">
            <p>
              Run the Bando runtime in development mode.
            </p>

            <CodeBlock
              language="bash"
              code="npx bando dev"
            />
          </Step>

          <Step title="Open the Studio">
            <p>
              Open the Studio at:
            </p>

            <CodeBlock
              language="text"
              code="http://localhost:3333/admin"
            />
          </Step>

          <Step title="Sign in">
            <p>
              Use the email and password defined in your environment variables
              to sign in to the Studio.
            </p>
          </Step>

          <Step title="Choose a collection">
            <p>
              Studio discovers the collections registered in the runtime, such
              as <code>posts</code>.
            </p>
          </Step>

          <Step title="Manage documents">
            <p>
              Creating and editing documents uses the same structures and REST
              routes provided by Bando.
            </p>
          </Step>
        </Steps>

        <Callout type="warning">
          Never place administrator credentials directly in your application
          code or in public environment variables. Use environment variables
          and keep your <code>.env</code> file out of version control.
        </Callout>

        <Link
          href="/en/docs/using-bando/querying"
          className="btn btn-ghost"
        >
          Learn how to query content →
        </Link>
      </div>
    );
  }


  if (
    path === "using-bando/querying" ||
    path === "client/find-many"
  ) {
    return (
      <div className="docs-content">
        <h3>Querying content</h3>

        <p>
          After creating documents, the next task is retrieving them in your
          application.
        </p>

        <p>
          Bando lets you combine filters, pagination, and sorting in a single
          query.
        </p>

        <h3>A real example</h3>

        <p>
          Imagine we want the 10 most recently published posts:
        </p>

        <CodeBlock
          language="ts"
          code={`const { data, total } =
  await bando.collection<Post>("posts").findMany({
    limit: 10,
    offset: 0,
    sort: "-createdAt",
    filters: {
      published: true,
    },
  });`}
        />

        <h3>What do we receive?</h3>

        <p>The result contains two important pieces of information:</p>

        <CodeBlock
          language="ts"
          code={`const { data, total } = result;`}
        />

        <p>
          <code>data</code> contains the documents found.
        </p>

        <p>
          <code>total</code> contains the total number of documents matching
          the query, allowing you to build pagination into the interface.
        </p>

        <h3>Pagination</h3>

        <p>
          <code>limit</code> defines how many documents we want to receive.
          <code>offset</code> defines how many documents should be skipped
          before results start being returned.
        </p>

        <p>For example, to fetch the first 10:</p>

        <CodeBlock
          language="ts"
          code={`{
  limit: 10,
  offset: 0,
}`}
        />

        <p>To fetch the next 10:</p>

        <CodeBlock
          language="ts"
          code={`{
  limit: 10,
  offset: 10,
}`}
        />

        <h3>Sorting</h3>

        <p>
          Sorting accepts <code>id</code>, <code>createdAt</code>, and
          <code>updatedAt</code>.
        </p>

        <p>
          A <code>-</code> before the field means descending order:
        </p>

        <CodeBlock
          language="ts"
          code={`sort: "-createdAt"`}
        />

        <h3>Filters</h3>

        <p>Current filters use equality.</p>

        <CodeBlock
          language="ts"
          code={`filters: {
  published: true,
}`}
        />

        <p>
          This searches for documents whose <code>published</code> field is
          true.
        </p>

        <ParameterTable rows={queryRows} />

        <Callout>
          Start with simple queries. Then combine filtering, sorting, and
          pagination as your interface requires.
        </Callout>

        <Link href="/en/docs/client/mutations" className="btn btn-ghost">
          Learn about mutations →
        </Link>

        <br />

        <Link href="/en/docs/client" className="btn btn-ghost">
          Learn about the TypeScript client →
        </Link>
      </div>
    );
  }

  if (path === "client") {
    return (
      <div className="docs-content">
        <h3>Why use the TypeScript client?</h3>

        <p>
          Bando provides a REST API that can be consumed directly over HTTP.
          The TypeScript client is a convenience layer that saves you from
          manually building all of those requests.
        </p>

        <p>
          If you are already familiar with working with <code>fetch</code>,
          think of the client as a typed interface over the Bando API.
        </p>

        <h3>Generate an API Key</h3>

        <p>
          To consume protected Bando endpoints, you need an API Key. If you
          do not have one yet, you can generate one using the CLI:
        </p>

        <CodeBlock
          language="bash"
          code="npx bando key"
        />

        <p>
          If you use pnpm, you can run the same command with:
        </p>

        <CodeBlock
          language="bash"
          code="pnpm bando key"
        />

        <p>
          The generated key should be configured in the environment where
          the client will run.
        </p>

        <Callout type="warning">
          The API Key provides access to protected API resources. Never place
          it directly in your source code, in <code>NEXT_PUBLIC_*</code>
          variables, or in any other variables exposed to the browser.
        </Callout>

        <h3>Configure the client</h3>

        <p>
          After generating the key, create the client by providing the API
          URL and the key used for authentication.
        </p>

        <FileCodeBlock
          path="lib/bando.ts"
          language="ts"
          code={client}
        />

        <h3>What is createBandoClient?</h3>

        <p>
          <code>createBandoClient()</code> creates an instance that knows
          where the Bando API is running and how to authenticate requests.
        </p>

        <p>
          <code>baseUrl</code> specifies the address where Bando is running.
        </p>

        <p>
          The API Key is sent to authenticate requests that require protected
          access.
        </p>

        <h3>Working with a collection</h3>

        <p>
          After creating the client, you can access a collection using the
          <code>collection()</code> method:
        </p>

        <CodeBlock
          language="ts"
          code={`const posts = bando.collection<Post>("posts"); `}
        />

        <p>
          From there, you can use the available methods to query and modify
          documents:
        </p>

        <CodeBlock
          language="ts"
          code={`await posts.findMany(...)

  await posts.findById(...)

  await posts.create(...)

  await posts.update(...)

  await posts.delete(...)`}
        />

        <p>
          Each method corresponds to a different operation on documents.
        </p>

        <Link
          href="/en/docs/client/find-many"
          className="btn btn-ghost"
        >
          Learn findMany() →
        </Link>

        <br />

        <Link
          href="/en/docs/client/mutations"
          className="btn btn-ghost"
        >
          Learn mutations →
        </Link>

        <Callout type="warning">
          Privileged tokens and API Keys must remain on the server. If the
          client is used in a frontend application, create a server-side
          layer to communicate with Bando instead of exposing the key in
          the browser.
        </Callout>
      </div>
    );
  }


  if (path === "client/mutations") {
    return (
      <div className="docs-content">
        <h3>What is a mutation?</h3>

        <p>A mutation is an operation that changes data.</p>

        <p>The TypeScript client has four main operations:</p>

        <div className="docs-example-list">
          <div>
            <strong>findById()</strong>
            <br />
            <span>Reads a specific document.</span>
          </div>

          <div>
            <strong>create()</strong>
            <br />
            <span>Creates a document.</span>
          </div>

          <div>
            <strong>update()</strong>
            <br />
            <span>Updates a document.</span>
          </div>

          <div>
            <strong>delete()</strong>
            <br />
            <span>Deletes a document.</span>
          </div>
        </div>

        <CodeBlock
          language="ts"
          code={`import { bando } from "@/lib/bando";
  import type { Post } from "@/types/post";

  const posts = bando.collection<Post>("posts");

  const post = await posts.findById("document-id");

  await posts.create({
    title: "Hello",
    slug: "hello",
    content: "…",
    published: false,
  });

  await posts.update("document-id", {
    published: true,
  });

  await posts.delete("document-id"); `}
        />

        <h3>findById()</h3>

        <p>Finds a document by its ID.</p>

        <CodeBlock
          language="ts"
          code={`const post = await posts.findById("document-id"); `}
        />

        <p>
          When the document does not exist, <code>findById()</code> returns
          <code>null</code>.
        </p>

        <h3>create()</h3>

        <p>
          Creates a new document using the fields defined by the collection.
        </p>

        <h3>update()</h3>

        <p>Updates an existing document.</p>

        <h3>delete()</h3>

        <p>Deletes a document.</p>

        <Callout type="warning">
          Documents that are still referenced by relations cannot be deleted.
          The API returns <code>409</code> in this scenario.
        </Callout>

        <p>
          The methods, except <code>findById()</code> when the document is not
          found, reject the Promise when the API returns an error.
          <code>create()</code> and <code>update()</code> return the resulting
          document.
        </p>
      </div>
    );
  }

  if (path === "api/authentication") {
    return (
      <div className="docs-content">
        <h3>Why does authentication exist?</h3>

        <p>
          The Bando API may contain private content and operations that modify
          data. For this reason, certain endpoints require a valid API key
          to authorize access.
        </p>

        <h3>How it works</h3>

        <div className="docs-flow">
          <div>
            <strong>1. API Key</strong>
            <span>The client obtains an API key from the Bando project.</span>
          </div>

          <div>
            <strong>2. Request</strong>
            <span>The client sends the API key in the request header.</span>
          </div>

          <div>
            <strong>3. API</strong>
            <span>Bando validates the provided API key.</span>
          </div>

          <div>
            <strong>4. Response</strong>
            <span>The API processes the request if authentication is valid.</span>
          </div>
        </div>

        <h3>Using an API key</h3>

        <p>
          Requests to the Document API must include the API key through the
          <code> X-Bando-API-Key</code> header.
        </p>

        <Endpoint
          method="GET"
          path="/api/:collection"
        >
          <p>
            Send the API key in the request header.
          </p>

          <CodeBlock
            language="bash"
            code={`curl http://localhost:3333/api/posts \\
  -H "X-Bando-API-Key: YOUR_API_KEY"`}
          />

          <p>
            In JavaScript, the API key can be sent as follows:
          </p>

          <CodeBlock
            language="javascript"
            code={`const response = await fetch(
    "http://localhost:3333/api/posts",
    {
      headers: {
        "X-Bando-API-Key": "YOUR_API_KEY",
      },
    }
  );

  const { data } = await response.json(); `}
          />
        </Endpoint>

        <h3>API key header</h3>

        <p>
          The <code>X-Bando-API-Key</code> header identifies and authenticates
          the project making the request.
        </p>

        <CodeBlock
          language="http"
          code={`X - Bando - API - Key: YOUR_API_KEY`}
        />

        <Callout type="warning">
          Never put a privileged API key directly in public browser code.
          For frontend applications, use a server-side integration to keep
          the API key private.
        </Callout>

        <h3>Authenticated requests</h3>

        <p>
          Authentication is required for protected Document API endpoints.
          The API key must be included with every request that requires
          authentication.
        </p>

        <CodeBlock
          language="bash"
          code={`curl http://localhost:3333/api/posts \\
  -H "X-Bando-API-Key: $BANDO_API_KEY"`}
        />

        <h3>Authentication errors</h3>

        <p>
          Requests without a valid API key are not authorized by the API.
          Make sure the header is present and that the API key belongs to
          the correct project.
        </p>

        <ul>
          <li>
            <code>X-Bando-API-Key</code> missing — the request is not
            authenticated.
          </li>

          <li>
            Invalid API key — authentication fails.
          </li>

          <li>
            Valid API key — the request can be processed according to the
            available permissions.
          </li>
        </ul>
      </div>
    );
  }

  if (path === "api/documents") {
    return (
      <div className="docs-content">
        <h3>The documents API</h3>

        <p>
          The REST API allows any application capable of making HTTP requests
          to work with Bando documents.
        </p>

        <p>
          If you are building a React, Vue, mobile, or any other HTTP-based
          application, you do not need to use the TypeScript client. You can
          consume these routes directly.
        </p>

        <h3>HTTP methods</h3>

        <div className="docs-example-list">
          <div>
            <strong>GET</strong>
            <br />
            <span>Read data.</span>
          </div>

          <div>
            <strong>POST</strong>
            <br />
            <span>Create data.</span>
          </div>

          <div>
            <strong>PATCH</strong>
            <br />
            <span>Update data.</span>
          </div>

          <div>
            <strong>DELETE</strong>
            <br />
            <span>Remove data.</span>
          </div>
        </div>

        <Callout>
          The routes below require a Bearer token when indicated by the API.
        </Callout>

        <Endpoint
          method="GET"
          path="/api/collections"
        >
          <p>Lists the available collections.</p>

          <p>
            You can also query a specific collection through
            <code>GET /api/collections/:name</code>.
          </p>
        </Endpoint>

        <Endpoint
          method="GET"
          path="/api/:collection"
        >
          <p>Lists documents from a collection.</p>

          <p>
            The response contains the documents in <code>data</code> and the
            total count in <code>total</code>.
          </p>

          <CodeBlock
            language="json"
            code={`{
    "data": [],
      "total": 0
  } `}
          />

          <ParameterTable rows={queryRows} />
        </Endpoint>

        <Endpoint
          method="GET"
          path="/api/:collection/:id"
        >
          <p>Finds a specific document by ID.</p>

          <p>On success, it returns:</p>

          <CodeBlock
            language="json"
            code={`{
    "data": {
      "id": "...",
        "collection": "...",
          "data": { }
    }
  } `}
          />
        </Endpoint>

        <Endpoint
          method="POST"
          path="/api/:collection"
        >
          <p>
            Creates a new document. Data is sent in the request body.
          </p>

          <p>On success, the API returns <code>201</code>.</p>
        </Endpoint>

        <Endpoint
          method="PATCH"
          path="/api/:collection/:id"
        >
          <p>Partially updates an existing document.</p>
        </Endpoint>

        <Endpoint
          method="DELETE"
          path="/api/:collection/:id"
        >
          <p>Deletes a document.</p>

          <p>On success, it returns <code>204</code>.</p>

          <p>
            Validation errors return <code>400</code> with information in
            <code>error</code> and <code>issues</code>.
          </p>
        </Endpoint>

        <Link href="/en/docs/api/authentication" className="btn btn-ghost">
          View REST authentication →
        </Link>
      </div>
    );
  }

  if (path === "frameworks/nextjs") {
    return (
      <div className="docs-content">
        <h3>Bando + Next.js</h3>

        <p>
          If you already know Next.js, you can consume Bando directly from a
          Server Component.
        </p>

        <p>
          This is useful when you want to fetch content during server-side
          rendering without exposing privileged credentials to the browser.
        </p>

        <FileCodeBlock
          path="app/page.tsx"
          language="tsx"
          code={`import { bando } from "@/lib/bando";
  import type { Post } from "@/types/post";

  const { data: posts } =
    await bando.collection<Post>("posts").findMany({
      filters: {
        published: true,
      },
      sort: "-createdAt",
    });

  return (
    <main>
      {posts.map((post) => (
        <article key={post.id}>
          {post.data.title}
        </article>
      ))}
    </main>
  ); `}
        />

        <h3>What is happening?</h3>

        <p>
          First, we ask Bando for documents from the <code>posts</code>
          collection.
        </p>

        <p>
          The filter ensures that only published posts are returned, while
          sorting puts the most recent ones first.
        </p>

        <p>Then we use the result normally in React:</p>

        <CodeBlock
          language="tsx"
          code={`posts.map((post) => (
    <article key={post.id}>
      {post.data.title}
    </article>
  ))`}
        />

        <h3>Why use the server?</h3>

        <p>
          The server can keep the token out of the code delivered to the
          browser. This is especially important when the credential has
          privileged permissions.
        </p>

        <Callout type="warning">
          Do not put <code>BANDO_TOKEN</code> in a
          <code>NEXT_PUBLIC_*</code> variable. Variables with this prefix can
          be exposed to the browser.
        </Callout>
      </div>
    );
  }

  if (path === "frameworks/react") {
    return (
      <div className="docs-content">
        <h3>Bando with React, Next.js, or any frontend</h3>

        <p>
          Bando is not tied to a specific framework. Any frontend capable of
          making HTTP requests can consume Bando content.
        </p>

        <p>
          This includes React, Next.js, Vue, mobile applications, and other
          projects that work with HTTP.
        </p>

        <h3>Using fetch</h3>

        <CodeBlock
          language="ts"
          code={`const response = await fetch(
    "http://localhost:3333/api/posts",
    {
      headers: {
        "X-Bando-API-Key": "YOUR_API_KEY",
      },
    }
  );

  const { data, total } = await response.json(); `}
        />

        <h3>Understanding the request</h3>

        <p>
          <code>fetch()</code> sends an HTTP request to the API.
        </p>

        <p>
          <code>response</code> represents the HTTP response received from the
          API.
        </p>

        <p>
          <code>response.json()</code> parses the JSON response body into a
          JavaScript object.
        </p>

        <p>
          Finally, <code>data</code> contains the documents and{" "}
          <code>total</code> indicates the total number of results.
        </p>

        <Callout type="warning">
          Never put a privileged API key in a public React bundle. Any secret
          included in JavaScript sent to the browser can be inspected by the
          user. For public frontend applications, consider making requests
          through your own backend.
        </Callout>

        <Link href="/en/docs/api/documents" className="btn btn-ghost">
          View the REST API →
        </Link>
      </div>
    );
  }

  if (path === "reference/environment") {
    return (
      <div className="docs-content">
        <h3>What are environment variables?</h3>

        <p>
          Environment variables are values provided to the process when Bando
          is executed.
        </p>

        <p>
          They are especially useful for configuration that changes between
          environments, such as development and production, and for
          information that should not be written directly into the code.
        </p>

        <ParameterTable
          rows={[
            {
              name: "DATABASE_URL",
              type: "string",
              description: "URL used to connect to PostgreSQL.",
            },
            {
              name: "PORT",
              type: "number",
              defaultValue: "3333",
              description: "HTTP port used by the runtime.",
            },
            {
              name: "JWT_SECRET",
              type: "string",
              description:
                "Secret used for authentication. Required in production.",
            },
            {
              name: "JWT_EXPIRES_IN",
              type: "number",
              defaultValue: "28800",
              description: "Token duration in seconds.",
            },
            {
              name: "BANDO_ADMIN_EMAIL / PASSWORD",
              type: "string",
              description:
                "Credentials used for the initial administrator. Both must be defined and the password must contain at least 8 characters.",
            },
            {
              name: "BANDO_ADMIN_NAME",
              type: "string",
              defaultValue: "Bando Administrator",
              description: "Initial administrator name.",
            },
            {
              name: "STUDIO_URL",
              type: "string",
              defaultValue: "http://localhost:5173",
              description: "Origin allowed by CORS.",
            },
          ]}
        />

        <Callout type="warning">
          Secrets such as <code>JWT_SECRET</code> and administrator passwords
          must not be committed to the repository.
        </Callout>
      </div>
    );
  }

  if (path === "reference/deployment") {
    return (
      <div className="docs-content">
        <h3>How is Bando composed?</h3>

        <p>
          Before deploying, it is useful to understand which parts make up
          the runtime.
        </p>

        <div className="docs-flow">
          <div>
            <strong>Core</strong>
            <span>Defines schemas and types.</span>
          </div>

          <div>
            <strong>Database</strong>
            <span>Persists data.</span>
          </div>

          <div>
            <strong>Server</strong>
            <span>Exposes the API.</span>
          </div>

          <div>
            <strong>Client</strong>
            <span>Makes consumption easier.</span>
          </div>

          <div>
            <strong>Studio</strong>
            <span>Lets you manage content.</span>
          </div>
        </div>

        <h3>What do you need in production?</h3>

        <p>
          The runtime must be able to access a PostgreSQL database and receive
          the required configuration through the environment.
        </p>

        <Steps>
          <Step title="Database">
            <p>
              Configure <code>DATABASE_URL</code> to point to your production
              PostgreSQL database.
            </p>
          </Step>

          <Step title="Security">
            <p>
              Set a strong and private <code>JWT_SECRET</code>.
            </p>
          </Step>

          <Step title="Administrator">
            <p>
              Provide the email and password required for the first
              administrator.
            </p>
          </Step>

          <Step title="Start the runtime">
            <CodeBlock
              language="bash"
              code="npx bando start"
            />
          </Step>
        </Steps>

        <h3>Development vs. production</h3>

        <p>
          During development, you can run Bando locally. In production, the
          principle is the same: the runtime needs access to PostgreSQL and
          the correct environment variables.
        </p>

        <Callout type="warning">
          Never publish <code>JWT_SECRET</code>, administrator passwords, or
          other credentials in the repository.
        </Callout>

        <Link
          href="/en/docs/reference/environment"
          className="btn btn-ghost"
        >
          View all environment variables →
        </Link>
      </div>
    );
  }

  return (
    <>
      <h1>404</h1>
      <h2>Page not found</h2>
      <p>
        The page you are looking for does not exist or has been moved.
      </p>
      <Link href="/">Back to home</Link>
    </>
  );
}
