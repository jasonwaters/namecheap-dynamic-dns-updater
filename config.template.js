var DNSRecord = require('./DNSRecord');


module.exports = {
	passwords: { //get these from the admin panel on namecheap when configuring your domain(s)
		'mydomain.com': 'asdfasdf',
		'myotherdomain.com': 'qwertyqwerty'
	},
	records: [
		new DNSRecord('subdomain', 'mydomain.com', '1.1.1.1'),
		new DNSRecord('othersubdomain', 'myotherdomain.com') // if no ip address is specified, the public ip of the machine running this script will be used.
	]
};