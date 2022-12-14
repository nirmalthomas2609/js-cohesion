const fs = require("fs");

class ReallyBadCohesion {
    loadProcessAndStore() {
        var words = [];
        try {
            words = fs.readFileSync('./resources/words.txt').toString().split(" ");
        }
        catch(e){
            throw new Error("Error reading file - ", e);
        }
        words.sort();
        fs.writeFile('./resources/test/sorted.txt', words.join("\n"), (err) => {
            if (err) throw new Error("File write failed");
        });

        return true;
    }
}

let temp = new ReallyBadCohesion();
temp.loadProcessAndStore();