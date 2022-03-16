
function checkVisit(c,p){
    try {
        console.log(`visit${c.constructor.name}`,JSON.stringify(p,'',2))
    } catch (error) {
        console.log(`visit${c.constructor.name}`,p)
    }
    return p
}

export {
    checkVisit
}