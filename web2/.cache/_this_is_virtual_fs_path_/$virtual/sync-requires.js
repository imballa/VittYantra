
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/vivek/Desktop/khali/packages/web2/.cache/dev-404-page.js")),
  "component---src-pages-404-tsx": preferDefault(require("/home/vivek/Desktop/khali/packages/web2/src/pages/404.tsx")),
  "component---src-templates-landing-page-tsx": preferDefault(require("/home/vivek/Desktop/khali/packages/web2/src/templates/landingPage.tsx"))
}

