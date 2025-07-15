const Home = () => {
    let age: number = 20;
    if (age < 50)
        age += 10
    console.log(age);

    const test: [number, string] = [1, 'b'];
    console.log(test);

    // test.push(1);
    

    let numbers: number[] = [1, 2, 3];
    console.log(numbers);
    
    enum Size { Small = 0, Medium = 1, Large = 2};
    let mySize: Size = Size.Medium;


    let sales = 123_456_789;
    let course = 'Typescript';
    let is_published = true;
    let level;

    function render(document: number) {
        console.log(document);
    }

    function calculationTax(income: number, taxYear: number): number {
        if (taxYear < 2012) 
            return income * 1.5;
        return income;
    }

    console.log(calculationTax(2, 2022));
    

    render(sales);
    
    console.log(sales);
    console.log(course);
    console.log(is_published);
    
    
    return (
        <>Test</>
    )
}

export default Home;