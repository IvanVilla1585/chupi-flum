
const schema = [`

  # data to create material
  input MaterialInput {
    # material name
    name: String!,
    # material description
    description: String,
    # material quantity
    quantity: Int,
    # material stock
    stock: Int!,
    # material unit
    unit: ID!
    # material category
    category: ID!
  }
  
  # data to create material
  input MaterialEditInput {
    # material name
    name: String,
    # material description
    description: String,
    # material quantity
    quantity: Int,
    # material stock
    stock: Int,
    # material unit
    unit: ID
    # material category
    category: ID
  }
  
  type Material {
    id: ID,
    # material name
    name: String,
    # material description
    description: String,
    # material quantity
    quantity: Int,
    # material stock
    stock: Int,
    # material unit
    unit: Unit
    # material category
    category: Category
    status: STATUS,
    createdAt: String
  }
  
  extend type Query {
    # fetch all material
    materials(status: STATUS): [Material]
    # find unit by id
    materialById(id: ID!): Material
  }
  
  extend type Mutation {
    # create material
    materialAdd(data: MaterialInput): Material
    # update material
    materialEdit(id: ID!, data: MaterialEditInput): Material
    # delete material
    materialDelete(id: ID): Material
    # update status material
    materialStatus(id: ID!, status: STATUS): Material
  }
`];

export default schema;
