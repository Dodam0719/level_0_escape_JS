function solution(age) {
    const alienAge = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    let myAlienAge = [];
    return [...String(age)].map((el) => myAlienAge = alienAge[el]).join('');
}