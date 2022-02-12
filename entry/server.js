import { createApp } from '../client.js'
import { createRenderFunction } from 'fastify-vite-vue/server'
import routes from '../routes.js'

export default {
  routes,
  render: createRenderFunction(createApp),
}
