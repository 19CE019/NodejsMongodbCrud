const mongoose=require('mongoose');//exported from seperate file.


const FacultySchema=new mongoose.Schema({
    facultyId:{
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

const tblFacultyInfo=mongoose.model('tblFacultyInfo',FacultySchema);

module.exports=tblFacultyInfo;
