var fdata=require('./src/callbackFunctionTesting/f1')


test('testing callback function',done=>{
    function callback(data){
    

        try{
expect(data.toBe('hello callback'))
        }catch(error){
            console.log(error);

        }
    }
    fdata(callback)
})
