
import Fastify from 'fastify'
import FastifyVite from 'fastify-vite'
import renderer from 'fastify-vite-vue'

async function main () {
  const app = Fastify()
  const root = process.cwd()

  await app.register(FastifyVite, { 
    root, 
    renderer,
    // entry: {
    //   server: '/entry/server.js'
    // },
    entry: {
      client: '/entry/client.js',
      server: '/entry/server.js'
    },
  })

  await app.vite.ready();
  // await app.vite.get('/*')
  // await app.vite.commands()

  return app
}

if (!process.argv.includes('test')) {
  const app = await main()
  const address = await app.listen(3001)
  console.log(`Listening at ${address}.`)
}

export default main
