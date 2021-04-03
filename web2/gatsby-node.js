const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

const { getPagePath } = require('./utils');

exports.createResolvers = ({ createResolvers }) => {
  const pathResolver = {
    path: {
      type: 'String',
      resolve(source, context) {
        const parentPage = source.parentPage
          ? context.nodeModel.getNodeById({
              id: source.parentPage._ref,
            })
          : null;

        return getPagePath({
          slug: source.slug,
          parentPage,
        });
      },
    },
  };

  createResolvers({
    SanityLandingPage: pathResolver,
  });
};

async function createLandingPages(graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityLandingPage(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
            path
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const landingEdges = (result.data.allSanityLandingPage || {}).edges || [];

  landingEdges.forEach((edge) => {
    const { id, path = {} } = edge.node;
    console.log("id", id);

    reporter.info(`Creating landing page: ${path} with id of ${id}`);

    createPage({
      path,
      component: require.resolve('./src/templates/landingPage.tsx'),
      context: { id },
    });
  });
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createLandingPages(graphql, actions, reporter);
};
