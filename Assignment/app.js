document.write("<h1> Calculate Marksheet !</h1> ")

var fName = prompt('Enter Your First Name')
var lName = prompt('Enter Your Last Name')
document.write("<b> First Name :</b> " + fName + '<br><br>' + "<b> Lirst Name :</b> " + lName)

var rollNum = +prompt("Enter You Roll Number")
var s_name = prompt('Enter Your School Name')
document.write('<br><br>' + " <b> Roll Number :</b> " + rollNum + '<br><br>' + "<b> School Name :</b> " + s_name)


var sub1 = +prompt("Islamiyat No!")
var sub2 = +prompt("Urdu No!")
var sub3 = +prompt("English No!")
var sub4 = +prompt("Javascript No!")
var sub5 = +prompt("Html No!")
var yMark = sub1 + sub2 + sub3 + sub4 + sub5;
var totalMarks = 500

document.write('<br><br>' + " <b> Islamiyat :</b> " + sub1 + '<br><br>' + " <b> Urdu :</b> " + sub2 + '<br><br>' + " <b> English :</b> " + sub3)
document.write('<br><br>' + " <b> Javascript :</b> " + sub4 + '<br><br>' + " <b> Html :</b> " + sub5)
document.write('<br><br>' +  "<b> Your Marks :</b> " + yMark)
document.write('<br><br>' +  "<b> Total Marks :</b> " + totalMarks)

var percentage = yMark / totalMarks * 100;
document.write('<br><br>' +  "<b> Percentage :</b> " + percentage)








