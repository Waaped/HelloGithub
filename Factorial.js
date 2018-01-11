var solution =1;
for (var x = 4; x>=1; x--) {
  console.log('X decremented '+x);
  solution = solution * x;
  console.log('Solution '+solution);
}
console.log(solution);


//Had trouble with this one, had to look for a solution.
//Once i found it, i disscedt it and added the extra console.logs.
//I knew something had to be outputed on the outside of the for loop.
//I initially intitialized a variable 'y', into the loop, but didnt realize.
//It would just feed the same X value reduntantly.
//Just didnt grasp it well enough, will learn from this a bit more.
//Changed solution*= to solution = solution * x, to further disect.
