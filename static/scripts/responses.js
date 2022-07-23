function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hi" || input=="Hai" || input=="Hi" || input=="HI" || input=="hI" || input=="hai" || input=="hey" || input=="HEY" || input=="Hey" || input=="good" || input=="Good" || input=="I am fine" || input=="fine" ||input=="FINE") {
        return "Hello! How can i help you.";
    }
    else if(input=="yes"|| input=="s"||input=="S"||input=="Yes"||input=="YES"){
        return "Please Tell Me."
    }
    else if(input=="I need some help" || input=="Help" ||input=="help"){
        return "Ok. You Have to choose an options Type 'option' or 'options'"
    }
    else if(input=="options" || input=="option"){
        return "* Cancer  If ok please Type 'Yeah' otherwise Type 'No'"
    } 
    else if(input=="Yeah"||input=="yeah"){
        return "Doctor Availability Type 'ok' Otherwise Type 'Doctors'"
    }
    else if(input=="No"){
        return " * Appointment Type 'ok'"
    }
    else if(input=="Ok" || input=="ok"){
        return "Choose Doctors Richa Garg and Chia Vits"
    }
    else if(input=="Richa Garg" || input=="richa garg" ||input=="richagarg"|| input=="chia vits" || input=="Chia vits"||input=="chiavits"){
        return "Book An Appointment Type 'chia' or 'Richa'"
    }
    else if(input=="Richa"||input=="richa"||input=="RICHA"){
        return "Choose Timings Type 't'"
    }
    else if(input=="t"||input=="T"){
        return "10:30AM -2:00PM Type 'continue'"
    }
    else if(input=="continue" ||input=="Continue"){
        return "Your Appointment Booked Successfully!"
    }
    else if(input=="Thank You"|| input=="tq" ||input=="Tq" ||input=="TQ"){
        return "Your Welcome!"
    }
    else if(input=="chia vits" || input=="Chia vits"){
        return "Book An Appointment Type 'c'"
    }
    else if(input=="c"||input=="C"){
        return "Choose Timings Type 'time'"
    }
    else if(input=="time" || input=="timings"|| input=="Time"){
        return "3:30PM-7:00PM Type 'proceed'"
    }
    else if(input=="proceed"|| input=="Proceed"){
        return "Your Appointment Booked Successfully!"
    }
 
    else if (input=="doctors"||input=="Doctors"){
        return "Ajay Sharma ,Vineet Sharma , Richa Garg , Chia Vits"
    }
    else if(input=="Ajay Sharma" ||input=="ajaysharma" ||input=="Ajaysharma"){
        return "He is Available at 7:00PM-9:0PM ok Type'a'"
    }
    else if(input=="a"|| input=="A"){
        return "Are You Sure Type 'proceed'"
    }
    else if(input=="Vinnetsharma"||input=="Vineet Sharma" ||input=="Vineetsharma"){
        return "He is Available at 9:20PM-11:00PM ok Type 'a'"
    }
    else if (input == "goodbye") {
        return "Talk to you later!";
    }
    else {
        return "Anything Else Please ask!";
    }
}