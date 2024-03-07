

function createConnection (serverUrl,roomId){
    return{
        connect(){
            console.log(`connnecting to ${roomId},room at ${serverUrl}...`)
        },
        disconnect(){
            console.log(`disconnnecting to ${roomId},room at ${serverUrl}...`)
        }
    }
}

export default createConnection