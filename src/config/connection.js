import mongoose from 'mongoose';
import config from './index';

mongoose.Promise = global.Promise;

// 连接数据库 
mongoose.connect(config.dbAddress,{useMongoClient: true}, (err) => {
    if (err){
        console.log(err);
    }
});

const db = mongoose.connection;

db.once('open' ,() => {
	console.log('数据库连接成功 => ' + config.dbAddress)
})

db.on('error', function(error) {
    console.error('Error in MongoDb connection: ' + error);
    mongoose.disconnect();
});

db.on('close', function() {
    console.log('数据库断开，重新连接数据库');
    mongoose.connect(config.dbAddress, {server:{auto_reconnect:true}});
});
