const multpleTest=require('./src/multpleTest.js')
test("test case",()=>{
    expect(multpleTest(1,2)).toBe(3)
    expect(multpleTest(1,2)).not.toBe(9)//not expecting this value
})