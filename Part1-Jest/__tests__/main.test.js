const formatVolumeIconPath = require('../assets/scripts/main.js');

describe("testing", () => {
    path = "./assets/media/icons/volume-level-"

    test("volumeValue = 0", () => {
        output = formatVolumeIconPath(0);
        expect(output).toBe(path + "0.svg");
    })

    test("volumeValue = 5", () => {
        output = formatVolumeIconPath(5);
        expect(output).toBe(path + "1.svg");
    })

    test("volumeValue = 10", () => {
        output = formatVolumeIconPath(10);
        expect(output).toBe(path + "1.svg");
    })

    test("volumeValue = 35", () => {
        output = formatVolumeIconPath(35);
        expect(output).toBe(path + "2.svg");
    })

    test("volumeValue = 60", () => {
        output = formatVolumeIconPath(60);
        expect(output).toBe(path + "2.svg");
    })

    test("volumeValue = 89", () => {
        output = formatVolumeIconPath(89);
        expect(output).toBe(path + "3.svg");
    })

    test("volumeValue = 100", () => {
        output = formatVolumeIconPath(100);
        expect(output).toContain("3");
    })
});
