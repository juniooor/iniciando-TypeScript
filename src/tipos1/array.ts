let dogs: string[] = [
    'cacau',
    'sky'
]

dogs.push('amora')

function exigedogs(dogs: string[]) {
    return `Os dogs são: ${dogs.join(', ')}`
}

console.log(exigedogs(dogs))