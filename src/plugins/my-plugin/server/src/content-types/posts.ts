export default {
  kind: 'collectionType',
  collectionName: 'posts',
  info: {
    singularName: 'post',
    pluralName: 'posts',
    displayName: 'post',
  },
  options: {
    comment: '',
  },
  attributes: {
    title: {
      type: 'text',
    },
  },
};
