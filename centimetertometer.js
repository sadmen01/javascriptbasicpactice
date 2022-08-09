function centimeterToMeter(centimeter) {
    const meter = centimeter * 100;
    return meter;
}
const longMeter = 15;
const longcentimeter = centimeterToMeter(longMeter);
console.log(longcentimeter);