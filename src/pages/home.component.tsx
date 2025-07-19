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
    // let color: any = "red"
    // color = 12
    // color = true
    // console.log(color);

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
    // function throwError(msg: string):never {
    //     throw new Error(msg)
    // }
    // console.log(throwError);
    
    // function infiniteLoop():never {
    //     while(true) {
    //         // a += 1
    //     }
    // }
    // console.log(infiniteLoop());

    // let x: never;

    // x = infiniteLoop()

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

    // add value to string
    const num: number[] = []
    console.log(num);
    num.push(12)
    console.log(num);

    // multidimensional
    const angka: number[][] = [[1,2,3]]
    const angkaa: number[][][] = [[[1,2,3,4]]]
    console.log(angka);
    console.log(angkaa);
    
    // object
    const person : {firstname: string, id: number, men: boolean} = {
        firstname: 'faradis',
        id: 12,
        men: true
    } 
    console.log(person);
    console.log(person.firstname);

    function orang() : {nama: string, nik: number} {
        return {
            nama: 'faradis',
            nik: 123
        }
    }
    console.log(orang());

    // type aliases
    type Person = {name: string, age: number}

    function adis(): Person {
        return {
            name: 'faradis',
            age: 19
        }
    }
    console.log(adis().name);

    const zaka: Person = {
        name: 'zaka',
        age: 20
    }
    console.log(zaka.name + zaka.age);

    // optional properties
    type OrangLagi = {
        nama: string,
         id: number,
        gender?: "male" | "female"
    }

    const lucintaLuna: OrangLagi = {
        nama: "Lucinta Luna",
        id: 123,
    }
    lucintaLuna.id = 321
    console.log(lucintaLuna.gender);

    // intersection type
    type campur = OrangLagi & Person

    const aneh: campur = {
        name: 'ini inggris',
        age: 14,
        nama: 'nah ini indo',
        id: 321
    }

    console.log(aneh);

    // unions
    let password : string | number = 12
    password = "123"
    console.log(password);

    const user: OrangLagi | Person = {
        nama: "dias",
        id: 121212
    }
    user.nama = 'ardi'
    console.log(user);
    
    const items: (number | boolean)[] = [1,2,3 , true]
    console.log(items);
    
    // literal types
    // let gender: "men" | "women";
    // gender = "men";
    // console.log(gender);

    
    let isTrue = true
    isTrue = false
    console.log(isTrue);

    // tuples
    const myTuples: [string, boolean] = ['faradis', true]
    const [nama, benar] = myTuples
    console.log(nama);
    console.log(benar);
    console.log(myTuples[0]);

    // enum
    // enum BenarSalah {
    //     benar = "benar",
    //     salah = "salah"
    // }
    // console.log(BenarSalah.benar);

    // class
    class Person1 {
        readonly name: string;
        readonly age: number; 
        constructor (name: string, age: number) {
            this.name = name
            this.age = age
        }
    }

    const person1 = new Person1("Faradis", 19)
    console.log(person1.name);

    // acces modifier

    // encapsulation
    class MyClass {
        private _myProperty: number = 0;

        get myProperty(): number {
            return this._myProperty;
        }

        set myProperty(value: number) {
            this._myProperty = value
        }
        
    }

    const nyoba = new MyClass;
    console.log(nyoba.myProperty);
    nyoba.myProperty = 13
    console.log(nyoba.myProperty);

    // interface for function

    interface MathOperation {
        (x: number, y: number): number;
    }

    const add: MathOperation = (a,b) => a + b;
    const substract: MathOperation = (a,b) => a - b;

    console.log(add(2,3));
    console.log(substract(5,2));

    // interface with clauses
    interface Vehicle {
        start(): void;
        stop(): void;
    }

    class Car implements Vehicle {
        start() {
            console.log('mulai');
        }
        stop() {
            console.log('berhenti');
        }
    }

    const myCar = new Car;
    myCar.start();
    myCar.stop();

    interface Computer {
        name: string;
        ram: string;
        hdd: string;
    }

    const computerExample: Computer = {
        name: 'Laptop',
        ram: '12GB',
        hdd: 'siata'
    }

    console.log(computerExample);

    interface Person123 {
        name: string;
        age: number;
        sayHello(): void;
    }

    function greet(person: Person123) {
        console.log(`${person.name}`);
        person.sayHello();
    }

    const aku: Person123 = {
        name: 'faradis',
        age: 13,
        sayHello() {
            console.log('Hello');
        }
    }
    console.log(aku.name);
    greet(aku);

    interface aku {
        nama: string,
        namaLagi: string,
        tambah(nama: string, namaLagi:string): string;
    }

    const faradis: aku = {
        nama: 'Faradis',
        namaLagi: 'Adis',
        tambah: (nama, namaLagi) => {
            return `${nama}, ${namaLagi}`
        }
    }

    console.log(faradis.nama);
    console.log(faradis.tambah('Faradis', 'Adis'));

    // declaration merging

    interface Car123 {
        name: string,
        start?(): void,
    }

    interface Car123 {
        model: string,
        stop?(): void,
    }

    const Daihatsu: Car123 = {
        name: 'Daihatsu',
        model: 'Gatau'
    } 
    
    console.log(Daihatsu.name);

    // generics

    function nyoba123<T> (x: T) :T {
        return x
    } 

    console.log(nyoba123(123));
    console.log(nyoba123('string'));
    console.log(nyoba123(true));

    function nyobaLagi<T>(x: T, y: T) : string {
        return `${x} ${y}`
    }

    console.log(nyobaLagi<number>(14, 12));
    // console.log(nyobaLagi<any>("faradis", 12));

    // generics + interface
    function tes<T>(x: T, y: T): [T,T] {
        return [x,y]
    }
    
    interface Dog {
        name: string;
        gender: string;
    }

    const Chibi = tes<Dog>({name: 'Naziri', gender: 'Men'}, {name: 'Zayyan', gender: 'Men'})
    
    console.log(Chibi);

    // 
    
    function getRandomKeyValuePair<T>(obj: { [key: string]: T}): {
        key: string;
        value: T;
    } {
        const keys = Object.keys(obj);
        const randKey = keys[Math.floor(Math.random() * keys.length)];
        return {key: randKey, value: obj[randKey]};
    }

    const stringObject = {
        a: "apple",
        b: "banana",
        c: "cherry"
    }
    const randomStringPair = getRandomKeyValuePair<string>(stringObject);
    console.log(randomStringPair);
    
    const numberObject = {
        1: 12,
        2: 32,
        3: 23
    }

    const randomNumberPair = getRandomKeyValuePair<number>(numberObject);
    console.log(randomNumberPair);

    // filterArray function
    function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
        return array.filter((item) => condition(item));
    }

    const numberArray = [1,2,3,4,5,6]
    const evenNumber = filterArray<number>(numberArray, (num) => num % 2 === 0);
    console.log(evenNumber);

    const stringArray = ["ahahaha", "aha", "ihi"]
    const threeChar = filterArray<string>(stringArray, (word) => word.length === 3);
    console.log(threeChar);

    interface Fruit {
        name: string,
        color: string
    }

    const fruitArray: Fruit[] = [
        {name:"Apel", color: "red"},
        {name:"Pisang", color: "kuning" },
        {name:"Gandul", color: "oren"}
    ]

    const redFruits = filterArray<Fruit>(fruitArray, (fruit) => fruit.color === "red")
    console.log(redFruits);

    // two types
    function reversedPair<T, U>(array1: T, array2: U): [U, T] {
        return [array2, array1]
    }

    const swap = reversedPair(123, "adis")
    console.log(swap);
    
    class Object123<T> {
        private content: T;

        constructor (content: T) {
            this.content = content
        }

        getContent(): T {
            return this.content;
        }

        setContent(newContent: T): void {
            this.content = newContent
        }
    }

    const misal = new Object123<string>("Hallo")
    console.log(misal.getContent());
    misal.setContent("Hihihihi")
    console.log(misal.getContent());
    
    
    
    

    return (
        <>
            Test
        </>
    )
}

export default Home;