import Fastify from 'fastify'
import fs from 'node:fs'
import cors from '@fastify/cors'

const fastify = Fastify({
  logger: true,
})

fastify.register(cors, {
  origin: '*'
})

fastify.get('/', function (request, reply) {
  reply.send({ hello: 'world' })
})

fastify.post('/', function (request, reply) {
  fs.appendFileSync('data/data.txt', JSON.stringify(request.body));
  if(request.body.card === '374245455400126'){
    reply.status(400).send({
      success: false
    })
  }
  reply.status(201).send({
    success: true
  })
})

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})