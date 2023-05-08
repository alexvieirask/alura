export function timeForSeconds(time:string){
    const [hour = '0', minutes = '0', seconds = '0'] = time.split(':')

    const hourInSeconds = Number(hour) * 3600
    const minutesInSeconds = Number(minutes) * 60
    
    return hourInSeconds + minutesInSeconds + Number(seconds)

} 