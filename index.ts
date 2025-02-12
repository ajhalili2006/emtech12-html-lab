import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { serveStatic } from '@hono/node-server/serve-static'

const app = new Hono()

// https://hono.dev/docs/getting-started/nodejs#serve-static-files
app.use(serveStatic({
  root: "./public"
}))

const port = Number(process.env.PORT) || 3000
console.log(`Preview server is running on http://localhost:${port}, you may need to manually reload your browser tab to see frontend changes.`)

serve({
  fetch: app.fetch,
  port
})
