
const schema = [`

  # data to create presentation
  input PresentationInput {
    # presentation name
    name: String!,
    # presentation description
    description: String
  }
  
  # data to create presentation
  input PresentationEditInput {
    # presentation name
    name: String,
    # presentation description
    description: String
  }
  
  type Presentation {
    id: ID,
    # presentation name
    name: String,
    # presentation description
    description: String,
    # presentation status
    status: STATUS,
    createdAt: String
  }
  
  extend type Query {
    # fetch all presentation
    presentations(status: STATUS): [Presentation]
    # find presentation by id
    presentationById(id: ID!): Presentation
  }
  
  extend type Mutation {
    # create presentation
    presentationAdd(data: PresentationInput): Presentation
    # update presentation
    presentationEdit(id: ID!, data: PresentationEditInput): Presentation
    # delete presentation
    presentationDelete(id: ID): Presentation
    # update status presentation
    presentationStatus(id: ID!, status: STATUS): Presentation
  }
`];

export default schema;
