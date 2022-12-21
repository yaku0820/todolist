const pool=require('./connect');

async function GetStudents(){
    const [students]=await pool.query('SELECT * FROM mongol');
    return students
}
async function PostStudents({name}){ 
    console.log("A1", name)
    const data=await pool.query(`insert into mongol(firstname) value('${name}')`);
    return data
}
async function PutStudents({name, id}){
    console.log("A0", name, id)
    const baz = await pool.query(`update mongol set firstname='${name}'where id=${id}`)
    return baz
}

async function DeleteStudents(id){
    console.log('Aa1',id)
    const del = await pool.query(`delete from mongol where id=${id}`)
    return del
}

module.exports = {
    GetStudents: GetStudents,
    PostStudents:PostStudents,
    PutStudents:PutStudents,
    DeleteStudents:DeleteStudents
}