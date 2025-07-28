import { execSync } from 'node:child_process'

const bytes = Number(execSync('du -bs apps/web/dist/assets/*.js | cut -f1').toString())

if (bytes > 80 * 1024) {
  console.error(`❌ Bundle is ${bytes} bytes, exceeds 80 kB.`)
  process.exit(1)
}

console.log('✔ bundle within 80 kB –', bytes, 'bytes')
