
function checkVisit(c,p){
    console.log(`visit${c.constructor.name}`,JSON.stringify(p,'',2))
    return p
}

export {
    checkVisit
}