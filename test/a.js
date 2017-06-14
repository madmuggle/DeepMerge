const util = require('util');
const merge = require('../');


const v1 = {
	a: {
		b: {
			c: [1, 2, 3],
			d: { x: 1 },
		}
	}
};

const v2 = {
	a: {
		b: {
			c: { blah: 1 },
			d: { y: 2 },
		}
	}
};

const v3 = {
	a: {
		b: {
			d: { z: 3 },
		}
	}
};


console.log("\x1b[32m================================================\x1b[0m");
console.log("merging the following 3 objects...");
console.log(util.inspect(v1, { depth: null }));
console.log(util.inspect(v2, { depth: null }));
console.log(util.inspect(v3, { depth: null }));
console.log("\x1b[32m================================================\x1b[0m");
console.log("result:");
console.log(util.inspect(merge(v1, v2, v3), { depth: null }));

