const getUniqueColorAlternatives = (altColors: Record<string, number[]>): Record<string, number> | null => {
    //set will not allow duplicates
    const usedColors = new Set<number>()
    const ids = Object.keys(altColors)
    const validAlts: Record<string, number> = {}

    const recursivleyCheckColours = (i: number) => {
        //if we have made it past the last 
        if (i == ids.length) {
            return true
        }

        const id = ids[i]
        const availableColours = altColors[id]

        for (const colour of availableColours) {
            //if the color hasn't been used, assign it and keep going
            if (!usedColors.has(colour)) {
                usedColors.add(colour)
                validAlts[id] = colour

                //Recursively check the next index
                if (recursivleyCheckColours(i + 1)) {
                    return true
                }
                //if it didn't work, then this color is not viable, don't use it
                delete validAlts[id]
                usedColors.delete(colour)
            }
        }

        return false

    }

    if (recursivleyCheckColours(0)) {
        return validAlts
    }

    return null
}

export default getUniqueColorAlternatives