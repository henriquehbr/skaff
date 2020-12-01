import o from"inquirer";console.log("Starting type-node...");o.prompt([{default:"World",name:"username",type:"input"}]).then(e=>{console.log(`Hello ${e.username}!`)});
