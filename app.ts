/* OBJECTS, ARRAYS & TUPLES */

const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: 'Sebastian',
    age: 23,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
    //console.log(hobby.map()); // ERROR!!
}

console.log(person);
