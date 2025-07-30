import { fileURLToPath } from 'node:url'

import Fastify from 'fastify'

export function buildServer() {
  const app = Fastify({ logger: true })
  app.get('/healthz', async () => ({ ok: true }))
  return app
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const app = buildServer()

  app
    .listen({ port: 3000 })
    .then(() => app.log.info('API listening on port 3000'))
    .catch(err => {
      app.log.error(err)
      process.exit(1)
    })
}
