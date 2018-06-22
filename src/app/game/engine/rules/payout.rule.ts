import Rule from 'json-rules-engine/dist/rule'

import { Draw, DrawSet } from '../../store/model/draw.model'
import { Game, GamePayout, GamePayoutCriteria } from '../../store/model/game.model'

export const payout = (game: Game, draw: Draw) => {
    
    let rules = []
    
    // Loop Through Payout
    game.payouts.every(
        (payout: GamePayout, idx: number, payouts: GamePayout[]) => {
            
            let payoutRules = []

            payout.criteria.map((_criteria: GamePayoutCriteria) => {
                
                let drawSet = draw.sets.filter(
                    draw => draw.name = _criteria.set
                ).reduce((a: any, b: any) => b, null)

                // Primary Balls
                payoutRules.push({
                    fact: 'hasCountOf',
                    params: {
                        set: _criteria.set,
                        result: drawSet.primary || []
                    },
                    operator: 'equal',
                    value: _criteria.primary
                })

                // Bonus Balls
                payoutRules.push({
                    fact: 'hasCountOf',
                    params: {
                        set: _criteria.set,
                        result: drawSet.bonus || []
                    },
                    operator: 'equal',
                    value: _criteria.bonus
                })
                 
            })

            // For Each Payout Create A Validation Rules
            rules.push(new Rule({
                conditions: {
                    all: payoutRules
                },
                event: {
                    type: 'payout',
                    params: {
                        draw: draw,
                        game: game,
                        payout: payout
                    }
                }
            }))
            
            return true
        
        }
    )

    return rules

}