const fs = require("fs");

class ReallyBadCohesion {
    loadProcessAndStore() {

        fs.readFile("./resources/words.txt", (err, data) => {
            if (err) throw new Error("File does not exist");
            var words = data.toString().split(" ");
            words.sort();
            fs.writeFile('./resources/test/sorted.txt', words.join("\n"), (err) => {
                if (err) throw new Error("File write failed");
            });
        });
    }
}

let temp = new ReallyBadCohesion();
temp.loadProcessAndStore();