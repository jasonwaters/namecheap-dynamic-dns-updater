var DNSRecord = require('./DNSRecord');


module.exports = {
	NAMECHEAP_DYNAMIC_DNS_PASSWORD: '', //get this from the admin panel on namecheap when configuring your domain
	records: [
		new DNSRecord('subdomain', 'mydomain.com', '1.1.1.1'),
		new DNSRecord('othersubdomain', 'myotherdomain.com') // if no ip address is specified, the public ip of the machine running this script will be used.
	]
};