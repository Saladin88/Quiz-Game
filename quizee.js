
import inquirer from "inquirer";



console.log('Welcome to the QuizGame'),
 inquirer
.prompt([ 
    {name : 'cmdInvitName', message : 'Write your name', type : 'input', default : 'Guest'},
    {name : 'cmdlineIsPlaying', message : (answers) => ` ${answers.cmdInvitName} Do you wanna play ? yes no`, type : 'confirm' },
    {when: (answers) => answers.cmdlineIsPlaying === true, name : 'cmdlineQuestion1', message : 'What does HTML means ?', type : 'rawlist', choices : ['HyperText Markup Language', ' HigherThan My Love',' HyperTexuel Markup Language', ' HyperText Mark Language']},
    {when: (answers) => answers.cmdlineIsPlaying === true, name : 'cmdlineQuestion2', message : 'HTML is...', type : 'rawlist', choices : ['A programming language', 'A computer program','A plug-in', 'A computer language']},
    {when: (answers) => answers.cmdlineIsPlaying === true, name : 'cmdlineQuestion3', message : 'Who is in charge of his (HTML) regular update ?', type : 'rawlist', choices : ['W3C', 'WHATWG','ECMA', 'ECTA']},
    {when: (answers) => answers.cmdlineIsPlaying === true, name : 'cmdlineQuestion4', message : 'What the HTML rendering engine doesn\'t manages ?', type : 'rawlist',choices : ['Ensure Content Security Policy', 'Implement DOM','Handle navigation through hyperlinks and processes data', 'Transform a HTML Doc into an interractive interface for users']},
    {when: (answers) => answers.cmdlineIsPlaying === true, name : 'cmdlineQuestion5', message : 'To render a webpage, every browsers use browser engine such as...', type : 'rawlist',choices : ['Yahoo', 'Opera','Google Chrome', 'Safari']},
])
.then((answers)=> {
    // for (const property in answers) {
    //     console.log(`const resp ${property}:  resp de answers ${answers[property]}`)
        
    // }

    
    let count=0, notFound=0;
    const resultAnswersArr = Object.values(answers);
    const uniqueAnswer = ['HyperText Markup Language','A computer language','WHATWG','Handle navigation through hyperlinks and processes data','Yahoo'];
    resultAnswersArr.forEach(response => {
        console.log(`je suis res : ${response}`)
        uniqueAnswer.forEach(element => {
            console.log(`je suis el : ${element}`)
            if(element === response) {
                count++
            } 
        })

    }); 
    notFound = uniqueAnswer.length - count;
    console.log(`${resultAnswersArr[0]} => numbers questions : ${uniqueAnswer.length}, right answers : ${Math.trunc((count / uniqueAnswer.length) * 100)}% , wrong answers : ${Math.trunc((notFound / uniqueAnswer.length) * 100)}%`)
 
})

// console.log(candidate)



