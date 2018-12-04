import { interval } from 'rxjs';

const interval$ = interval(1000);

class Sub {

    name: string = 'Sub';

    constructor(subj) {
        subj.subscribe(val => console.log(val, this.name));
    }
}

let obj = {
    sub: new Sub(interval$)
};

console.log('Sub', obj.sub.name);

setTimeout(() => {
    delete obj.sub;

    console.log('Sub', typeof obj.sub.name);
}, 5000);
