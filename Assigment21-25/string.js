                                                // Question 01
// var firstName = prompt("Enter your first name")
// var lastName = prompt("Enter your last name")
// var fullName = firstName+ " " +lastName
// alert(`welcom ${fullName}!`)


                                                // Question 02
// var userInput = prompt("Enter your favorite mobile phone model")
// document.write(`My favorite phone is : ${userInput} Lenght of String is : ${userInput.length}`)


                                                // Question 03
// var word1="pakistan"
// document.write(`String: ${word1}<br>Index of 'n': ${word1.indexOf("n")}<br>`) 

                                                // Question 04
// var word2  = "hello world"                
// document.write(`String: ${word2}<br>last index of l is: ${word2.lastIndexOf("l")}<br>`) 



                                                // Question 05
// document.write(`String: ${word1}<br>Charecter at index 3: ${word1.charAt(3)}`)


                                                // Question 06
// var fullName1 = firstName.concat(" ",lastName)
// document.write(`Welcome ${fullName}! using concate method`)  


                                                // Question 07
// var word3 = "Hyderabad"
// var replaceValue = word3.replace("Hyder", "Islam")
// document.write(`Original String: ${word3}<br>After replacement: ${replaceValue}`)


                                                // Question 08
// var messege = "Ali and Sami are best friends. They play cricket and football togehter."
// var replaceValue1 = messege.replaceAll("and","&")
// document.write(`Orignal: ${messege}<br>After replacement: ${replaceValue1}`)


                                                // Question 09
// var value = "472"
// document.write(`Value: ${value}<br>Type: ${typeof(value)}<br>`) 
// var value1 = +value         //there are many way to change in number +, and ,number , parseint
// document.write(`Value: ${value1}<br>Type: ${typeof(value1)}<br>`)                                            


                                                // Question 10
// var userInput1 = prompt("Enter a word")
// document.write(`User Input: ${userInput1}<br> Upper Case: ${userInput1.toUpperCase()}`)


                                                // Question 11
// document.write(`User Input: ${userInput1}<br>Title case: ${userInput1[0].toUpperCase() + userInput1.slice(1,userInput1.length)}`)                                                


                                                // Question 12
// var num = 35.36 
// var result = num.toString()
// document.write(`Number: ${num}<br>Result: ${result.replace(".","")}`)                                               


                                                // Question 14

// var userName = prompt("Eneter bakery item  name")
// var userName1= userName.toLowerCase()
// var found = false
// var a = ["cake","apple pie","cookie","chips","patties"]
// for(var i=0; i<a.length; i++){
//     if(userName1==a[i]){
//         document.write(`${a[i]} is available at ${index(a[i])} index in our bakery`)
//         found = true
//         break;
        
//     }
// }
// if(found==false){
//     document.write(`We are sorry ${userName1}  is not availaible in our bakery`)
// }


                                                // Question 15
                                            
// var password = prompt("Enter a password")
// if(password.length < 6){
//     document.write(`Enter a valid password<br>`)
    
// }
// if(!/[a-zA-Z]/.test(password)){
//     document.write(`Password must contain alphabets<br>`)
    
    
// }
// if(!/\d/.test(password)){
//     document.write(`Password must conatain atlest one number<br>`)
   
// }
// if(/^\d/.test(password)){
//     document.write(`Password do not start from a number<br>`)
   
// }


                                                // Question 16

// var university = "University of Karachi"
// var university1 = university.split('')
// for(var i=0; i<university.length; i++){
//     document.write(`${university[i]}<br>`)  
// }


                                                // Question 17
                                            
// var userInput2 = prompt("Enter a word")
// var lastIndex = userInput2[userInput2.length-1]
// document.write(`${lastIndex}`)


                                                // Question 18

// var dog = "The quick brown fox jumping over the lazy dog"
// var dog1 = dog.toLocaleLowerCase().split(/\s+/)
// var count = 0;
// for(let i of dog1){
//     if(i==='the'){
//         count++;
//     }
// }
// document.write(`There are ${count} occurrences of word 'the`)

