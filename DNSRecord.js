
function DNSRecord(sub_domain, domain, ip_address) {
	this.sub_domain = sub_domain;
	this.domain = domain;
	this.ip_address = ip_address;
}

DNSRecord.prototype.setCurrentIP = function(ip_address) {
	if(!this.ip_address) {
		this.ip_address = ip_address;
	}
	this.current_ip = ip_address;
};



module.exports = DNSRecord;