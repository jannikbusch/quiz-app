/**
 * This function formats a number to a string and fill the leading spaces up with zeros.
 * 
 * @param num The number to format
 * @param digits The count of digits that should be filled up with 0
 * @returns a formatted string
 */
export function formatLeadingZero(num : number, digits : number = 2) : String {
    // remove decimal part
    num = Math.trunc(num);

    // make number positive
    if(num < 0) {
        num = num * -1;
    }

    // get the length
    const len = num === 0 ? 1 : Math.ceil(Math.log10(num + 1));

    // build leading zero string
    let leadingZeros = "";
    for(let i = 0; i < digits-len; i++) {
        leadingZeros = `${leadingZeros}0`;
    }

    return `${leadingZeros}${num}`;
}
