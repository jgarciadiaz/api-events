const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt
} = require('graphql/type')

const eventModel = require('../../model/eventModel')

const eventType = new GraphQLObjectType({
  name: 'event',
  description: 'Event',
  fields: () => ({
    uuid: {
      type: GraphQLString,
      description: 'Event ID',
    },
    title: {
      type: GraphQLString,
      description: 'Event Title',
    },
    description: {
      type: GraphQLString,
      description: 'Event Description',
    },
    url: {
      type: GraphQLString,
      description: 'Event URL',
    },
    image: {
      type: GraphQLString,
      description: 'Event Image',
    },
    score: {
      type: GraphQLInt,
      description: 'Event Score for Clasification',
    }
  }),
})

const eventSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      event: {
        type: new GraphQLList(eventType),
        args: {
          uuid: {
            name: 'uuid',
            type: GraphQLString,
          },
        },
        resolve: (root, { uuid }) => {
          const query = uuid ? { uuid } : {}
          return eventModel.find(query)
        },
      },
    },
  }),
})

module.exports = eventSchema
