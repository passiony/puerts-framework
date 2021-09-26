test("array length test",()=>{
   console.log("start array test");
    let array = [1];
    array[10] = 2;
    let count = array.length;
    expect(count).toBe(11);
});