#!/usr/bin/env node

if (process.platform === 'win32') { 
    console.log("You are not allowed to see the nice stuff, sorry.");
    process.exit(1); 
}
console.log("Here is the nice stuff!");