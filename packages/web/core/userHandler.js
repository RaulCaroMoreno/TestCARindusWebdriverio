const fs = require('fs');
const  path = require("path");

class UserHandler {

	USER_RESOURCES_PATH = "resources"

	get accountButton() {
		return $('button[data-qa=HeaderAccountButton]');
	}

	getUserInfoFromJson(userName) { 
		const rawdata = fs.readFileSync(path.join(__dirname, "../../../", this.USER_RESOURCES_PATH + "/" + userName.replace(/"/g,"") + ".json"));
		return JSON.parse(rawdata);
	}
 
}

module.exports = new UserHandler();
