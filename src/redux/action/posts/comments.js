import axios from 'axios'

function postComments(url,data){
    axios.post(url,data)
        .then((res)=>{
            console.log(res)
        }).catch((error)=>{
            console.log(error)
        })
}
