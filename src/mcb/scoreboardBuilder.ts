import { ParserRuleContext } from "antlr4ts"
import { genericErrorHandling } from "../errors/genericErrorHandling"

class Name {
    constructor(
        private s_prefix: string,
        private suffix: (s: string) => string = (s) => {
            return s
        }
    ) { }
    get prefix(): string {
        return this.s_prefix
    }
    name(s: string) {
        return [this.prefix, this.suffix(s)].join('.')
    }
}

export default class SCBuilder {
    public name = new Name('mcb.sb')
    public temp = new Name('mcb.temp')
    public disj = new Name('mcb.disj')
    public if = new Name('mcb.if')

    constructor(public error: genericErrorHandling) { }

    SCLiteral(CurrentSC: string, node: any, CurrentID: string, operator = "") {
        return [
            this.SCSet(
                this.temp.name("0"),
                CurrentSC,
                node.value
            ),
            this.SCOperationSet(
                this.name.name(CurrentID),
                CurrentSC,
                `${operator}=`,
                this.temp.name("0"),
                CurrentSC
            )
        ]
    }

    SCIdentifierExpression(CurrentSC: string, node: any, CurrentID: string, operator = "") {
        return this.SCOperationSet(
            this.name.name(CurrentID),
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
        return `scoreboard objectives add ${objective} ${criteria} ${displayName ? displayName : ""}`
    }

    SCSet(target: string, objective: string, value: string | number) {
        return `scoreboard players set ${target} ${objective} ${value}`
    }

    SCOperationSet(target1: string, objective1: string, operator: string, target2: string, objective2: string) {
        return `scoreboard players operation ${target1} ${objective1} ${operator} ${target2} ${objective2}`
    }
}