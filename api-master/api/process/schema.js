
const schema = [`

  # data to create process
  input ProcessInput {
    # process name
    name: String!,
    # process description
    description: String,
    # process time
    time: String!,
    # process unit
    machine: ID!
  }
  
  # data to create process
  input ProcessEditInput {
    # process name
    name: String,
    # process description
    description: String,
    # process time
    time: String,
    # process unit
    machine: ID
  }
  
  type Process {
    id: ID,
    # process name
    name: String,
    # process description
    description: String,
    # process time
    time: String,
    # machine to process
    machine: Machine
    status: STATUS,
    createdAt: String
  }
  
  extend type Query {
    # fetch all process
    process(status: STATUS): [Process]
    # find process by id
    processById(id: ID!): Process
  }
  
  extend type Mutation {
    # create process
    processAdd(data: ProcessInput): Process
    # update process
    processEdit(id: ID!, data: ProcessEditInput): Process
    # delete process
    processDelete(id: ID): Process
    # update status process
    processStatus(id: ID!, status: STATUS): Process
  }
`];

export default schema;
