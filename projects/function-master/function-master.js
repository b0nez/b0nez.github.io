
function objectValues(object) {
    
    var newArray = [];
    for(var x in object) {
        newArray.push(object[x]);
    }
    return newArray;
}

function keysToString(object) {
    
    var str = '';
    for (var x in object) { str += x + ' ' }
    return str.trim();
}

function valuesToString(object) {
    
    var str = '';
    for (var x in object) {
        if (typeof(object[x]) === 'string') str += object[x] + ' ';
    }
    return str.substring(0, str.length - 1);
}

function arrayOrObject(arg) {
    
    if (Array.isArray(arg) === true) { 
        return 'array'
    };
    if (Array.isArray(arg) !== true && typeof(arg) === 'object' && arg !== null && arg instanceof Date !== true) {
        return 'object';
    };
}

function capitalizeWord(str) {
    
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function capitalizeAllWords(str) {
    
    str = str.toLowerCase().split(' ');
    for ( var i = 0; i < str.length; i++) {
        str[i] = str[i].split('');
        str[i][0] = str[i][0].toUpperCase(); 
        str[i] = str[i].join('');
    }
  return str.join(' ');
}

function welcomeMessage(obj) {
    
    var name = obj.name.charAt(0).toUpperCase() + obj.name.slice(1);
    return "Welcome " + name + "!";
    
}

function profileInfo(obj) {
    
    var name = obj.name.charAt(0).toUpperCase() + obj.name.slice(1);
    var species = obj.species.charAt(0).toUpperCase() + obj.species.slice(1);
    
    return name + " is a " + species;
}

function maybeNoises(obj) {
    
    if (obj.noises === undefined) {
        return "there are no noises";
    } else if (obj.noises.length === 0) {
        return "there are no noises";
    } else {
        return obj.noises.join(' ');
    }
}

function hasWord(str, word) {
    
    var n = str.search(word);
    if (n !== -1) {
        return true;
    } else {
        return false;
    }
}

function addFriend(friend, obj) {
    
    let friends = obj.friends.indexOf(friend);
    if (friends === -1) {
        obj.friends.push(friend);
        return obj;
    } else {
        return obj;
    }
}

function isFriend(friend, obj) {
    
    if (obj.friends) {
        let friends = obj.friends.indexOf(friend);
        if (friends === -1) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
}

function nonFriends(name, obj) {

    var nonfriends = [];
    
    for (var i = 0; i < obj.length; i++) { 
        var friends = obj[i].friends;
        var isFriend = false;
        if (obj[i].name !== name) { 
            for (var e = 0; e < friends.length; e++) { 
                if (friends[e] === name) { 
                    isFriend = true; 
                }
            }
            if (!isFriend) {
                nonfriends.push(obj[i].name);
            }
        }
    }
    return nonfriends;
}

function updateObject(obj, key, value) {
    
    obj[key] = value;
    return obj;
}

function removeProperties(obj, array) {

    if (array.length > 0) {
        for (var x in obj) {
            for (var y = 0; y < array.length; y++) {
                if (array[y] === x || array[y] == obj[x]) delete obj[x]
            }
        }
    }
    return obj;
}

function dedup(array) {

    var unique = array.filter(function(elem, index, self) {
        return index == self.indexOf(elem);
    });
    return unique;
}
