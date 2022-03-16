

class debug {
    showingSection = "all"

    checkVisit(c,p,e){
        if(this.showingSection === "all" || this.showingSection.includes(e)){
            try {
                console.log(`visit${c.constructor.name}`,JSON.stringify(p,'',2))
            } catch (error) {
                console.log(`visit${c.constructor.name}`,p)
            }
        }
        return p
    }
}


export default debug