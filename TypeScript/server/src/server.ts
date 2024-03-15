import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import typeDefs from './schema'
import resolvers from './resolvers'

const PORT = process.env.PORT || 4000

async function startServer() {
  const app = express()
  const apolloServer = new ApolloServer({ typeDefs, resolvers })

  await apolloServer.start()
  apolloServer.applyMiddleware({ app })

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
  })
}

startServer().catch((err) => {
  console.error('Error starting server:', err)
})
