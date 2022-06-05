const createJob=async(req,res)=>{
    res.json('create job')
}
const getAllJobs=async(req,res)=>{
    res.json('get All Jobs job')
}
const deleteJob=async(req,res)=>{
    res.json('delete jobs')
}
const updateJob=async(req,res)=>{
    res.json('update jobs')
}
const showStats=async(req,res)=>{
    res.json('show stats')
}




export {createJob,deleteJob,getAllJobs,updateJob,showStats}