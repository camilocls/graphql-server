'use strict';

const { graphql, buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    foo: String,
    name: String
  }

  type schema {
    query: Query
  }
`);

const resolvers = {
  foo: () => 'bar',
  name: () => 'Nam etext'
};

const query = `
  query myFirstQuery {
    name
  }
`;

graphql(schema, query, resolvers)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
