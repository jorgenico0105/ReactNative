import {Client} from "react-native-appwrite"

export const appwriteConfig={
    endpoint:"https/cloud.appwritte.io/v1",
    platform:"com.jsm.ile",
    projectId:"671185250025ec4abf07",
    databaseId:"67118718000a123f857d",
    usersId:"671187370010452eaede",
    videosCollectionId:"6711875700126e20377a",
    storageId:"671188c3003df9983d33"
}
const client = new Client()



client
    .setEndpoint(appwriteConfig.platform)
    .setProject(appwriteConfig.projectId)
    .setPlatform(appwriteConfig.platform)


const createUser =() =>{
        
}