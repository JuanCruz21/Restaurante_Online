const url = "http://localhost:5000/Plato/"

export async function getListaPlatos(){
    const res = await fetch(url);
    const data = await res.json();
    return data.Platos
}

export async function agregarPlatos(plato){
    const res = await fetch(url,{
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(plato)
    });
    const data = await res.json();
    console.log(data)
    return data.Platos
}

export async function actualizarPlatos(plato){
    const res = await fetch(url,{
        method: 'PATCH',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(plato)
    });
    const data = await res.json();
    console.log(data)
    return data
}

export async function eliminarPlato(id){
    const res = await fetch(url+`${id}`,{
        method: 'DELETE',
        headers: {'content-type': 'application/json'}
    });
    const data = await res.json();
    console.log(data)
    return data
}