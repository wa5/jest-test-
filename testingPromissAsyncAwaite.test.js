var fd=require('./src/testingAsyncAwait/tf')

test('async awite promiss test',async()=>{
const data=await fd()
expect(data).toBe('done')
})