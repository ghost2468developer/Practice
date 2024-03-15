interface User {
  id: string
  name: string
  email: string
}

let users: User[] = []

const resolvers = {
  Query: {
    hello: () => 'Hello, World!',
    users: () => users,
    user: (parent: any, args: { id: string }) => users.find(user => user.id === args.id)
  },
  Mutation: {
    createUser: (parent: any, args: { name: string, email: string }) => {
      const newUser = { id: String(users.length + 1), ...args }
      users.push(newUser);
      return newUser;
    }
  }
}

export default resolvers
