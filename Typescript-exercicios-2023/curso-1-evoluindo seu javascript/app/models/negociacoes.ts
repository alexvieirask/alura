import { Negociacao } from "./negociacao.js";

class Negociacoes{
    private negociacoes: Negociacao[] = []

    adiciona(negociacao : Negociacao){
        this.negociacoes.push(negociacao);
    }

    lista() : readonly Negociacao[] {
        return this.negociacoes
    }

}

export { Negociacoes }