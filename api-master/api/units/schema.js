
const schema = [`

  # data to create unit
  input UnitInput {
    # unit name
    name: String!,
    # unit description
    description: String,
    # unit code
    code: String!,
    # unit equivalence
    equivalence: Int!
  }
  
  # data to create unit
  input UnitEditInput {
    # unit name
    name: String,
    # unit description
    description: String,
    # unit code
    code: String,
    # unit equivalence
    equivalence: Int
  }
  
  type Unit {
    id: ID,
    # unit name
    name: String,
    # unit description
    description: String,
    # unit code
    code: String,
    status: STATUS,
    # unit equivalence
    equivalence: Int,
    createdAt: String
  }
  
  extend type Query {
    # fetch all units
    units(status: STATUS): [Unit]
    # find unit by id
    unitById(id: ID!): Unit
  }
  
  extend type Mutation {
    # create unit
    unitAdd(data: UnitInput): Unit
    # update unit
    unitEdit(id: ID!, data: UnitEditInput): Unit
    # delete unit
    unitDelete(id: ID): Unit
    # update status unit
    unitStatus(id: ID!, status:   String): Unit
  }
`];

export default schema;
