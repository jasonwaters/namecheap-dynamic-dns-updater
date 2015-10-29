## Namecheap Dynamic DNS Updater

This script allows you to easilly update DNS records on namecheap that use Dynamic DNS.


* Run `npm install` to install dependencies.
* Duplicate `config.template.js` and name it `config.js`
* Update `config.js`
 * Set `NAMECHEAP_DYNAMIC_DNS_PASSWORD` to the DDNS Password provided in the Namecheap admin.
 * Update the `records` array with the domains you'd like to update.
  * You may specify any IP Address you want for the record.
  * If you do not specify an IP Address in the 3rd parameter, the public ip of the device running this script will be used.
* Run the script
 * `node index.js`
* Run the script on an interval via cron, launchd, etc. 