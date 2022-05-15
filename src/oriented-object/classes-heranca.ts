class Useer {

    public naame;
    public aage;

    constructor(naame: string, aage: number) {
        this.naame = naame;
        this.aage = aage;
    }
}

class Player extends Useer {
    public jogo;
    constructor(naame: string, aage: number, jogo: string) {
        super(naame, aage);

        this.jogo = jogo;
        
    }

    dizerOJogoAtual() {
        return `Estou jogando: ${this.jogo}`;
    }

    static Horas(){
        return Date();
    }
} 


const jogador = new Player('Junior', 21, 'Call Of Duty: Warzone');

console.log(jogador.dizerOJogoAtual())
console.log(Player.Horas())



//private/protect/

