// test.ts

import { CircuitBreaker } from "../src/circuit-breaker/CircuitBreaker";
import { BreakerOptions } from "../src/circuit-breaker/BreakerOptions";



const breaker1 = new CircuitBreaker({
    method: "get",
    url: "http://localhost:3000"
}, new BreakerOptions( 3, 5, 5000 ) );


const breaker2 = new CircuitBreaker({
    method: "get",
    url: "http://localhost:3000"
}, new BreakerOptions( 6, 7, 1000 ) );


setInterval(() => {
    breaker1
        .exec()
        .then( console.log )
        .catch( console.error )
}, 500 );

setInterval(() => {
    breaker2
        .exec()
        .then( console.log )
        .catch( console.error )
}, 1500 );