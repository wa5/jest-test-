const sum=require('./src/sum')
test("test case",()=>{
    expect(sum(1,2)).toBe(3)
})