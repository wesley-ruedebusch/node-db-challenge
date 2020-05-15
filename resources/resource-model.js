const db = require('../data/db-config.js')


module.exports = {
    getResources,
    addResources
};

function getResources() {
    return db('resources');
};

function addResources(resource) {
    return db('resources')
        .insert(resource, 'id')
        .then(ids => {
            console.log(ids)
            return ids;
        });

}