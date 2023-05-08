function logarTempoDeExecucao(emSegundos = false) {
    return function (target, propretyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            let divisor = 1;
            let unidade = 'milisegundos';
            if (emSegundos) {
                divisor = 1000;
                unidade = 'segundos';
            }
            const tempoInicio = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const tempoFinal = performance.now();
            console.log(`${propretyKey}, Tempo de execução : ${(tempoFinal - tempoInicio) / divisor} ${unidade}`);
            retorno;
        };
        return descriptor;
    };
}
export { logarTempoDeExecucao };
