const fdata=require('./src/testingPromiss/tdata')

test('promiss testing ',()=>{
    return fdata().then((data)=>{
        expect(data).toBe('hello')
    })
})