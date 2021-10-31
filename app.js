const express =require('express');
const {connection,mongoose}=require('./Database/DBconfig.js');//exported from seperate file.
const tblStudentInfo=require('./Model/Student.js');
const tblFacultyInfo=require('./Model/Faculty.js');
require('dotenv').config();

const app=express();
const PORT=process.env.PORT || 3000;

//Home Route
app.get("/",(req,res)=>{
    res.send("<h1>Hello Welcome to Mongo DB! </h1>")
})
// Route to create db.
app.get("/db-create", (req,res)=>{
    connection
    .then(()=>console.log("Mongodb Connected and Created database University"))
    .catch(err=>console.error("Could not connect to Mongodb.",err));
    res.send("<h1>Database created successfully using Route.</h1>");    
});
//Route to create Table.
app.get("/db-create-table", (req,res)=>{
    try {
        var result=tblStudentInfo
        console.log("StudentInfo Table Created",result)        
    } catch (error) {
        console.error("Could not create table StudentInfo",err)
    }

    try {
        var result=tblFacultyInfo
        console.log("FacultyInfo Table Created",result)        
    } catch (error) {
        console.error("Could not create table FacultyInfo",err)
    }

    
    res.send("<h1>Route for creating table </h1>")
});
//Route to insert Data.
app.get("/db-insert",(req,res)=>{
    tblStudentInfo.insertMany([{
        studentId:'1001',
        fname:'Yagnik',
        lname:'Desai',
        mobileno:'9099886620'
    },{
        studentId:'1002',
        fname:'Nikunj',
        lname:'Bhimajiyani',
        mobileno:'9099886620'
    },{
        studentId:'1003',
        fname:'Vatsal',
        lname:'Patel',
        mobileno:'9099886620'
    },{
        studentId:'1004',
        fname:'Bhargav',
        lname:'Chaudhary',
        mobileno:'9099886621'
    },{
        studentId:'1005',
        fname:'Anshul',
        lname:'Anghan',
        mobileno:'9099886621'
    }],(err,data)=>{
        if(err!=null){
            return console.error("Error Occured",err);
        }
        else
        console.log("Data inserted successfully\n",JSON.stringify(data));
    });
    tblFacultyInfo.insertMany([{
        facultyId:'101',
        fname:'Mrugendra',
        lname:'Rahevar',
        mobileno:'9898982020'
    },{
        studentId:'102',
        fname:'Martin',
        lname:'Parmar',
        mobileno:'9898982018'
    },{
        studentId:'103',
        fname:'Sneha',
        lname:'Padhiyar',
        mobileno:'9898982017'
    }
    ],(err,data)=>{
        if(err!=null){
            return console.error("Error Occured",err);
        }
        else
        console.log("Data inserted\n",JSON.stringify(data));
    })
    res.send("<h1>Route for inserting Data. </h1>")
});

//Route to update Data.
app.get("/db-update",(req,res)=>{
    
    tblStudentInfo.updateMany({studentId:1001},{$set:{fname:'Yagu'}},(err,data)=>{
        if(!err){
            console.log("Updated Data in StudentInfo:\n",data);
        }
        else
        {
            throw err;
        }
    })

    tblFacultyInfo.updateMany({studentId:102},{$set:{fname:'Jignesh'}},(err,data)=>{
        if(!err){
            console.log("Updated Data in FacultyInfo:\n",data);
        }
        else
        {
            throw err;
        }
    })

    res.send("<h1>Route for updating Data. </h1>")
})

//Route to display data
app.get("/db-display", (req,res)=>{
    tblStudentInfo.find({},(err,docs)=>{
        if(!err){
            console.log("Fetched Data in StudentInfo:\n",docs);
        }
        else{
            throw err;
        }
    })

    tblFacultyInfo.find({},(err,docs)=>{
        if(!err){
            console.log("Fetched Data in FacultyInfo:\n",docs);
        }
        else{
            throw err;
        }
    })

    res.send("<h1>Route for display of Data. </h1>")
});

//Route to Delete Data
app.get("/db-delete",(req,res)=>{
    
    tblStudentInfo.deleteOne({studentId:"1004"},(err,data)=>{
        if(!err){
            console.log("Deleted Data:\n",data);
        }
        else{
            throw err;
        }
    })

    tblFacultyInfo.deleteOne({studentId:"102"},(err,data)=>{
        if(!err){
            console.log("Deleted Data:\n",data);
        }
        else{
            throw err;
        }
    })

    res.send("<h1>Route for Deleting Data </h1>")
})

app.listen(PORT,()=>{
    console.log(`Server is running on port number ${PORT}`)
})