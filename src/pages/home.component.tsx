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
    const enum Role {
        teacher = 'teach',
        student = 'study',
        staff = 'work'
    }
    let Faradis: Role = Role.student;
    console.log(Faradis);
    
    let mySize: Size = Size.Medium;


    let sales = 123_456_789;
    let course = 'Typescript';
    let is_published = true;
    let level;

    function render(document: number) {
        console.log(document);
    }
    function kali(a: number, b: number): number {
        return a * b
    }
    console.log(kali(12,13));
    

    function calculationTax(income: number, taxYear: number = 2000): number {
        if (taxYear < 2012) 
            return income * 1.5;
        return income;
    }

    console.log(calculationTax(2));
    

    render(sales);
    
    console.log(sales);
    console.log(course);
    console.log(is_published);
    
    
    return (
        <>Test</>
    )
}

export default Home;