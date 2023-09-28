var fs = require('fs');

module.exports = function(source, map) {
    source = `export abstract class DummyContent {
      name: string;
      age?: number;
    }
`;

    var callback = this.async();
    
  // Write the emitted TS to disk, so VSCode can pick it up.
  fs.writeFile("./example.api.ts", source, (e) => {
    if (e) {
        callback(e);
    } else {
        callback(null, source, map);
    }
  });
  };
