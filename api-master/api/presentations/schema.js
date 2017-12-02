
const schema = [`

  # data to create presentation
  input PresentationInput {
    # presentation name
    name: String!,
    # presentation description
    description: String,
    # presentation code
    code: String!,
    # presentation equivalence
    equivalence: Int!
  }
  
  # data to create presentation
  input PresentationEditInput {
    # presentation name
    name: String,
    # presentation description
    description: String,
    # presentation code
    code: String,
    # presentation equivalence
    equivalence: Int
  }
  
  type presentation {
    id: ID,
    # presentation name
    name: String,
    # presentation description
    description: String,
    # presentation code
    code: String,
    # presentation equivalence
    equivalence: Int,
    createdAt: String
  }
  
  extend type Query {
    # fetch all presentations
    units(status: STATUS): [Unit]
    # find presentation by id
    unitById(id: ID!): Unit
  }
  
  extend type Mutation {
    # create presentation
    unitAdd(data: UnitInput): Unit
    # update presentation
    unitEdit(id: ID!, data: UnitEditInput): Unit
    # delete presentation
    unitDelete(id: ID): Unit
    # update status presentation
    unitStatus(id: ID!, status:   String): Unit
  }
`];

export default schema;
