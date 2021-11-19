import { MySQLConnector, MongoDBConnector } 
    from "../dependences.ts";


    export const connectorMariaDB = new MySQLConnector({
        database: 'quotes',
        host: '127.0.0.1',
        username: 'student',
        password: 'josem',
        port: 3307, 
    });
    
    export  const connectorMongoDB = new MongoDBConnector({
       uri: 'mongodb://josem:carrizosa@127.0.0.1:27017',  
        database: 'quotesdb',
    });
    
