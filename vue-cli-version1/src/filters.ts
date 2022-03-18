const filters = {
    body(input) {
        if (!input || typeof (input) != 'string') return ''
        input = input.slice(0,70)
        return input
    }
}
export default filters;