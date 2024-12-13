import { subscribe } from "diagnostics_channel";

db.createCollection('user');
db.user.insertOne(
{
    username:'sina',
    password:'The best chrome extension',
    email:'a@a.com',
    subscribedAt: new Date()


}

);