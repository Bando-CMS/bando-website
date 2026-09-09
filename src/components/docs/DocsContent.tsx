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
  description: "Artigos do blog",
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
    "Documentação",
    "Define conteúdo com TypeScript, gere-o no Studio e consome-o rapidamente no teu site ou aplicação.",
  ],

  "getting-started": [
    "Instalação",
    "Cria o teu primeiro projeto Bando, define o conteúdo que precisas e começa a utilizá-lo no teu site.",
  ],

  configuration: [
    "Configuração",
    "Configura o projeto e registra as collections que representam o conteúdo da tua aplicação.",
  ],

  "concepts/collections": [
    "Collections e fields",
    "Aprende a definir a estrutura dos conteúdos que a tua aplicação vai armazenar.",
  ],

  "concepts/documents": [
    "Documentos e relations",
    "Entende a diferença entre uma collection e um documento e aprende a relacionar documentos.",
  ],

  studio: [
    "Studio",
    "Cria, edita e organiza conteúdo através do Studio, sem precisares alterar o código da aplicação.",
  ],

  "using-bando/querying": [
    "Consultar conteúdo",
    "Pesquisa, filtra, pagina e ordena documentos do Bando.",
  ],

  client: [
    "Cliente TypeScript",
    "Consome o Bando através do cliente TypeScript oficial.",
  ],

  "client/find-many": [
    "findMany()",
    "Consulta documentos e recebe os resultados juntamente com o total.",
  ],

  "client/mutations": [
    "findById(), create(), update() e delete()",
    "Lê, cria, atualiza e remove documentos.",
  ],

  "api/authentication": [
    "Autenticação REST",
    "Autentica clientes e utiliza tokens Bearer para acessar recursos protegidos.",
  ],

  "api/documents": [
    "Documents REST API",
    "Consulta e altera collections e documentos diretamente através de HTTP.",
  ],

  "frameworks/nextjs": [
    "Bando com Next.js",
    "Consome conteúdo do Bando no servidor usando Server Components.",
  ],

  "frameworks/react": [
    "React e REST",
    "Consome a API do Bando a partir de qualquer aplicação capaz de fazer requests HTTP.",
  ],

  "reference/environment": [
    "Variáveis de ambiente",
    "Configura as variáveis que o teu projeto utiliza em desenvolvimento e produção.",
  ],

  "reference/deployment": [
    "Arquitetura e deploy",
    "Prepara o teu projeto para produção e entende as principais peças que o fazem funcionar.",
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
    description: "Número máximo de documentos devolvidos. Deve ser um inteiro não negativo.",
  },
  {
    name: "offset",
    type: "integer",
    defaultValue: "0",
    description: "Número de documentos ignorados antes de começar a devolver resultados.",
  },
  {
    name: "sort",
    type: "string",
    defaultValue: "-createdAt",
    description:
      "Campo usado para ordenar os resultados. Aceita id, createdAt ou updatedAt. O prefixo - indica ordem descendente.",
  },
  {
    name: "field",
    type: "string",
    description:
      "Filtro por igualdade. Por exemplo, published=true procura documentos cujo campo published seja verdadeiro.",
  },
];

export function DocsContent({ path }: { path: string }) {
  if (path === "") {
    return (
      <div className="docs-content">
        <section className="docs-hero-panel">
          <p className="eyebrow">Bando CMS · v1.0.0</p>

          <h2>
            Estrutura o conteúdo. Constrói mais rápido.
          </h2>
          <p>
            O Bando é um CMS headless, TypeScript-first, para sites e aplicações.
            Defines o conteúdo em código, geres no Studio e consumes pela API ou
            cliente TypeScript.
          </p>


          <Link
            className="btn btn-primary"
            href="/docs/getting-started"
          >
            Criar o primeiro projeto
          </Link>
        </section>

        <h3>Onde entra o Bando?</h3>
        <p>
          O Bando entra na camada de conteúdo da tua aplicação. Em vez de criares
          do zero schemas, armazenamento, gestão e acesso aos conteúdos, defines
          a estrutura uma vez e deixas o Bando tratar do resto. O teu frontend
          continua livre para usar React, Next.js, Vue ou qualquer outra stack.
        </p>

        <div className="system-flow-grid four">
          <div className="system-box">
            <div className="system-number">01</div>
            <h3>Define</h3>
            <p>Modela os teus conteúdos e campos com TypeScript.</p>
          </div>

          <div className="system-box">
            <div className="system-number">02</div>
            <h3>Armazena</h3>
            <p>O Bando guarda os documentos e disponibiliza-os à tua aplicação.</p>
          </div>

          <div className="system-box">
            <div className="system-number">03</div>
            <h3>Gere</h3>
            <p>Usa o Studio para criar, editar e organizar o conteúdo.</p>
          </div>

          <div className="system-box">
            <div className="system-number">04</div>
            <h3>Entrega</h3>
            <p>Obtém os conteúdos através da API ou do cliente TypeScript.</p>
          </div>
        </div>

        <h3>Do conteúdo ao frontend</h3>

        <p>
          Imagina que estás a construir um blog. Primeiro defines o que um
          post deve conter:
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
          A partir destas três peças, tens uma estrutura de conteúdo reutilizável e
          uma forma simples de a consumir no teu frontend.
        </p>

        <Callout>
          Não precisas dominar toda a infraestrutura para começar. As próximas páginas
          mostram apenas o que precisas para definir, gerir e consumir conteúdo.
        </Callout>

        <h3>Começa em poucos minutos</h3>

        <p>
          Se esta é a tua primeira vez com o Bando, segue o guia de instalação. No
          final terás um projeto local com o Studio pronto para criares conteúdo
          e uma API pronta para o teu frontend consumir.
        </p>

        <Link href="/docs/getting-started" className="btn btn-ghost">
          Começar com o Bando →
        </Link>
      </div>
    );
  }

  if (path === "getting-started") {
    return (
      <div className="docs-content">
        <p>
          Neste guia vamos colocar o Bando a funcionar localmente. Não precisas
          conhecer toda a infraestrutura para seguir os passos.
        </p>

        <h3>O que vamos construir</h3>

        <p>
          No final deste guia teremos quatro peças trabalhando juntas:
        </p>

        <ul>
          <li>
            <strong>Node.js</strong> — executa o runtime do Bando.
          </li>
          <li>
            <strong>PostgreSQL</strong> — armazena os documentos.
          </li>
          <li>
            <strong>Bando</strong> — organiza o conteúdo e disponibiliza-o para a aplicação.
          </li>
          <li>
            <strong>Studio</strong> — permite gerir os conteúdos através do
            browser.
          </li>
        </ul>

        <h3>Pré-requisitos</h3>

        <p>
          Precisas de Node.js 20 ou superior, PostgreSQL e um projeto Node
          vazio.
        </p>

        <p>
          Se não tens PostgreSQL instalado, podes usar Docker. Docker é
          apenas uma maneira conveniente de executar o PostgreSQL localmente;
          não é uma dependência conceitual do Bando.
        </p>

        <Steps>
          <Step title="1. Cria o projeto">
            <p>
              Primeiro cria um projeto Node. O <code>npm init</code> cria o
              <code>package.json</code>, que será usado para controlar as
              dependências do projeto.
            </p>

            <CodeBlock
              language="bash"
              code={`npm init -y
npm install bando-cms
npx bando init`}
            />

            <p>
              O primeiro comando cria o projeto, o segundo instala o Bando e
              o terceiro inicializa a configuração necessária.
            </p>
          </Step>

          <Step title="2. Inicia o PostgreSQL">
            <p>
              O Bando precisa de uma base de dados para persistir os
              documentos. O comando abaixo cria um PostgreSQL local usando
              Docker.
            </p>

            <CodeBlock
              language="bash"
              code={`docker run --name bando-postgres -e POSTGRES_USER=bando -e POSTGRES_PASSWORD=bando -e POSTGRES_DB=bando -p 5432:5432 -d postgres:16-alpine`}
            />
          </Step>

          <Step title="3. Inicia o Bando">
            <p>
              Agora inicia o runtime em modo de desenvolvimento:
            </p>

            <CodeBlock
              language="bash"
              code="npx bando dev"
            />

            <p>
              O runtime ficará disponível em:
            </p>

            <CodeBlock
              language="text"
              code="http://localhost:3333"
            />

            <p>
              O Studio está disponível em:
            </p>

            <CodeBlock
              language="text"
              code="http://localhost:3333/admin"
            />
          </Step>
        </Steps>

        <Callout type="warning">
          Em produção, <code>JWT_SECRET</code> é obrigatório. Não uses
          credenciais de desenvolvimento em ambientes públicos.
        </Callout>

        <h3>Próximo passo</h3>

        <p>
          Agora que o projeto está funcionando, vamos definir os tipos de conteúdo
          que a nossa aplicação precisa.
        </p>

        <Link href="/docs/configuration" className="btn btn-ghost">
          Configurar o Bando →
        </Link>
      </div>
    );
  }

  if (path === "configuration") {
    return (
      <div className="docs-content">
        <h3>Para que serve a configuração?</h3>

        <p>
          O Bando precisa conhecer duas coisas importantes antes de executar
          a aplicação:
        </p>

        <ol>
          <li>
            Onde está a base de dados que vai armazenar os documentos.
          </li>
          <li>
            Quais collections fazem parte do projeto.
          </li>
        </ol>

        <p>
          Essas informações ficam no <code>bando.config.ts</code>.
        </p>

        <CodeBlock
          language="ts"
          code={config}
        />

        <h3>database.url</h3>

        <p>
          <code>database.url</code> informa ao Bando como conectar ao
          PostgreSQL.
        </p>

        <p>
          No exemplo usamos <code>process.env.DATABASE_URL</code>. Isso
          significa que o valor vem de uma variável de ambiente em vez de
          ficar escrito diretamente no código.
        </p>

        <h3>collections</h3>

        <p>
          <code>collections</code> informa ao Bando quais collections foram
          registradas pela aplicação.
        </p>

        <p>
          Uma collection é a definição de um tipo de conteúdo. Por exemplo,
          um blog pode ter uma collection chamada <code>posts</code>.
        </p>

        <ParameterTable
          rows={[
            {
              name: "database.url",
              type: "string",
              description:
                "URL de conexão com PostgreSQL. Se faltar, o runtime utiliza DATABASE_URL e depois a URL local predefinida.",
            },
            {
              name: "collections",
              type: "array ou record",
              required: "sim",
              description:
                "Collections disponíveis para o runtime. É necessária pelo menos uma collection registada.",
            },
          ]}
        />

        <Callout>
          A configuração descreve como o runtime deve funcionar. Os dados
          reais dos teus conteúdos continuam armazenados no PostgreSQL.
        </Callout>

        <Link href="/docs/concepts/collections" className="btn btn-ghost">
          Aprender sobre collections →
        </Link>
      </div>
    );
  }

  if (path === "concepts/collections") {
    return (
      <div className="docs-content">
        <h3>O que é uma collection?</h3>

        <p>
          Uma collection define a estrutura de um tipo de conteúdo.
        </p>

        <p>
          Se estás habituado a TypeScript, podes pensar nela inicialmente
          como uma definição que descreve quais dados um determinado tipo de
          conteúdo pode ter.
        </p>

        <p>
          Num blog, por exemplo, podemos ter:
        </p>

        <div className="docs-example-list">
          <div>
            <strong>posts</strong>
            <br />
            <span>Artigos publicados no blog.</span>
          </div>

          <div>
            <strong>authors</strong>
            <br />
            <span>Pessoas que escrevem os artigos.</span>
          </div>
        </div>

        <h3>Definindo uma collection</h3>

        <FileCodeBlock
          path="collections/posts.ts"
          language="ts"
          code={schema}
        />

        <h3>Entendendo o código</h3>

        <p>
          <code>defineCollection()</code> cria a definição da collection.
        </p>

        <p>
          O <code>name</code> identifica a collection:
        </p>

        <CodeBlock
          language="ts"
          code={`name: "posts"`}
        />

        <p>
          O <code>description</code> explica o propósito da collection:
        </p>

        <CodeBlock
          language="ts"
          code={`description: "Artigos do blog"`}
        />

        <p>
          E <code>fields</code> define os campos que os documentos dessa
          collection podem possuir.
        </p>

        <h3>Fields</h3>

        <p>
          Um field é uma propriedade de um documento.
        </p>

        <p>
          No nosso exemplo, um post possui título, slug, conteúdo e estado
          de publicação.
        </p>

        <ParameterTable
          rows={[
            {
              name: "string / text",
              type: "field",
              description:
                "Campo destinado a valores de texto.",
            },
            {
              name: "boolean",
              type: "field",
              description:
                "Campo que representa verdadeiro ou falso.",
            },
            {
              name: "number",
              type: "field",
              description:
                "Campo destinado a valores numéricos.",
            },
            {
              name: "date",
              type: "field",
              description:
                "Campo de data. Aceita Date ou string.",
            },
            {
              name: "relation",
              type: "field",
              description:
                "Campo que guarda referência a outro documento.",
            },
          ]}
        />

        <h3>Campos obrigatórios</h3>

        <p>
          Quando escrevemos:
        </p>

        <CodeBlock
          language="ts"
          code={`title: text({ required: true })`}
        />

        <p>
          estamos dizendo que um documento não pode ser criado sem um
          <code>title</code>.
        </p>

        <Callout>
          Uma collection descreve a estrutura. Os documentos são os valores
          concretos que serão criados posteriormente.
        </Callout>

        <Link href="/docs/concepts/documents" className="btn btn-ghost">
          Entender documentos →
        </Link>
      </div>
    );
  }

  if (path === "concepts/documents") {
    return (
      <div className="docs-content">
        <h3>Collection vs. document</h3>

        <p>
          Esta é uma das distinções mais importantes do Bando.
        </p>

        <p>
          A <strong>collection</strong> descreve a estrutura. Um <strong>document</strong> é um registro concreto dessa estrutura.
        </p>

        <div className="docs-flow">
          <div>
            <strong>Collection</strong>
            <span>Define como um post deve ser.</span>
          </div>

          <div>
            <strong>Document</strong>
            <span>Representa um post específico.</span>
          </div>
        </div>

        <p>
          Se a collection for <code>posts</code>, podemos ter documentos como:
        </p>

        <CodeBlock
          language="json"
          code={`{
  "id": "post-123",
  "collection": "posts",
  "data": {
    "title": "Aprendendo Bando",
    "slug": "aprendendo-bando",
    "content": "Meu primeiro artigo",
    "published": true
  }
}`}
        />

        <h3>Estrutura de um documento</h3>

        <p>
          O Bando trabalha com documentos que possuem informações sobre o
          próprio registro e os dados definidos pela collection.
        </p>

        <ul>
          <li>
            <code>id</code> identifica o documento.
          </li>
          <li>
            <code>collection</code> indica a collection à qual pertence.
          </li>
          <li>
            <code>data</code> contém os campos definidos pela collection.
          </li>
          <li>
            <code>createdAt</code> indica quando foi criado.
          </li>
          <li>
            <code>updatedAt</code> indica quando foi atualizado.
          </li>
        </ul>

        <h3>Relations</h3>

        <p>
          Uma relation permite que um documento faça referência a outro
          documento.
        </p>

        <p>
          Imagina que cada post possui um autor. Em vez de duplicar todas as
          informações do autor dentro do post, podemos guardar uma
          referência ao documento da collection <code>authors</code>.
        </p>

        <CodeBlock
          language="ts"
          code={`author: relation({
  collection: "authors",
  required: true,
})`}
        />

        <p>
          O fluxo pode ser entendido assim:
        </p>

        <div className="docs-flow">
          <div>
            <strong>posts</strong>
            <span>Documento do artigo.</span>
          </div>

          <div>
            <strong>author</strong>
            <span>Referência.</span>
          </div>

          <div>
            <strong>authors</strong>
            <span>Documento do autor.</span>
          </div>
        </div>

        <h3>Uma relation para vários documentos</h3>

        <p>
          Quando um documento pode referenciar vários documentos, utiliza <code>multiple: true</code>.
        </p>

        <CodeBlock
          language="ts"
          code={`reviewers: relation({
  collection: "authors",
  multiple: true,
})`}
        />

        <Callout type="warning">
          A collection de destino e os IDs referenciados precisam existir.
          Um documento que ainda é referenciado não pode ser apagado. Nesse
          caso a API devolve <code>409</code>.
        </Callout>

        <Link href="/docs/studio" className="btn btn-ghost">
          Gerir documentos no Studio →
        </Link>
      </div>
    );
  }

  if (path === "studio") {
    return (
      <div className="docs-content">
        <h3>O que é o Bando Studio?</h3>

        <p>
          O Bando Studio é a interface onde crias, editas e organizas o
          conteúdo do projeto.
        </p>

        <p>
          Se estás a construir um site para ti ou para um cliente, o conteúdo
          não deve obrigar ninguém a editar ficheiros TypeScript. O Bando Studio
          fornece uma interface simples para criar e editar os documentos
          definidos pelas collections.
        </p>

        <h3>Como o Bando Studio se relaciona com o teu projeto?</h3>

        <div className="docs-flow">
          <div>
            <strong>Collection</strong>
            <span>Define a estrutura.</span>
          </div>

          <div>
            <strong>Studio</strong>
            <span>Permite gerir os documentos.</span>
          </div>

          <div>
            <strong>API</strong>
            <span>Disponibiliza os dados.</span>
          </div>
        </div>

        <p>
          O Studio e a API trabalham sobre as mesmas collections e documentos.
          Não são dois sistemas de dados diferentes.
        </p>

        <Steps>
          <Step title="Configura as credenciais">
            <p>
              Define as credenciais do administrador através das variáveis de
              ambiente do Bando.
            </p>

            <CodeBlock
              language="bash"
              code={`BANDO_ADMIN_EMAIL=bando@admin.com
BANDO_ADMIN_PASSWORD=password`}
            />

            <p>
              Estas credenciais serão utilizadas para entrar no Bando Studio.
            </p>
          </Step>

          <Step title="Inicia o Bando">
            <p>
              Executa o runtime em desenvolvimento.
            </p>

            <CodeBlock
              language="bash"
              code="npx bando dev"
            />
          </Step>

          <Step title="Abre o Studio">
            <p>
              Acede ao Studio em:
            </p>

            <CodeBlock
              language="text"
              code="http://localhost:3333/admin"
            />
          </Step>

          <Step title="Inicia sessão">
            <p>
              Utiliza o email e a password definidos nas variáveis de ambiente
              para entrar no Studio.
            </p>
          </Step>

          <Step title="Escolhe uma collection">
            <p>
              O Studio descobre as collections registadas no runtime, como
              <code>posts</code>.
            </p>
          </Step>

          <Step title="Gere os documentos">
            <p>
              Criar e editar documentos utiliza as mesmas estruturas e rotas
              REST disponibilizadas pelo Bando.
            </p>
          </Step>
        </Steps>

        <Callout type="warning">
          Nunca coloques as credenciais de administração diretamente no código
          da aplicação ou em variáveis públicas. Utiliza variáveis de ambiente
          e mantém o ficheiro <code>.env</code> fora do controlo de versão.
        </Callout>

        <Link
          href="/docs/using-bando/querying"
          className="btn btn-ghost"
        >
          Aprender a consultar conteúdo →
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
        <h3>Consultar conteúdo</h3>

        <p>
          Depois de criares documentos, a próxima tarefa é buscá-los na tua
          aplicação.
        </p>

        <p>
          O Bando permite combinar filtros, paginação e ordenação numa única
          consulta.
        </p>

        <h3>Um exemplo real</h3>

        <p>
          Imagina que queremos os 10 posts publicados mais recentemente:
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

        <h3>O que recebemos?</h3>

        <p>
          O resultado possui duas informações importantes:
        </p>

        <CodeBlock
          language="ts"
          code={`const { data, total } = result;`}
        />

        <p>
          <code>data</code> contém os documentos encontrados.
        </p>

        <p>
          <code>total</code> informa o total de documentos que correspondem
          à consulta, permitindo construir paginação na interface.
        </p>

        <h3>Paginação</h3>

        <p>
          <code>limit</code> define quantos documentos queremos receber.
          <code>offset</code> define quantos documentos devem ser ignorados
          antes de começar a devolver resultados.
        </p>

        <p>
          Por exemplo, para buscar os primeiros 10:
        </p>

        <CodeBlock
          language="ts"
          code={`{
  limit: 10,
  offset: 0,
}`}
        />

        <p>
          Para buscar os próximos 10:
        </p>

        <CodeBlock
          language="ts"
          code={`{
  limit: 10,
  offset: 10,
}`}
        />

        <h3>Ordenação</h3>

        <p>
          A ordenação aceita <code>id</code>, <code>createdAt</code> e
          <code>updatedAt</code>.
        </p>

        <p>
          Um <code>-</code> antes do campo significa ordem descendente:
        </p>

        <CodeBlock
          language="ts"
          code={`sort: "-createdAt"`}
        />

        <h3>Filtros</h3>

        <p>
          Os filtros atuais usam igualdade.
        </p>

        <CodeBlock
          language="ts"
          code={`filters: {
  published: true,
}`}
        />

        <p>
          Isso procura documentos cujo campo <code>published</code> seja
          verdadeiro.
        </p>

        <ParameterTable rows={queryRows} />

        <Callout>
          Começa com consultas simples. Depois combina filtro, ordenação e
          paginação conforme a necessidade da interface.
        </Callout>

        <Link href="/docs/client/mutations" className="btn btn-ghost">
          Aprender mutações →
        </Link>

        <br />

        <Link href="/docs/client" className="btn btn-ghost">
          Conhecer o cliente TypeScript →
        </Link>
      </div>
    );
  }

  if (path === "client") {
    return (
      <div className="docs-content">
        <h3>Por que usar o cliente TypeScript?</h3>

        <p>
          O Bando possui uma API REST que pode ser consumida diretamente por
          HTTP. O cliente TypeScript é uma camada de conveniência que evita
          teres de construir manualmente todas essas requests.
        </p>

        <p>
          Se já estás habituado a trabalhar com <code>fetch</code>, pensa no
          cliente como uma interface tipada sobre a API do Bando.
        </p>

        <h3>Gera a API Key</h3>

        <p>
          Para consumir endpoints protegidos do Bando, precisas de uma API Key.
          Se ainda não tens uma, podes gerar uma através do CLI:
        </p>

        <CodeBlock
          language="bash"
          code="npx bando key"
        />

        <p>
          Se utilizas pnpm, podes executar o mesmo comando com:
        </p>

        <CodeBlock
          language="bash"
          code="pnpm bando key"
        />

        <p>
          A chave gerada deve ser configurada no ambiente onde o cliente será
          executado.
        </p>

        <Callout type="warning">
          A API Key dá acesso a recursos protegidos da API. Nunca a coloques
          diretamente no código-fonte, nem em variáveis <code>NEXT_PUBLIC_*</code>
          ou outras variáveis expostas ao browser.
        </Callout>

        <h3>Configura o cliente</h3>

        <p>
          Depois de gerar a key, cria o cliente indicando o endereço da API e
          a chave utilizada para autenticação.
        </p>

        <FileCodeBlock
          path="lib/bando.ts"
          language="ts"
          code={client}
        />

        <h3>O que é o createBandoClient?</h3>

        <p>
          <code>createBandoClient()</code> cria uma instância que sabe onde está
          a API do Bando e como autenticar as requests.
        </p>

        <p>
          <code>baseUrl</code> indica o endereço onde o Bando está a correr.
        </p>

        <p>
          A API Key é enviada para autenticar as requests que precisam de
          acesso protegido.
        </p>

        <h3>Trabalhando com uma collection</h3>

        <p>
          Depois de criar o cliente, podes obter uma collection através do
          método <code>collection()</code>:
        </p>

        <CodeBlock
          language="ts"
          code={`const posts = bando.collection<Post>("posts");`}
        />

        <p>
          A partir daí podes utilizar os métodos disponíveis para consultar
          e alterar documentos:
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
          Cada método corresponde a uma operação diferente sobre os documentos.
        </p>

        <Link
          href="/docs/client/find-many"
          className="btn btn-ghost"
        >
          Aprender findMany() →
        </Link>

        <br />

        <Link
          href="/docs/client/mutations"
          className="btn btn-ghost"
        >
          Aprender mutations →
        </Link>

        <Callout type="warning">
          Tokens e API Keys privilegiados devem permanecer no servidor. Se o
          cliente for utilizado numa aplicação frontend, cria uma camada
          server-side para comunicar com o Bando em vez de expor a chave no
          browser.
        </Callout>
      </div>
    );
  }

  if (path === "client/mutations") {
    return (
      <div className="docs-content">
        <h3>O que é uma mutation?</h3>

        <p>
          Uma mutation é uma operação que altera dados.
        </p>

        <p>
          No cliente TypeScript tens quatro operações principais:
        </p>

        <div className="docs-example-list">
          <div>
            <strong>findById()</strong>
            <br />
            <span>Lê um documento específico.</span>
          </div>

          <div>
            <strong>create()</strong>
            <br />
            <span>Cria um documento.</span>
          </div>

          <div>
            <strong>update()</strong>
            <br />
            <span>Atualiza um documento.</span>
          </div>

          <div>
            <strong>delete()</strong>
            <br />
            <span>Remove um documento.</span>
          </div>
        </div>

        <CodeBlock
          language="ts"
          code={`import { bando } from "@/lib/bando";
import type { Post } from "@/types/post";

const posts = bando.collection<Post>("posts");

const post = await posts.findById("document-id");

await posts.create({
  title: "Olá",
  slug: "ola",
  content: "…",
  published: false,
});

await posts.update("document-id", {
  published: true,
});

await posts.delete("document-id");`}
        />

        <h3>findById()</h3>

        <p>
          Procura um documento pelo seu ID.
        </p>

        <CodeBlock
          language="ts"
          code={`const post = await posts.findById("document-id");`}
        />

        <p>
          Quando o documento não existe, <code>findById()</code> devolve
          <code>null</code>.
        </p>

        <h3>create()</h3>

        <p>
          Cria um novo documento utilizando os campos definidos pela
          collection.
        </p>

        <h3>update()</h3>

        <p>
          Atualiza um documento existente.
        </p>

        <h3>delete()</h3>

        <p>
          Remove um documento.
        </p>

        <Callout type="warning">
          Documents que ainda são referenciados por relations não podem ser
          removidos. A API devolve <code>409</code> nesse cenário.
        </Callout>

        <p>
          Os métodos, exceto <code>findById()</code> quando não encontra o
          documento, rejeitam a Promise quando a API devolve um erro. <code>create()</code> e <code>update()</code> devolvem o documento
          resultante.
        </p>
      </div>
    );
  }

  if (path === "api/authentication") {
    return (
      <div className="docs-content">
        <h3>Por que existe autenticação?</h3>

        <p>
          A API do Bando pode conter conteúdo privado e operações que alteram
          dados. Por isso, determinados endpoints exigem que o cliente prove
          que possui autorização para utilizá-los.
        </p>

        <h3>O fluxo de autenticação</h3>

        <div className="docs-flow">
          <div>
            <strong>1. Login</strong>
            <span>Envia email e password.</span>
          </div>

          <div>
            <strong>2. Token</strong>
            <span>O Bando devolve um token.</span>
          </div>

          <div>
            <strong>3. Request</strong>
            <span>O cliente envia o token.</span>
          </div>

          <div>
            <strong>4. API</strong>
            <span>O Bando valida a autenticação.</span>
          </div>
        </div>

        <h3>Fazer login</h3>

        <p>
          O login é feito através de <code>POST /api/auth/login</code>.
        </p>

        <Endpoint
          method="POST"
          path="/api/auth/login"
        >
          <p>
            Envia as credenciais no body da request.
          </p>

          <CodeBlock
            language="bash"
            code={`curl -X POST http://localhost:3333/api/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{"email":"admin@example.com","password":"change-me-now"}'`}
          />

          <p>
            A resposta contém o token, a data de expiração e os dados do
            utilizador:
          </p>

          <CodeBlock
            language="json"
            code={`{
  "data": {
    "token": "...",
    "expiresAt": "...",
    "user": {}
  }
}`}
          />
        </Endpoint>

        <h3>Bearer token</h3>

        <p>
          Depois do login, requests protegidas utilizam o token através do
          header <code>Authorization</code>.
        </p>

        <CodeBlock
          language="http"
          code={`Authorization: Bearer <token>`}
        />

        <p>
          "Bearer" significa que o token apresentado no header é utilizado
          como credencial da request.
        </p>

        <Callout type="warning">
          Nunca coloques um token privilegiado diretamente no código público
          do browser.
        </Callout>

        <h3>Outros endpoints de autenticação</h3>

        <ul>
          <li>
            <code>GET /api/auth/me</code> — requer token.
          </li>
          <li>
            <code>POST /api/auth/logout</code> — requer token.
          </li>
          <li>
            <code>POST /api/auth/logout-all</code> — requer token.
          </li>
        </ul>
      </div>
    );
  }

  if (path === "api/documents") {
    return (
      <div className="docs-content">
        <h3>A API de documentos</h3>

        <p>
          A API REST permite que qualquer aplicação capaz de fazer requests
          HTTP trabalhe com os documentos do Bando.
        </p>

        <p>
          Se estás a construir uma aplicação React, Vue, mobile ou qualquer
          outro cliente HTTP, não precisas utilizar o cliente TypeScript.
          Podes consumir estas rotas diretamente.
        </p>

        <h3>Métodos HTTP</h3>

        <div className="docs-example-list">
          <div>
            <strong>GET</strong>
            <br />
            <span>Ler dados.</span>
          </div>

          <div>
            <strong>POST</strong>
            <br />
            <span>Criar dados.</span>
          </div>

          <div>
            <strong>PATCH</strong>
            <br />
            <span>Atualizar dados.</span>
          </div>

          <div>
            <strong>DELETE</strong>
            <br />
            <span>Remover dados.</span>
          </div>
        </div>

        <Callout>
          As rotas abaixo exigem um Bearer token quando indicado pela API.
        </Callout>

        <Endpoint
          method="GET"
          path="/api/collections"
        >
          <p>
            Lista as collections disponíveis.
          </p>

          <p>
            Também é possível consultar uma collection específica através de <code>GET /api/collections/:name</code>.
          </p>
        </Endpoint>

        <Endpoint
          method="GET"
          path="/api/:collection"
        >
          <p>
            Lista documentos de uma collection.
          </p>

          <p>
            A resposta possui os documentos em <code>data</code> e o número
            total em <code>total</code>.
          </p>

          <CodeBlock
            language="json"
            code={`{
  "data": [],
  "total": 0
}`}
          />

          <ParameterTable rows={queryRows} />
        </Endpoint>

        <Endpoint
          method="GET"
          path="/api/:collection/:id"
        >
          <p>
            Procura um documento específico pelo ID.
          </p>

          <p>
            Em caso de sucesso devolve:
          </p>

          <CodeBlock
            language="json"
            code={`{
  "data": {
    "id": "...",
    "collection": "...",
    "data": {}
  }
}`}
          />
        </Endpoint>

        <Endpoint
          method="POST"
          path="/api/:collection"
        >
          <p>
            Cria um novo documento. Os dados são enviados no body da
            request.
          </p>

          <p>
            Em caso de sucesso a API devolve <code>201</code>.
          </p>
        </Endpoint>

        <Endpoint
          method="PATCH"
          path="/api/:collection/:id"
        >
          <p>
            Atualiza parcialmente um documento existente.
          </p>
        </Endpoint>

        <Endpoint
          method="DELETE"
          path="/api/:collection/:id"
        >
          <p>
            Remove um documento.
          </p>

          <p>
            Em caso de sucesso devolve <code>204</code>.
          </p>

          <p>
            Erros de validação devolvem <code>400</code> com informações em
            <code>error</code> e <code>issues</code>.
          </p>
        </Endpoint>

        <Link href="/docs/api/authentication" className="btn btn-ghost">
          Ver autenticação REST →
        </Link>
      </div>
    );
  }

  if (path === "frameworks/nextjs") {
    return (
      <div className="docs-content">
        <h3>Bando + Next.js</h3>

        <p>
          Se já conheces Next.js, podes consumir o Bando diretamente num
          Server Component.
        </p>

        <p>
          Isto é útil quando queres buscar conteúdo durante o render no
          servidor sem expor credenciais privilegiadas ao browser.
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
);;`}
        />

        <h3>O que está acontecendo?</h3>

        <p>
          Primeiro pedimos ao Bando os documentos da collection
          <code>posts</code>.
        </p>

        <p>
          O filtro garante que apenas posts publicados sejam retornados e a
          ordenação coloca os mais recentes primeiro.
        </p>

        <p>
          Depois usamos o resultado normalmente no React:
        </p>

        <CodeBlock
          language="tsx"
          code={`posts.map((post) => (
  <article key={post.id}>
    {post.data.title}
  </article>
))`}
        />

        <h3>Por que usar o servidor?</h3>

        <p>
          O servidor pode manter o token fora do código entregue ao browser.
          Isso é especialmente importante quando a credencial possui
          permissões privilegiadas.
        </p>

        <Callout type="warning">
          Não coloques <code>BANDO_API_KEY</code> em uma variável
          <code>NEXT_PUBLIC_*</code>. Variáveis com esse prefixo podem ser
          expostas ao browser.
        </Callout>
      </div>
    );
  }

  if (path === "frameworks/react") {
    return (
      <div className="docs-content">
        <h3>Bando com React, Next.js ou qualquer frontend</h3>

        <p>
          O Bando não depende de um framework específico. Qualquer frontend que
          consiga fazer requests HTTP pode consumir o conteúdo.
        </p>

        <p>
          Isto inclui React, Vue, aplicações mobile e outros projetos que trabalhem
          com HTTP.
        </p>

        <h3>Usando fetch</h3>

        <CodeBlock
          language="ts"
          code={`const response = await fetch(
  "http://localhost:3333/api/posts",
  {
    headers: {
      Authorization: \`Bearer \${token}\`,
    },
  }
);

const { data, total } = await response.json();`}
        />

        <h3>Entendendo a request</h3>

        <p>
          <code>fetch()</code> envia uma request HTTP para a API.
        </p>

        <p>
          <code>response</code> representa a resposta HTTP recebida.
        </p>

        <p>
          <code>response.json()</code> transforma o body JSON em um objeto
          JavaScript.
        </p>

        <p>
          Finalmente, <code>data</code> contém os documentos e
          <code>total</code> informa a quantidade total de resultados.
        </p>

        <Callout type="warning">
          Nunca coloques tokens privilegiados num bundle React público.
          Qualquer segredo incluído no JavaScript enviado ao browser pode ser
          inspecionado pelo utilizador.
        </Callout>

        <Link href="/docs/api/documents" className="btn btn-ghost">
          Ver a API REST →
        </Link>
      </div>
    );
  }

  if (path === "reference/environment") {
    return (
      <div className="docs-content">
        <h3>O que são variáveis de ambiente?</h3>

        <p>
          Variáveis de ambiente são valores fornecidos ao processo quando o
          Bando é executado.
        </p>

        <p>
          Elas são especialmente úteis para configurações que mudam entre
          ambientes, como desenvolvimento e produção, e para informações
          que não devem ser escritas diretamente no código.
        </p>

        <ParameterTable
          rows={[
            {
              name: "DATABASE_URL",
              type: "string",
              description:
                "URL usada para conectar ao PostgreSQL.",
            },
            {
              name: "PORT",
              type: "number",
              defaultValue: "3333",
              description:
                "Porta HTTP utilizada pelo runtime.",
            },
            {
              name: "JWT_SECRET",
              type: "string",
              description:
                "Segredo utilizado para autenticação. É obrigatório em produção.",
            },
            {
              name: "JWT_EXPIRES_IN",
              type: "number",
              defaultValue: "28800",
              description:
                "Duração do token em segundos.",
            },
            {
              name: "BANDO_ADMIN_EMAIL / PASSWORD",
              type: "string",
              description:
                "Credenciais utilizadas para o administrador inicial. Devem ser definidas em conjunto e a password precisa ter pelo menos 8 caracteres.",
            },
            {
              name: "BANDO_ADMIN_NAME",
              type: "string",
              defaultValue: "Bando Administrator",
              description:
                "Nome inicial do administrador.",
            },
            {
              name: "STUDIO_URL",
              type: "string",
              defaultValue: "http://localhost:5173",
              description:
                "Origem permitida pelo CORS.",
            },
          ]}
        />

        <Callout type="warning">
          Segredos como <code>JWT_SECRET</code> e passwords de administrador
          não devem ser commitados no repositório.
        </Callout>
      </div>
    );
  }

  if (path === "reference/deployment") {
    return (
      <div className="docs-content">
        <h3>Como o Bando é composto?</h3>

        <p>
          Antes de fazer deploy, é útil entender quais partes formam o
          runtime.
        </p>

        <div className="docs-flow">
          <div>
            <strong>Core</strong>
            <span>Define schemas e tipos.</span>
          </div>

          <div>
            <strong>Database</strong>
            <span>Persiste os dados.</span>
          </div>

          <div>
            <strong>Server</strong>
            <span>Expõe a API.</span>
          </div>

          <div>
            <strong>Client</strong>
            <span>Facilita o consumo.</span>
          </div>

          <div>
            <strong>Studio</strong>
            <span>Permite gerir conteúdo.</span>
          </div>
        </div>

        <h3>O que precisas em produção?</h3>

        <p>
          O runtime precisa conseguir acessar um PostgreSQL e receber as
          configurações necessárias através do ambiente.
        </p>

        <Steps>
          <Step title="Base de dados">
            <p>
              Configura <code>DATABASE_URL</code> apontando para o PostgreSQL
              de produção.
            </p>
          </Step>

          <Step title="Segurança">
            <p>
              Define um <code>JWT_SECRET</code> forte e privado.
            </p>
          </Step>

          <Step title="Administrador">
            <p>
              Fornece o email e a password necessários para o primeiro
              administrador.
            </p>
          </Step>

          <Step title="Inicia o runtime">
            <CodeBlock
              language="bash"
              code="npx bando start"
            />
          </Step>
        </Steps>

        <h3>Desenvolvimento vs. produção</h3>

        <p>
          Durante o desenvolvimento podes executar o Bando localmente. Em
          produção, o princípio é o mesmo: o runtime precisa de acesso ao
          PostgreSQL e das variáveis de ambiente corretas.
        </p>

        <Callout type="warning">
          Nunca publiques <code>JWT_SECRET</code>, passwords de administrador
          ou outras credenciais no repositório.
        </Callout>

        <Link href="/docs/reference/environment" className="btn btn-ghost">
          Ver todas as variáveis de ambiente →
        </Link>
      </div>
    );
  }

  return (
    <>
      <h1>404</h1>
      <h2>Página não encontrada</h2>
      <p>
        A página que procuras não existe ou foi movida.
      </p>
      <a href="/">Voltar ao início</a>
    </>
  );
}