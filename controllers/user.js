const messages = require('../utils/locale/en');
module.exports = {
    login(request, response){
        //console.log(request.body);
        const userObject = request.body;
        console.log('USER #### ', userObject);
        if(userObject.userid === userObject.password){
            response.json({message:messages['welcome']+userObject.userid});
        }
        else{
            response.json({message:messages['invalid']});
        }
    },
    register(request, response){

    },
    profile(request, response){
        const userObj = request.query; //?user=Amit (QueryString)
        response.json({message:'User Profile is ', userid: userObj.user})
    },
    deleteProfile(request, response){
        console.log(request.params);
        const user = request.params.user; // Path parameters
        response.json({message:'User Delete Profile is ', userid: user});
    }

}