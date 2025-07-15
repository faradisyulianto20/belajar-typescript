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

    const employee: {
        readonly id: number,
        name: string,
        retire: (date: Date) => void
    } = {
        id: 1,
        name: '',
        retire: (date: Date) => {
            console.log(date);
        }
    }

    type Employee = {
        id: number,
        name: string, 
        retire: (date: Date) => void
    }

    let employeee: Employee = {
        id: 1,
        name: 'faradis',
        retire: (date: Date) => {
            console.log(date);
        }
    }

    function kgToLbs (kg: string | number) {
        if (typeof kg === "string") {
            console.log(kg);
        } else {
            console.log(kg);
        }
    }
    console.log(kgToLbs(123));
    

    type Draggable = {
        drag: () => void
    }

    type Resizable = {
        resize: () => void
    }

    type UIWidget = Draggable & Resizable;


    let draggable: UIWidget = {
        drag: () => {},
        resize: () => {}

    }
    console.log(employeee);
    
    employee.name = 'faradis'

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