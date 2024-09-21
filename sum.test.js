// const sum = require('./sum');
// test('adds 1 + 2 to equal 3',()=>{
//     expect(sum(1,2)).toBe(3); //toBe is used for numbers, strings and booleans
// });


test('object assignment',()=>{
    const data = {one:1};
    data['two'] = 2;
    expect(data).toEqual({one:1,two:2}); //toEqual is used for objects and arrays
});

test('null is falsy',()=>{
    const n = null;
    expect(n).toBeFalsy();//toBeFalsy is used when the value is null,undefined,blank,false or zero
});

test('one is truthy',()=>{
    const n = 1;
    expect(n).toBeTruthy();
});


const myFunction = require("./sum")
  
test('throws on invalid input',()=>{
    expect(()=>{
        myFunction('hello'); //throws invalid input if anything other than a number is given as input
    }).toThrow();
})


const { fetchData, fetchPromise } = require("./async");


test('the data is peanut butter',done =>{
    function callback(data){
        try{
            expect(data).toBe('peanut butter');
            done(); //done() tells the function that the test should finish at that point
        }
        catch(error){
            done(error);
        }
    }
    fetchData(callback);
});



test('the data is peanut butter',()=>{
    return expect(fetchPromise()).resolves.toBe('peanut butter');
})

// test('the fetch fails with an error',()=>{
//     return expect(fetchPromise().rejects.toThrow('error'));
// })

test('the data is peanut butter',async()=>{
    const data= await fetchPromise();
    expect(data).toBe('peanut butter');
});

//using mocup implementation in jest

test('mock implementation of a basic function ',()=>{
    const mock = jest.fn(x=>42+x);
    expect(mock(1)).toBe(43);
    expect(mock).toHaveBeenCalledWith(1);
})

//spy is used for tracking calls

test('spying on a method of an object',()=>{
    const video = {
        play(){
            return true;
        },
    };

    const spy = jest.spyOn(video,'play');
    video.play();

    expect(spy).toHaveBeenCalledWith();
    spy.mockRestore();
})