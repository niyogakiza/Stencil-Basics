exports.config = {
    bundles: [
        {components: ['my-modal]}
    ],

    //collections:[
    //    { name: '@stencil/router' }
    //]
};


exports.devServer = {
    root: 'www',
    watchGlob: '**/**'
}