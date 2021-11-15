var obj=require('./src/objectTesting')


test("test case",()=>{
    expect(obj()).toEqual({name:'salman'})
})