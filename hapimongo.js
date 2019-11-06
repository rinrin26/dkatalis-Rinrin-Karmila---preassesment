
const Hapi = require('hapi');
const Boom = require('boom');

const Server = async function() {
    
    const dbOpts = {
        url: 'mongodb:restaurants', 
        settings: {
            poolSize: 10
        },
        decorate: true
    };
    
    const server = Hapi.server();
    
    await server.register({
        plugin: require('hapi-mongodb'),
        options: dbOpts
    });

   server.route( {
        method: 'GET',
        path: 'restaurants/borough/{id}', //FIXME . Your implementation goes here
        async handler(request) {

            const db = request.mongo.db; 
            const ObjectID = request.mongo.ObjectID;

            try {
                const result = await db.collection('restaurants').find({  _id: new ObjectID(request.params.id) }).skip(5).limit(5); //FIXME. Your implementation goes here
                return result;
            }
            catch (err) {
                throw Boom.internal('Internal MongoDB error', err);
            }
        }
    });

    await server.start();
    console.log('Server started at ${server.info.uri}');
};

Server().catch((err) => {
    console.error(err);
    process.exit(1);
});