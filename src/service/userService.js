const loginService = async (user) =>{
    let validation =  JSON.parse(localStorage.getItem('users'));
    const acept = validation.find(element => (user.email === element.email) && (user.password === element.pass));
    return await acept
  
}
export default {
    loginService
}