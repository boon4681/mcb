import { ParserRuleContext } from "antlr4ts"
import { genericErrorHandling } from "../errors/genericErrorHandling"

type name = string | ((str: string) => string)

export default class SCBuilder {
    private name_suffix: name
    private temp_suffix: name
    private disj_suffix: name
    private _disj_name = 'mcb.disj'
    private error: genericErrorHandling

    constructor(name_suffix: name, temp_suffix: name, disj_suffix: name, error: genericErrorHandling) {
        this.name_suffix = name_suffix
        this.temp_suffix = temp_suffix
        this.disj_suffix = disj_suffix
        this.error = error
    }

    name(str: string) {
        if (typeof this.name_suffix === "function") {
            return "mcb.sb." + this.name_suffix(str)
        }
        return "mcb.sb." + str
    }

    temp(str: string) {
        if (typeof this.temp_suffix === "function") {
            return "mcb.sb." + this.temp_suffix(str)
        }
        return "mcb.temp." + str
    }

    disj(str: string) {
        if (typeof this.disj_suffix === "function"){
            return "mcb.disj." + this.disj_suffix(str)
        }
        return "mcb.disj." + str
    }

    disj_name(){
        return this._disj_name
    }


    SCLiteral(CurrentSC: string, node: any, CurrentID: string, operator = "") {
        return [
            this.SCSet(
                this.temp("0"),
                CurrentSC,
                node.value
            ),
            this.SCOperationSet(
                this.name(CurrentID),
                CurrentSC,
                `${operator}=`,
                this.temp("0"),
                CurrentSC
            )
        ]
    }

    SCIdentifierExpression(CurrentSC: string, node: any, CurrentID: string, operator = "") {
        return this.SCOperationSet(
            this.name(CurrentID),
            CurrentSC,
            `${operator}=`,
            node.value.target,
            node.value.objective
        )
    }

    SCmerge(CurrentSC: string, CurrentID: string, nodeA: any, nodeB: any, operator: string, ctx: ParserRuleContext) {
        let value: string[] = []
        switch (nodeA.type) {
            case "ScoreboardLiteral":
                value = value.concat(
                    this.SCLiteral(
                        CurrentSC, nodeA, CurrentID
                    )
                )
                break;
            case "ScoreboardIdentifier":
                value.push(
                    this.SCIdentifierExpression(
                        CurrentSC, nodeA, CurrentID
                    )
                )
                break
            case "Expression":
                value = nodeA.statements.concat(
                    value
                )
                if (nodeB.type === "Expression") {
                    value = value.concat(
                        nodeB.statements
                    )
                    value.push(
                        this.SCOperationSet(
                            nodeA.value.target,
                            nodeA.value.objective,
                            `${operator}=`,
                            nodeB.value.target,
                            nodeB.value.objective
                        )
                    )
                    return value
                }
                break
            default:
                this.error.critical(ctx, "unexpected scoreboard variable")
        }
        switch (nodeB.type) {
            case "ScoreboardLiteral":
                value = value.concat(
                    this.SCLiteral(
                        CurrentSC, nodeB, CurrentID, operator
                    )
                )
                break
            case "ScoreboardIdentifier":
                value.push(
                    this.SCIdentifierExpression(
                        CurrentSC, nodeB, CurrentID, operator
                    )
                )
                break
            case "Expression":
                value = nodeB.statements.concat(
                    value
                )
                value.push(
                    this.SCIdentifierExpression(
                        CurrentSC, nodeB, CurrentID, operator
                    )
                )
                break
            default:
                this.error.critical(ctx, "unexpected scoreboard variable")
        }
        return value
    }

    SCObjectiveAdd(objective: string, criteria: string, displayName: string) {
        return `scoreboard objective add ${objective} ${criteria} ${displayName ? displayName : ""}`
    }

    SCSet(target: string, objective: string, value: string | number) {
        return `scoreboard players set ${target} ${objective} ${value}`
    }

    SCOperationSet(target1: string, objective1: string, operator: string, target2: string, objective2: string) {
        return `scoreboard players operation ${target1} ${objective1} ${operator} ${target2} ${objective2}`
    }
}