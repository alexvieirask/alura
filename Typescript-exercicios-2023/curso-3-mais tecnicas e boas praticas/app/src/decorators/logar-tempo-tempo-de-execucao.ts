function logarTempoDeExecucao(emSegundos: boolean = false){
    return function(
        target: any,
        propretyKey: string,
        descriptor: PropertyDescriptor
    ){
        const metodoOriginal = descriptor.value
        descriptor.value = function(...args: Array<any>){
            let divisor = 1;
            let unidade = 'milisegundos'

            if (emSegundos){
                divisor = 1000
                unidade = 'segundos'
            }


            const tempoInicio = performance.now()
            const retorno = metodoOriginal.apply(this,args)
            const tempoFinal = performance.now()
            console.log(`${propretyKey}, Tempo de execução : ${(tempoFinal - tempoInicio) / divisor} ${unidade}`)
            retorno
        }   

        return descriptor
    }
}

export { logarTempoDeExecucao }