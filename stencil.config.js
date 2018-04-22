exports.config = {
  bundles:[
    { components: ['my-modal-bundle','my-modal', 'my-backdrop']}
  ]
};
exports.devServer = {
    root: 'www',
    watchGlob: '**/**'
};
