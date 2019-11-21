export default (number) => {
    const mins = Math.floor(number / 100);
    const secs = (number % 60).toFixed();
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
}