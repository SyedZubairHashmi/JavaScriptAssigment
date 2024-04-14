//                    // Question 01

// var student =[];
//                    // Question 02
// var student2 = {};

//                    // Question 03
// var string1 = ['zubair','umair','usman','ali'];

//                    // Question 04
// var number = [ 1, 2,34,5,6,78,9,10];

//                    // Question 05
// var boolean1 = [ true, false];

//                    // Question 06
// var mixed = [12,3,54,3,'zubair','hashmi','ali',true];

//                    // Question 07
// var qualification = ['SSC' , 'HSC' ,"BSC","BS","BCOM","MS","M.Phil.","PhD."]
// document.write("<h2>Qualification</h2>")

// document.write(`1)${qualification[0]}<br>2)${qualification[1]}<br>3)${qualification[2]}<br>4)${qualification[3]}<br>5)${qualification[4]}<br>6)${qualification[5]}<br>7)${qualification[6]}<br>8)${qualification[7]}<br>`)

//                    // Question 08
// var studentName = ['zubair','faheem','ibraheem']
// var score = [ 463 ,354 ,346]
// document.write(`Score pf ${studentName[0]} is ${score[0]}. percetage${score[0]/500*100}% <br>`)
// document.write(`Score pf ${studentName[1]} is ${score[1]}. percetage${score[1]/500*100}% <br>`)
// document.write(`Score pf ${studentName[2]} is ${score[2]}. percetage${score[2]/500*100}% <br>`)

// var color = ['blue','white','black','yellow','green','orange'];
// console.log(`Original Array : ${color}`)

                        //    Question 09 a
// var addStart = prompt("What color you wnat to add in Array at the begning")
// color.unshift(addStart);
//  console.log(`Updated Array Addstart : ${color}`)

                        //    Question 09 b
// var addEnd = prompt("What color you want to add at end in the Array")
// color.push(addEnd);

// console.log(`Updated Array ${color}`);

                        //    Question 09 c
// color.unshift('vilot','red');
// console.log(`Updated Array ${color}`);

                        //    Question 09 d
// color.shift()
// console.log(`Updated Array:  ${color}`);

                        //    Question 09 e
// color.pop() 
// console.log(`Updated Array ${color}`)
                        //    Question 09 F
// var indexAdd = prompt("At which index you want to add a color")
// var colorName = prompt("Tell me color name which you want to add in Array")
// color [indexAdd] = colorName;
// console.log(`Updated Array ${color}`)

                        //    Question 09 g
// var deletePosition = prompt("At which position or index no you want to delete element")
// color[deletePosition] = null;
// document.write(color)
// console.log(`Updated Array ${color}`)



                        //    Question 10
// var score1 =[  230, 234,300, 210,200,190,195]

// document.write(`Score of Students : ${score1}<br>`)
// score1.sort();
// document.write(`Order Score of Students : ${score1}`)


                        //    Question 11
        
// var cities = [ "karachi","peshawer","quetta","lahore","multhan"]
// document.write(`<h3>Cities list :</h3><h3>${cities}</h3><br>`)

// document.write(`<h3>Selected list :</h3><h3>${cities.splice(2,4)}</h3>`)


                        //    Question 12
// var arr = ["This", "is", "my", "cat"];

// // Output the array
// document.write(`<b>Array :</b><br> `);
// document.write(`${arr}<br>`);

// // Convert array to string with spaces between elements
// var newArr = arr.join(" ");

// // Output the string
// document.write(`<b>String</b><br>`);
// document.write(`${newArr}`);


                        //    Question 13

// var store = []

// var userInput;
// function enqueue(userInput){
//     store.push(userInput)
// }
// function dequeue(){
//     store.shift()
// }

// enqueue("zubair")
// enqueue("rehan")
// enqueue("farman")

// document.write(`${store}<br`)
// dequeue()>
// document.write(`${store}`)

                    //  method 02
                                                    //   FIFO
// var devices = ["keyboard","mouse","printer","monitor"]
// document.write(`Devices:<br> ${devices}<br>`)
// var remove;
// remove = devices.shift();
// document.write(`Out: <br> ${remove}<br>`)

// remove = devices.shift();
// document.write(`Out: <br> ${remove}<br>`)

// remove = devices.shift();
// document.write(`Out: <br> ${remove}<br>`)

// remove = devices.shift();
// document.write(`Out: <br> ${remove}<br>`)
                                                        // LIFO
// remove = devices.pop();

// document.write(`Out: <br> ${remove}<br>`)

// remove = devices.pop();

// document.write(`Out: <br> ${remove}<br>`)

// remove = devices.pop();

// document.write(`Out: <br> ${remove}<br>`)

                                                        // Question 15
// var phoneMnaufacturere = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"]

// function dropmenue () {
//     var phoneMnaufacturere = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"]
//     for(var i=0; i<phoneMnaufacturere.length; i++){
//         document.write(`${phoneMnaufacturere[i]}<br>`)
//     }
// }



