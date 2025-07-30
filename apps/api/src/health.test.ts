import request from 'supertest'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

import { buildServer } from './server.ts'

let app: ReturnType<typeof buildServer>

beforeAll(async () => {
  app = buildServer()
  await app.ready()
})

afterAll(async () => {
  await app.close()
})

describe('GET /healthz', () => {
  it('returns 200 { ok:true }', async () => {
    const response = await request(app.server).get('/healthz')

    expect(response.status).toBe(200)
    expect(response.body).toEqual({ ok: true })
  })
})
