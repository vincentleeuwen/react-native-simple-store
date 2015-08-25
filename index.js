var React = require('react-native');

var {
	AsyncStorage
} = React;

var deviceStorage = {
	get: function(key) {
		return AsyncStorage.getItem(key).then(function(value) {
			return JSON.parse(value);
		});
	},

	save: function(key, value) {
		return AsyncStorage.setItem(key, JSON.stringify(value));
	},

	update: function(key, value) {
		return deviceStorage.get(key).then((item) => {
			return AsyncStorage.setItem(key, JSON.stringify(Object.assign({}, item, value)));
		});
	},

	delete: function(key) {
		return AsyncStorage.removeItem(key);
	}
};

module.exports = deviceStorage;
