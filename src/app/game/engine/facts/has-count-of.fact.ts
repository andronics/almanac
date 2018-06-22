import Fact from 'json-rules-engine/dist/fact'

export default new Fact('hasCountOf', (params, almanac) => {
    return almanac.factValue('entry').then(entry => {
        // console.log("set: %s", params.set)
        let entrySet = entry[params.set]
        let resultSet = params.result

        let count = entrySet.reduce((v,i) => {
            try {
                if( resultSet.indexOf(i) !== -1 ) {
                    v += 1
                }
                return v   
            } catch(e) {
                console.log("Error in %s", params.set, entrySet, resultSet)
                // console.log("Error in %s", params.set)
            }
             
        }, 0)

        // console.log("entrySet: %s, resultSet: %s, count: %s\n\n", entrySet, resultSet, count);
        
        return count
    })
})
