/* OBJECTS, ARRAYS & TUPLES */
var person = {
    name: 'Sebastian',
    age: 23,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};
var favoriteActivities;
favoriteActivities = ['Sports'];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    //console.log(hobby.map()); // ERROR!!
}
console.log(person);
