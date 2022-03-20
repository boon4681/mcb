

export function SCObjectiveAdd(objective: string, criteria: string, displayName:string) {
    return `scoreboard objective add ${objective} ${criteria} ${displayName ? displayName : ""}`
}

export function SCSet(target:string,objective:string,value:string | number){
    return 	`scoreboard players set ${target} ${objective} ${value}`
}

export function SCOperationSet(target1:string,objective1:string,operator:string,target2:string,objective2:string){
    return `scoreboard player operation ${target1} ${objective1} ${operator} ${target2} ${objective2}`
}