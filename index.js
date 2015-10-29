'use strict';

let request = require('request');
let getIP = require('external-ip')();
const config = require('./config.js');


getIP((err, ip_address) => {
	if (err) {
		throw err;
	}

	config.records.forEach((record) => {
		record.setCurrentIP(ip_address);
	});

	updateNamecheap(config.records);
});


function updateNamecheap(records) {
	records.forEach((record) => {
		let password = config.passwords[record.domain];
		if(!password) {
			throw `No password specified for ${record.domain}`;
		}

		let url = `https://dynamicdns.park-your-domain.com/update?host=${record.sub_domain}&domain=${record.domain}&password=${password}&ip=${record.ip_address}`;

		request(url, (error, response, body) => {
			if (!error && response.statusCode == 200) {
				console.log(`${record.sub_domain}.${record.domain} updated to point to ${record.ip_address}`);
			}
		});
	});
}