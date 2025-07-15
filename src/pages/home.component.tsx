const Home = () => {
//     let age: number = 20;
//     if (age < 50)
//         age += 10
//     console.log(age);

//     const test: [number, string] = [1, 'b'];
//     console.log(test);

//     // test.push(1);
    

//     let numbers: number[] = [1, 2, 3];
//     console.log(numbers);
    
//     enum Size { Small = 0, Medium = 1, Large = 2};
//     const enum Role {
//         teacher = 'teach',
//         student = 'study',
//         staff = 'work'
//     }
//     let Faradis: Role = Role.student;
//     console.log(Faradis);
    
//     let mySize: Size = Size.Medium;


//     let sales = 123_456_789;
//     let course = 'Typescript';
//     let is_published = true;
//     let level;

//     function render(document: number) {
//         console.log(document);
//     }
//     function kali(a: number, b: number): number {
//         return a * b
//     }
//     console.log(kali(12,13));
    

//     function calculationTax(income: number, taxYear: number = 2000): number {
//         if (taxYear < 2012) 
//             return income * 1.5;
//         return income;
//     }

//     const employee: {
//         readonly id: number,
//         name: string,
//         retire: (date: Date) => void
//     } = {
//         id: 1,
//         name: '',
//         retire: (date: Date) => {
//             console.log(date);
//         }
//     }

//     type Employee = {
//         id: number,
//         name: string, 
//         retire: (date: Date) => void
//     }

//     let employeee: Employee = {
//         id: 1,
//         name: 'faradis',
//         retire: (date: Date) => {
//             console.log(date);
//         }
//     }

//     function kgToLbs (kg: string | number) {
//         if (typeof kg === "string") {
//             console.log(kg);
//         } else {
//             console.log(kg);
//         }
//     }
//     console.log(kgToLbs(123));
    

//     type Draggable = {
//         drag: () => void
//     }

//     type Resizable = {
//         resize: () => void
//     }

//     type UIWidget = Draggable & Resizable;


//     let draggable: UIWidget = {
//         drag: () => {},
//         resize: () => {}

//     }
//     console.log(employeee);

//     type Quantity =  50 | 100;
//     let quantity: Quantity = 100;

//     function great(name?: string | null) {
//         if (name)
//             console.log(name.toUpperCase());
//         else 
//             console.log('kocak kosong');
//     }
    
//     great(null)
//     great(undefined)

//     type User = {
//         name: string,
//         address?: {
//             city: string;
//         };
//     };

//    const user: User = { name: "Dian" , address : {city: 'Magelang'}};

//     // tanpa optional chaining → error
//     // console.log(user.address.city); 

//     // dengan optional chaining → aman
//     console.log(user?.address?.city);


//     employee.name = 'faradis'

//     console.log(calculationTax(2));
    

//     render(sales);
    
//     console.log(sales);
//     console.log(course);
//     console.log(is_published);
    
    // Annotation
    let myName: string = "Faradis Yulianto"
    myName = "Ini nama habis diubah"
    console.log(myName);

    // Number
    let favNumber: number = 12
    favNumber += 3
    console.log(favNumber);

    // boolean
    let isHard: boolean = true
    isHard = false
    console.log(isHard);

    // no annotation
    let string = 'adis'
    string = 'faradis'
    console.log(string);

    // any
    let color: any = "red"
    color = 12
    color = true
    console.log(color);

    // function parameters + return annontation
    function times(a: number, b: number): number {
        return a * b
    }
    console.log(times(2,3))

    // arrow function
    const double = (x: number, y:number): number => {
        return x*y
    }
    console.log(double(2,3))

    // default params value
    const hello = (name: string = 'Faradis'): void => {
        console.log(`Hallo ${name} `)
    }
    hello()
    hello('Adis')

    // never
    function throwError(msg: string):never {
        throw new Error(msg)
    }
    console.log(throwError);
    
    function infiniteLoop():never {
        while(true) {
            // a += 1
        }
    }
    console.log(infiniteLoop());

    let x: never;

    x = infiniteLoop()

    // arrays
    // [] notation
    const numbers: number[] = [1,2,3]
    console.log(numbers);

    // Array<type>
    const names: Array<string> = [
        'adis',
        'yuli',
        'anto'
    ]
    names.push('far')
    console.log(names);
    
    
    
    return (
        <>Test</>
    )
}

export default Home;