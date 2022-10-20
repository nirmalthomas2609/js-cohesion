class PoorCohesion {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    process_a(x) {
        this.a = this.a + x;
    }
    
    process_b(x) {
        this.b = this.b * x;
    }
}

let temp = new PoorCohesion(2, 3);
temp.process_a(4);
temp.process_b(4);