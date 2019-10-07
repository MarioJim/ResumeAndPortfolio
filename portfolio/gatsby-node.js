const data = require('data');

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  data.additional.forEach(add => {
    actions.createNode({
      ...add,
      id: createNodeId(`Additional-${add.title}`),
      internal: {
        type: 'Additional',
        contentDigest: createContentDigest(add),
      },
    })
  });
  actions.createNode({
    ...data.myProfile,
    id: createNodeId(`My-Profile`),
    internal: {
      type: 'Profile',
      contentDigest: createContentDigest(data.myProfile),
    },
  });
  data.projects.forEach(project => {
    actions.createNode({
      ...project,
      id: createNodeId(`Project-${project.title}`),
      internal: {
        type: 'Project',
        contentDigest: createContentDigest(project),
      },
    })
  });
  data.schools.forEach(school => {
    actions.createNode({
      ...school,
      id: createNodeId(`School-${school.schoolName}`),
      internal: {
        type: 'School',
        contentDigest: createContentDigest(school),
      },
    })
  });
  data.skills.forEach(skill => {
    actions.createNode({
      ...skill,
      id: createNodeId(`Skill-${skill.title}`),
      internal: {
        type: 'Skill',
        contentDigest: createContentDigest(skill),
      },
    })
  });
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.(graphql|gql)$/,
          exclude: /node_modules/,
          loader: "graphql-tag/loader",
        },
      ],
    },
  });
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /p5/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
