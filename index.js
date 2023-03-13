function superbowlWin(record){
console.log(record)
const winObj = record.find(function(obj){
    if (obj.result === "W"){
        return obj
    }
}) 
    if (winObj === undefined){
        return undefined 
    }
return(winObj.year)
}
