const {jsdom} = require('jsdom');

const Item = require('../models/item');

// Create and return a sample Item object
const buildItemObject = (options = {}) => {
    const ticketNo = options.ticketNo || 'ALM-1234';
    const status = options.status || 'Open';
    const assignee = options.assignee || 'Jakab';
    const verifier = options.verifier || 'Zoli';
    const startedOn = options.startedOn || '123456';
    const shortDesc =  options.shortDesc || 'Issue with IE';
    const priority =  options.priority || 'Medium';
    return {ticketNo, status, assignee, verifier, startedOn, shortDesc, priority };
};

// Add a sample Item object to mongodb
const seedItemToDatabase = async (options = {}) => {
    const item = await Item.create(buildItemObject(options));
    return item;
};

// extract text from an Element by selector.
const parseTextFromHTML = (htmlAsString, selector) => {
    const selectedElement = jsdom(htmlAsString).querySelector(selector);
    if (selectedElement !== null) {
        return selectedElement.textContent;
    } else {
        throw new Error(`No element with selector ${selector} found in HTML string`);
    }
};

module.exports = {
    buildItemObject,
    seedItemToDatabase,
    parseTextFromHTML
};
