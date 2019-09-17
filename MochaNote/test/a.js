
/*
hooks
*/
var stuDB = {};

/*
@param name
@constructor
*/

function User(name){
    
}

/*
save stu
@param name
*/
User.save = function(name){
    stuDB[name] = name;
}

/*
del stu
@param name
*/
User.delete = function(name){
    delete stuDB[name];
}

/*
contains stu
@return {boolean}}
*/
User.contains = function(name){
    return stuDB[name] != null;
}

module.exports = User;
