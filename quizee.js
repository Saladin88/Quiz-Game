
import inquirer from "inquirer";
import {createRequire} from "module";


 async function displayBanner (){
const require = createRequire(import.meta.url);
const fs = await require('fs');
fs.readFile('banner.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
}); 
 };
 displayBanner();
 console.log(displayBanner())
console.log('Welcome to the QuizGame');


const promise2 = new Promise ((resolve)=> { 
    resolve(
    // async function getQuestions () {
    //     const candidates = await Promise.all([
    inquirer.prompt([ 
    {name : 'cmdInvitName', message : 'Write your name', type : 'input', default : 'Guest'},
    {name : 'cmdlineIsPlaying', message : (answers) => ` ${answers.cmdInvitName} Do you wanna play ? yes no`, type : 'confirm' },
    {when: (answers) => answers.cmdlineIsPlaying === true, name : 'cmdlineQuestion1', message : 'What does HTML means ?', type : 'rawlist', choices : ['HyperText Markup Language', ' HigherThan My Love',' HyperTexuel Markup Language', ' HyperText Mark Language']},
    {when: (answers) => answers.cmdlineIsPlaying === true, name : 'cmdlineQuestion2', message : 'HTML is...', type : 'rawlist', choices : ['A programming language', 'A computer program','A plug-in', 'A computer language']},
    {when: (answers) => answers.cmdlineIsPlaying === true, name : 'cmdlineQuestion3', message : 'Who is in charge of his (HTML) regular update ?', type : 'rawlist', choices : ['W3C', 'WHATWG','ECMA', 'ECTA']},
    {when: (answers) => answers.cmdlineIsPlaying === true, name : 'cmdlineQuestion4', message : 'What the HTML rendering engine doesn\'t manages ?', type : 'rawlist',choices : ['Ensure Content Security Policy', 'Implement DOM','Handle navigation through hyperlinks and processes data', 'Transform a HTML Doc into an interractive interface for users']},
    {when: (answers) => answers.cmdlineIsPlaying === true, name : 'cmdlineQuestion5', message : 'To render a webpage, every browsers use browser engine such as...', type : 'rawlist',choices : ['Yahoo', 'Opera','Google Chrome', 'Safari']},
    {when: (answers) => answers.cmdlineIsPlaying === true, name : 'cmdlineQuestion6', message : 'How do we call the CSS tree', type : 'rawlist',choices : ['CSSOM', 'DOM','AST','DOOM']},
    {when: (answers) => answers.cmdlineIsPlaying === true, name : 'cmdlineQuestion7', message : 'Why do we represent the CSS structure in tree', type : 'rawlist',choices : ['For performance', 'Similarity with nodes\'s trees','Easier comprehension', 'For all of it']},
    {when: (answers) => answers.cmdlineIsPlaying === true, name : 'cmdlineQuestion8', message : 'To load the CSS we need to wait...', type : 'rawlist',choices : ['The sunrise', 'HTML','CSS', 'None of them is required']},
    {when: (answers) => answers.cmdlineIsPlaying === true, name : 'cmdlineQuestion9', message : 'In theses following answers which one is not a CSS selector type', type : 'rawlist',choices : ['*|*', '*#','~', '&&']},
    // {when: (answers) => answers.cmdlineIsPlaying === true, name : 'cmdlineQuestion10', message : 'To render a webpage, every browsers use browser engine such as...', type : 'rawlist',choices : ['Yahoo', 'Opera','Google Chrome', 'Safari']},
]))})
promise2.then((answers)=> {
    let count=0, notFound=0;
    const resultAnswersArr = Object.values(answers);
    const trueAnswer = ['HyperText Markup Language','A computer language','WHATWG','Handle navigation through hyperlinks and processes data','Yahoo','CSSOM','For all of it', 'HTML','&&'];
    const candidate = resultAnswersArr.slice(2);
    console.log(candidate);
    const nameUser = resultAnswersArr[0];
    const isPlayingTrue = resultAnswersArr[1];

    if (isPlayingTrue) {
    candidate.forEach(response => {
        trueAnswer.forEach(element => {
            if(element === response) {
                count++
            } else {

            }
        })

    }); 
    notFound = candidate.length - count;
    console.log(`${nameUser} => numbers questions : ${candidate.length}, right answers : ${Math.trunc((count / candidate.length) * 100)}% , wrong answers : ${Math.trunc((notFound / candidate.length) * 100)}%`)
}
 
})







