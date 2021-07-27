//Memoizastion and caching: The construction function example

//in order to better our understanding of Memoization, we will write a function
//entitle "Building" and apply various logged results to observe the behavior of javascript

//In this example, you are the boss of a construction company
//the construction company will be a reerence to your Application 
//javascript execution commands will be traced by a reference to your construction 
//companies employees: Bob and Susy.

//w/o memoiztion

// function Building(tasks){
//     console.log("Dispatch to Depot!");
//     return tasks + "The work is complete.";
// }

//with memoiztion 

let cache = {};

function Building(tasks){
    if(tasks in cache){
        return cache[tasks]
    }else{
        console.log("Dispatch to Depot!");
        return cache[tasks] = tasks + "The work is complete.";
    }
}

console.log(Building("Bob's log:"))

console.log('Day 1: ', Building("Bob's log: "));
console.log('Day 2: ', Building("Bob's log: "));
console.log('Day 3: ', Building("Bob's log: "));

//with memoization, bob no longer has to dispatch each time to pick up the required
//tools to pick up the broken pipes as they're locallly stored and he now can access
//them more quickly
//if bob takes a sick day on tuesday and we send susy, a different employee, then the results
//will change:

console.log('Day 1: ', Building("Bob's log: "));
console.log('Day 2: ', Building("Susy's log: "));
console.log('Day 3: ', Building("Bob's log: "));

//since the input is not the same, susy has no prior storage in teh cache object 
//so the dispatch log is once again initialized.
//th eday 3 log, however, does not need to log the dispatch because it is logging Bob
//and can just fetch the data in the cache.