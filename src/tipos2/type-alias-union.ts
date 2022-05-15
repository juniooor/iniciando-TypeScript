type User = {
    name: string;
    lastename: string;
    dateOfBirth: string;
    age?: number;
}

const juniooor: User = {
    name: 'junior',
    lastename: 'costa',
    dateOfBirth: '11/12/2000',
}


// colocando a '?' no age o typescript faz a opcao virar opcional 


// types union

// | indicar que o valor é de um tipo ou outro como or, ou


type logLevel = 'info' | 'error' | 'debug';

function logMessage(message:  string, level: logLevel) {
    console.log(`[${level}] - ${message}`)
}


logMessage(`uma mensagem info`, `info`)


