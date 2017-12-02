const schema = [`
enum userTypes {
  ADMINISTRATOR
  OTHER
}

enum STATUS {
  ACTIVE
  INACTIVE
}

# data to create  a user
input UserInput {
  name: String!,
  lastName: String!,
  mobilePhone: String,
  address: String,
  phone: String!,
  email: String!, 
  type: userTypes!,
  rol: String!,
}

# data to update  a user
input UserEditInput {
  name: String,
  lastName: String,
  mobilePhone: String,
  address: String,
  phone: String,
  email: String, 
  type: userTypes,
  rol: String,
}

# user data
type User {
  id: ID,
  name: String,
  lastName: String,
  mobilePhone: String,
  phone: String,
  address: String,
  type: userTypes,
  rol: String,
  status: STATUS,
  address: String,
  email: String!,
  createdAt: String,
  updatedAt: String,
}

extend type Query {
  # return all users 
  users: [User]
  
  #get User by Id
  userById(id: ID!): User
}
extend type Mutation {
  # create user
  userAdd(data: UserInput): User

  # update user
  userEdit(id: ID!, data: UserEditInput): User

  # delete user
  userDelete(id: ID!): User
  
  # attempt to inactivate the user
  userStatus(id: ID!, status: userStatus): User
}
`];

export default schema;
