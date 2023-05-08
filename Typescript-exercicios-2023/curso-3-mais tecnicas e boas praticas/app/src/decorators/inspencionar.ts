function inspecionar(){
    return function(
        target: any,
        propretyKey: string,
        descriptor: PropertyDescriptor
    ){
        const metodoOriginal = descriptor.value
        descriptor.value = function(...args: Array<any> ){
            console.log(`--- Método ${propretyKey}`)
            console.log(`--- Parâmetros ${JSON.stringify(args)}`)

            const retorno = metodoOriginal.apply(this,args)

            console.log(`--- Retorno ${JSON.stringify(retorno)}`)
            return retorno
        }



        return descriptor
    }
}

export { inspecionar }