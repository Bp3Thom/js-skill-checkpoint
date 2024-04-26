// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
let getUserData = async () => { 
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json()
    return data;
};

async function showUserdata() {
    try{
        const userData = await getUserData();
        let onlyName = [];
        for(let i = 0; i< userData.length; i++) {
            onlyName.push(userData[i].name)
        } 
        console.log(onlyName);
    } catch (error) { 
        console.log("Error no response")
    }
}
showUserdata()