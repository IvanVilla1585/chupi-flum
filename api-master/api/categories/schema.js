
const schema = [`

  enum CODE {
    PRODUCT,
    MATERIAL
  }

  # data to create category
  input CategoryInput {
    # category name
    name: String!,
    # category description
    description: String,
    code: CODE!
  }
  
  # data to update category
  input CategoryEditInput {
    # category name
    name: String,
    # category description
    description: String,
    code: CODE
  }
  
  # data category
  type Category {
    id: ID,
    # category name
    name: String,
    # category description
    description: String,
    code: CODE,
    status: Boolean
  }
  
  extend type Query {
    # find all categories
    categories: [Category]
    # find category by id
    categoryById(id: ID!): Category
    # find category for products
    categoryByCode(code: String!): [Category]
  }
  
  extend type Mutation {
    # create category
    categoryAdd(data: CategoryInput): Category
    # update category
    categoryEdit(id: ID!, data: CategoryEditInput): Category
    # delete category
    categoryDelete(id: ID!): Category
    # update status category
    categoryStatus(id: ID!, status: Boolean): Category
  }
`];

export default schema;