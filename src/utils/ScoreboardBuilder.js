let name = 'mcb.sb.'
let disj_name = 'mcb.disj.glob'
let disj_target_name = 'mcb.disj.'
let temp = 'mcb.temp'

function scoreObjectiveAdd(objective,criteria,displayName){
    return `scoreboard objectives add ${objective} ${criteria} ${displayName?displayName:''}`
}

function scoreSet(target, maindef, value){
    return `scoreboard players set ${target} ${maindef} ${value}`
}

function scoreOperationSet(target1, maindef1, operation, target2, maindef2){
    return `scoreboard players operation ${target1} ${maindef1} ${operation} ${target2} ${maindef2}`
}

export {
    scoreObjectiveAdd,
    scoreOperationSet,
    scoreSet,
    disj_name,
    disj_target_name,
    name,
    temp
}