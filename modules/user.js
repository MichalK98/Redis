function delay(ms) {
    return new Promise(resolve => setTimeout(() => resolve(), ms));
}

async function getUser(id) {
    await delay(2000);

    time = new Date().toLocaleTimeString();

    if (isNaN(id)) {
        return null;
    }

    switch(id) {
        case "1": return { id, name: "Michal", time };
        case "2": return { id, name: "Mattias", time }
        case "3": return { id, name: "Camilla", time }
        default: return null;
    }
}

module.exports = {
    getUser
}
