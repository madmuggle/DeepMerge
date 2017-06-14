function isPureObject(obj) {
	return typeof obj === 'object' && !Array.isArray(obj);
}

function merge2obj(obj1, obj2) {
	for (var k in obj2) {
		if (isPureObject(obj2[k])) {
			if (isPureObject(obj1[k])) {
				merge2obj(obj1[k], obj2[k]);
			} else {
				obj1[k] = obj2[k];
			}
		} else {
			obj1[k] = obj2[k];
		}
	}
	return obj1;
}

function merge(origObj, ...objLst) {
	for (var x of objLst)
		merge2obj(origObj, x);
	return origObj;
}

module.exports = merge;

