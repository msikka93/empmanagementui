/**
 * create HTML template for SSR
 * @param {String} appHtml
 * @param {object} initialState
 */

export default function template (appHtml, initialState) {
  const headScripts = `
    <script>
        window.__APP_INITIAL_STATE__ = ${initialState};
    </script>
    `

  const scripts = `
    <script src="vendor.bundle.js"></script>
    <script src="app.bundle.js"></script>
    `

  return `<!doctype html>
    <html>
        <head>
        ${headScripts}
        <base href="/static/">
        <meta http-equiv=X-UA-Compatible content="IE=edge,chrome=1">
        <meta charset=utf-8>
        <meta http-equiv=Content-Type content="text/html;charset=utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <title>EmpManagement</title>
        <link rel=stylesheet href=style.css>
        </head>
        <body>
            <div id=react-app>${appHtml}</div>
            ${scripts}
        </body>
    </html>`
}
