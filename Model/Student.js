const mongoose=require('mongoose');//exported from seperate file.

const StudentSchema=new mongoose.Schema({
    studentId:{
        type:String,
        require:true,
        unique:true
    },
    fname:{
        type:String,
        require:true
    },
    lname:{
        type:String,
        require:true
    },
    mobileno:{
        type:String,
        require:true,
        maxlength:10
    }
});

const tblStudentInfo=mongoose.model('tblStudentInfo',StudentSchema);
module.exports=tblStudentInfo;
