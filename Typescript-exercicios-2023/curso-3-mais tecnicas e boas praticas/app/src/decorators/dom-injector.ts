export function domInjector(seletor: string){
    return function(target:any,propretyKey: string){
        const getter = function(){
            const elemento = document.querySelector(seletor)
            return elemento
        }

        Object.defineProperty(target,propretyKey,{
            get: getter
        })

    }

}