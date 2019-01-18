const minus = require("./minus");

// 3 - 1 เท่ากับ 2
test("3 - 1 เท่ากับ 2", () => {
    expect(minus(3,1)).toBe(2)
}) 

// 3 - (-1) เท่ากับ 4
test("3 - (-1) เท่ากับ 4", () => {
    expect(minus(3,-1)).toBe(4)
})

// 3 - 3 เท่ากับ 0
test("3 - 3 เท่ากับ 0", () => {
    expect(minus(3,3)).toBe(0)
})

// -3 - 3 เท่ากับ -6
test("(-3) - (3) เท่ากับ -6", () => {
    expect(minus(-3,3)).toBe(-6)
})

// (-3) - (-3) เท่ากับ 0
test("(-3) - (-3) เท่ากับ 0", () => {
    expect(minus(-3,-3)).toBe(0)
})