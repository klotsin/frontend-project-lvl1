import readlineSync from 'readline-sync';

const getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
};

export const gameProgression = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name?: ');
    console.log(`Hello, ${name}!`);
    console.log('What number is missing in the progression?');
    let stepGame = 0;
    while (stepGame < 3) {
        const progress = [];
        const progressNewarr = [];
        const step = getRandomInt(10);
        const countStart = getRandomInt(10);
        const char = getRandomInt(8);
        progress.push(String(countStart));
        progressNewarr.push(String(countStart));
        let stepChange = countStart;
        for (let i = 0; i < 9; i += 1) {
            stepChange += step;
            progress.push(String(stepChange));
            if(i === char) {
                progressNewarr.push('..');
            } else {
                progressNewarr.push(String(stepChange)); 
            }
        }
        console.log(`Question: ${progressNewarr[0]} ${progressNewarr[1]} ${progressNewarr[2]} ${progressNewarr[3]} ${progressNewarr[4]} ${progressNewarr[5]} ${progressNewarr[6]} ${progressNewarr[7]} ${progressNewarr[8]} ${progressNewarr[9]}`);
        const number = readlineSync.question('Your answer: ');
        if (String(number) === progress[char + 1]) {
            console.log('Correct!')
            stepGame += 1;
        } else {
            console.log(`"${number}" is wrong answer ;(. Correct answer was "${progress[char + 1]}".\nLet's try again, ${name}!`);
        return;
        }
    }
    console.log(`Congratulations, ${name}!`);
};