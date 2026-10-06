// eg- for callback fn

function greet (name , callback){
    console.log(`Hi ${name}`);
    callback()
    
}
function fcheck (){
    console.log('Have a nice day');
    
}
greet('John', fcheck)
console.log('-------------');

// eg - for nested function

function a(){
    console.log('Inside function a');
    
    function b(){
        console.log('Inside function b');
        
    }
    b()
}
a()

console.log('-------------');
// eg - for closure property

function a(){
    let parent_variable = 'parent'
    console.log('Inside function a');
    console.log(`my parent variable is ${parent_variable}`);
    //console.log(`my child variable is ${child_variable}`);
    
    function b(){
        let child_variable = 'child'
        console.log('Inside function b');
        console.log(`my parent variable is ${parent_variable}`);
        console.log(`my child variable is ${child_variable}`);
    }
    b()
}
a()

console.log('-------------');










