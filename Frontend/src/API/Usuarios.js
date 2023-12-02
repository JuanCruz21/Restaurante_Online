const url = "http://18.223.206.46:5000/Usuarios/"

export async function getListaUsuarios(){
    const res = await fetch(url);
    const data = await res.json();
    return data.Usuarios
}

export async function agregarUsuarios(usuario){
    const res = await fetch(url,{
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(usuario)
    });
    const data = await res.json();
    console.log(data)
    return data.Usuarios
}

export async function actualizarUsuarios(usuario){
    const res = await fetch(url,{
        method: 'PATCH',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(usuario)
    });
    const data = await res.json();
    console.log(data)
    return data
}

    export async function eliminarUsuarios(id){
        const res = await fetch(url+`${id}`,{
        method: 'DELETE',
        headers: {'content-type': 'application/json'}
    });
    const data = await res.json();
    console.log(data)
    return data
}