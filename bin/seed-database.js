#!/usr/bin/env node

const {mongoose, databaseUrl, options} = require('../database');
const Item = require('../models/item');

const seed = async () => {
    await mongoose.connect(databaseUrl, options);
    const item1 = {
        ticketNo: 'ALM-1234',
        status: 'Open',
        assignee: 'Zolika',
        verifier: 'Bela',
        startedOn: '12345',
        shortDesc: 'Issue with click on this',
        priority: 'Low'
    };
    const item2 = {
        ticketNo: 'ALM-444',
        status: 'Closed',
        assignee: 'JAni',
        verifier: 'Eva',
        startedOn: '12345',
        shortDesc: 'Issue overlay',
        priority: 'Medium'
    };
    const item3 = {
        ticketNo: 'NEOWMA-1212',
        status: 'Pending',
        assignee: 'Tamas',
        verifier: 'XXX',
        startedOn: '12345',
        shortDesc: 'Payment does not load',
        priority: 'High'
    };
    const item4 = {
        ticketNo: 'ALM-8888',
        status: 'Reopen',
        assignee: 'Karcsi',
        verifier: 'Zeno',
        startedOn: '12345',
        shortDesc: 'CR-123',
        priority: 'High'
    };
    const item5 = {
        ticketNo: 'ALM-656565',
        status: 'Open',
        assignee: 'Mari',
        verifier: 'Leo',
        startedOn: '12345',
        shortDesc: 'Overlapped items',
        priority: 'Low'
    };


    await Item.create(item1);
    await Item.create(item2);
    await Item.create(item3);
    await Item.create(item4);
    await Item.create(item5);
};

seed()
    .then(() => {
        console.log('Seeded database sucessfully');
        process.exit(0);
    })
    .catch(err => {
        console.log('Database seed unsuccessful');
        throw err;
        process.exit(1);
    });
