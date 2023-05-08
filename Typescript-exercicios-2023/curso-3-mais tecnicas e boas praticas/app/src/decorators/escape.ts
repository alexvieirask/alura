function escape(
    target: any,
    propretyKey: string,
    descriptor: PropertyDescriptor
){
    const metodoOriginal = descriptor.value

    descriptor.value = function(...args: any[]){
        let retorno = metodoOriginal.apply(this,args)

        if (typeof retorno === 'string'){
            console.log(`@escape em ação na classe ${this.constructor.name} para o método ${propretyKey}`)
            retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '');
        }

        return retorno
    }
    return descriptor
}

export {escape}