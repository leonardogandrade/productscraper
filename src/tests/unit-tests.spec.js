const { timeDifference } = require('./../utils/compare');

describe('Test date difference', () => {
    it('Expect a difference of 59min from dates', () => {
        const pastDate = 292323600;
        const presentDate = 292320600;
        expect(timeDifference(pastDate, presentDate, "min")).toBe(59);
    });
})