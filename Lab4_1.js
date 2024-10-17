function myfunc(){
    console.log("-----------------------------------------------------------------------");
}

function student_details(std_id,std_name,std_course,std_semester,html_marks,css_marks,js_marks){
    let result = html_marks+css_marks+js_marks;
    let percentage = result/3;
    console.log("Student ID is",std_id);
    console.log("Student name is",std_name);
    console.log("Student course is",std_course);
    console.log("Student semester is",std_semester);
    console.log("Marks in HTML",html_marks);
    console.log("Marks in CSS",css_marks);
    console.log("Marks in Javascript",js_marks);
    console.log("Total",result);
    console.log("Percentage "+percentage+" %");
}
myfunc()
student_details("DT001","Ravi","Engineering",5,90,95,97)
myfunc()
student_details("DT002","Shyam","Engineering",5,90,92,91)
myfunc()
student_details("DT003","Hari","Engineering",5,92,90,95)

