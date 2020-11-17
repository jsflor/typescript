/* OBJECTS, ARRAYS, TUPLES, ENUMS */

// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'Sebastian',
//     age: 23,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// };

enum Role {ADMIN, READ_ONLY, AUTHOR};

const person = {
    name: 'Sebastian',
    age: 23,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
    //console.log(hobby.map()); // ERROR!!
}

if(person.role === Role.ADMIN){
    console.log('is admin!');
    
}

console.log(person);
