const fs = require('fs');
const path = require('path');

class UserHandler {
	get accountButton() {
		return $('button[data-qa=HeaderAccountButton]');
	}

	getUserInfoFromJson(userName) {
		const rawdata = fs.readFileSync(
			path.join(
				__dirname,
				'../../../',
				`resources/${userName.replace(/"/g, '')}.json`
			)
		);
		return JSON.parse(rawdata);
	}
}

module.exports = new UserHandler();
