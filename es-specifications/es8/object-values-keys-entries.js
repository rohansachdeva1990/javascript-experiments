// Get the below object to go from:
let obj = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'

Object.entries(obj).map(value => value.join(" ")).join(' ')

Object.entries(obj).reduce((str, value) => {
    return str + value[0] + " " + value[1] + " ";
}, "").trim() + ".";