var config = {
    domain: {
        host: 'dev01.tezzt.nl',
        port: '27017'
    },
    env: 'dev',
    mongodb: {
        credentials: 's4d:erstaateenpaardindegang', // username:password@
        host: 'localhost',
        port: ':31000', // :port
        dbName: 'cms'
    }
};

module.exports = config;