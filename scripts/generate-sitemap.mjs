import fs from "node:fs/promises";
import path from "node:path";
import ts from "typescript";

const root = process.cwd();
const siteUrl = "https://www.wenzepower.com";

function readArrayStringProperty(sourceText, filePath, arrayName, propertyName) {
  const sourceFile = ts.createSourceFile(
    filePath,
    sourceText,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS,
  );

  for (const statement of sourceFile.statements) {
    if (!ts.isVariableStatement(statement)) continue;

    for (const declaration of statement.declarationList.declarations) {
      if (!ts.isIdentifier(declaration.name) || declaration.name.text !== arrayName) continue;
      if (!declaration.initializer || !ts.isArrayLiteralExpression(declaration.initializer))
        continue;

      return declaration.initializer.elements.flatMap((element) => {
        if (!ts.isObjectLiteralExpression(element)) return [];
        const property = element.properties.find(
          (candidate) =>
            ts.isPropertyAssignment(candidate) &&
            ((ts.isIdentifier(candidate.name) && candidate.name.text === propertyName) ||
              (ts.isStringLiteral(candidate.name) && candidate.name.text === propertyName)),
        );
        if (!property || !ts.isPropertyAssignment(property)) return [];
        return ts.isStringLiteralLike(property.initializer) ? [property.initializer.text] : [];
      });
    }
  }

  throw new Error(`Unable to find ${arrayName} in ${filePath}`);
}

function xmlEscape(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

const productsPath = path.join(root, "src", "lib", "products-data.ts");
const newsPath = path.join(root, "src", "lib", "news-data.ts");
const [productsSource, newsSource] = await Promise.all([
  fs.readFile(productsPath, "utf8"),
  fs.readFile(newsPath, "utf8"),
]);

const productSlugs = readArrayStringProperty(productsSource, productsPath, "products", "id");
const newsSlugs = readArrayStringProperty(newsSource, newsPath, "newsItems", "slug");

const paths = [
  "/",
  "/products",
  ...productSlugs.map((slug) => `/products/${slug}`),
  "/news",
  ...newsSlugs.map((slug) => `/news/${slug}`),
  "/privacy-policy",
];

const urls = [...new Set(paths)].map((pathname) => new URL(pathname, siteUrl).toString());
const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls.flatMap((url) => ["  <url>", `    <loc>${xmlEscape(url)}</loc>`, "  </url>"]),
  "</urlset>",
  "",
].join("\n");

await fs.writeFile(path.join(root, "public", "sitemap.xml"), sitemap, "utf8");
console.log(`Generated public/sitemap.xml with ${urls.length} URLs.`);
