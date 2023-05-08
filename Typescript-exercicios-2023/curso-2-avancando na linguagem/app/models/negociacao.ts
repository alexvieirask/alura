export class Negociacao {
    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
    ) {}

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    static criDe(dataString:string,quantidadeString:string, valorString: string) : Negociacao{
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(valorString);
        const valor = parseFloat(quantidadeString);
        return new Negociacao(date, quantidade, valor);
    }
}