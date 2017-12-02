
const schema = [`

  # data to create machine
  input MachineInput {
    # machine name
    name: String!,
    # machine description
    description: String,
    # machine capacity
    capacity: Int!,
    # machine unit
    unit: ID!
  }
  
  # data to create machine
  input MachineEditInput {
    # machine name
    name: String,
    # machine description
    description: String,
    # machine capacity
    capacity: Int!,
    # machine unit
    unit: ID!
  }
  
  type Machine {
    id: ID,
    # machine name
    name: String,
    # machine description
    description: String,
    # machine capacity
    capacity: Int,
    # machine unit
    unit: Unit
    status: STATUS,
    createdAt: String
  }
  
  extend type Query {
    # fetch all machine
    machines(status: STATUS): [Machine]
    # find unit by id
    machineById(id: ID!): Machine
  }
  
  extend type Mutation {
    # create machine
    machineAdd(data: MachineInput): Machine
    # update machine
    machineEdit(id: ID!, data: MachineEditInput): Machine
    # delete machine
    machineDelete(id: ID): Machine
    # update status machine
    machineStatus(id: ID!, status: STATUS): Machine
  }
`];

export default schema;
