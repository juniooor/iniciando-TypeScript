// pode uasr o enum para receber um numero ou uma string
enum Permissoes {
    admin = 'ADMIM',
    editor = 'EDITOR',
    comum = 'COMUM'
}


enum Cores {
    green = '#00FF00',
    yellow = '#FFFF00',
    red = '#FF0000',
    pink = '#FF00FF',
}


const usuario = {
    perfil: Cores.pink,
    nivel: Permissoes.admin
}


console.log(usuario)