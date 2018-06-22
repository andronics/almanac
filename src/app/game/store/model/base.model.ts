export class Base {

    public id?: string

    constructor(attributes?) {
        let keys = Object.keys(attributes)
        // console.log(keys)
        // this.$key = attributes.$key
        if (keys.length) {
            keys.forEach( element => {
                this[ element ] = attributes[ element ]
            })
        }
    }

    // get id(): string {
    //     return this.$key
    // }

}