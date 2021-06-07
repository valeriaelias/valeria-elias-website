const path = require(`path`);

exports.createPages = async ({ graphql, actions, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          slug
        }
      }
    }
  `);

  if (result.errors) {
    reporter.error('There was an error fetching posts', result.errors);
  }

  result.data.allMdx.nodes.forEach((node) => {
    actions.createPage({
      path: node.slug + '/',
      component: path.resolve(`./src/templates/page.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    });
  });
}