
const schema = [`

  # data to create product
  input ProductInput {
    # product name
    name: String!,
    # product description
    description: String,
    # product quantity
    quantity: Int,
    # product stock
    stock: Int!,
    # product unit
    unit: ID!,
    # product category
    category: ID!,
    # product presentation
    presentation: ID!,
    # product quantity to production
    quantityFormula: Int!,
    # process to product
    process: [ID!]!,
    # formula to product
    formula: [FormulaInput]!
  }
  
  # data to create formula
  input FormulaInput {
    # id material
    material: ID!,
    # id unit
    unit: ID!,
    # quantity material
    quantity: Int!
  }
  
  # data to create product
  input ProductEditInput {
    # product name
    name: String,
    # product description
    description: String,
    # product quantity
    quantity: Int,
    # product stock
    stock: Int,
    # product unit
    unit: ID,
    # product category
    category: ID,
    # product presentation
    presentation: ID,
    # product quantity to production
    quantityFormula: Int,
    # process to product
    process: [ID],
    # formula to product
    formula: [FormulaInput]
  }
  
  type Product {
    id: ID,
    # product name
    name: String,
    # product description
    description: String,
    # product quantity
    quantity: Int,
    # product stock
    stock: Int,
    # product unit
    unit: Unit,
    # product category
    category: Category,
    # product presentation
    presentation: Presentation,
    # product quantity to production
    quantityFormula: Int,
    # process to product
    process: [Process],
    # formula to product
    formula: [Formula]
    status: STATUS,
    createdAt: String
  }
  
  type Formula {
    material: Material,
    unit: Unit,
    quantity: Int
  }
  
  extend type Query {
    # fetch all product
    products(status: STATUS): [Product]
    # find product by id
    productById(id: ID!): Product
  }
  
  extend type Mutation {
    # create product
    productAdd(data: ProductInput): Product
    # update product
    productEdit(id: ID!, data: ProductEditInput): Product
    # delete product
    productDelete(id: ID): Product
    # update status product
    productStatus(id: ID!, status: STATUS): Product
  }
`];

export default schema;
