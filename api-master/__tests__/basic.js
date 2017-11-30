import fetch from 'node-fetch';
import { run } from '../api/server';

const testPort = 6789;
const endpointUrl = `http://localhost:${testPort}/graphql`;
const root_endpointUrl = `http://localhost:${testPort}`;

let server;
beforeAll(() => {
  server = run(testPort);
});

it('Server up', async () => {
  const result = await fetch(root_endpointUrl);
  expect(result.status).toBe(200);
});

it('accepts a query', async () => {
  const result = await fetchGraphQL(`
    query loggedUser { me { name, role, createdAt } }
  `);
  const text = await result.text();

  console.log(result.status);
  console.log(text);

  expect(text).toMatchSnapshot();
});


afterAll(() => {
  server.close();
  server = null;
});

function fetchGraphQL(query, variables) {
  return fetch(endpointUrl, {
    method: 'post',
    body: JSON.stringify({ query, variables }),
    headers: { 'content-type': 'application/json' },
  });
}
