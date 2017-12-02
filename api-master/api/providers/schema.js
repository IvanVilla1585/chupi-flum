
const schema = [`

  # data to create provider
  input ProviderInput {
    # nit provider
    _id: String!,
    # provider name
    name: String!,
    # provider address
    address: String!,
    # provider phone
    phone: String!,
    # provider fax
    fax: String,
    # provider email
    companyEmail: String,
    # provider contact name
    contactName: String!,
    # provider contact name
    contactLastName: String,
    # provider contact phone
    contactPhone: String!,
    # provider contact email
    contactEmail: String
  }
  
  # data to create provider
  input ProviderEditInput {
    # nit provider
    _id: String,
    # provider name
    name: String,
    # provider address
    address: String,
    # provider phone
    phone: String,
    # provider fax
    fax: String,
    # provider email
    companyEmail: String,
    # provider contact name
    contactName: String,
    # provider contact name
    contactLastName: String,
    # provider contact phone
    contactPhone: String,
    # provider contact email
    contactEmail: String
  }
  
  type Provider {
    # nit provider
    id: String!,
    # provider name
    name: String!,
    # provider address
    address: String!,
    # provider phone
    phone: String!,
    # provider fax
    fax: String,
    # provider email
    companyEmail: String,
    # provider contact name
    contactName: String!,
    # provider contact name
    contactLastName: String,
    # provider contact phone
    contactPhone: String!,
    # provider contact email
    contactEmail: String!
    status: STATUS,
    createdAt: String
  }
  
  extend type Query {
    # fetch all provider
    providers(status: STATUS): [Provider]
    # find unit by id
    providerById(id: ID!): Provider
  }
  
  extend type Mutation {
    # create provider
    providerAdd(data: ProviderInput): Provider
    # update provider
    providerEdit(id: ID!, data: ProviderEditInput): Provider
    # delete provider
    providerDelete(id: ID): Material
    # update status provider
    providerStatus(id: ID!, status: STATUS): Provider
  }
`];

export default schema;
