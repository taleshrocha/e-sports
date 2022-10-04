export function convertMinutesToHourString(minutesAmount: number) {
    const hours = Math.floor(minutesAmount/60);
    const minutes = minutesAmount % 60;

    //return `${hours}:${(minutes == 0) ? '00' : minutes}`;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}