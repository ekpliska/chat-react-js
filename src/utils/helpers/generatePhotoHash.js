import tinycolor from 'tinycolor2';

export default hash => {
    const [r, b, g] = hash.substr(0, 3).split('').map(char => {
        const valueCode = char.charCodeAt(0);
        return valueCode > 255 ? 255 : valueCode < 0 ? 0 : valueCode;
    });
    return {
        color: tinycolor({r: r, g: g, b: b}),
        colorLighten: tinycolor({r: r, g: g, b: b}).lighten(30).toHexString(),
    }
}