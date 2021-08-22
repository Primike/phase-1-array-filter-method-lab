// Code your solution here
function findMatching(array, name) {
    return array.filter(function(x) {
        return x.toLowerCase() === name.toLowerCase()
        
    })
}

function fuzzyMatch(array, letters) {
    return array.filter(x => 
        x.toLowerCase().indexOf(letters.toLowerCase()) === 0)
}

function matchName(array, name) {
    return array.filter(x=> x.name === name)
}