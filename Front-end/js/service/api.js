const domain = 'http://localhost:3000';

async function read(resource) {
    
    
    const url = `${domain}${resource}`;

    const result = await (await fetch(url)).json();
    
    return result;
} 

export default{read};
