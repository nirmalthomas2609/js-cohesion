class BetterCohesionA {
    constructor(a) {
        this.a = a;
    }

    process_a(x) {
        this.a = this.a + x;
    }
}

class BetterCohesionB {
    constructor(b) {
        this.b = b;
    }
    
    process_b(x) {
        this.b = this.b * x;
    }
}

let tempA = new BetterCohesionA(2);
let tempB = new BetterCohesionB(3);
tempA.process_a(4);
tempB.process_b(4);