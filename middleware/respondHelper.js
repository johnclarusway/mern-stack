

exports.errorRespond =(res,code,err)=>{
    res
    .status(code)
    .json({ errors: [{ message: err }] });
}