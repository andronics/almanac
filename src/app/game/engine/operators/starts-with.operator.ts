import Operator from 'json-rules-engine/dist/operator'

export default new Operator("startsWith", (fv, jv) => {
    if (!fv.length) return false
    return fv[0].toLowerCase() === jv.toLowerCase()
})

