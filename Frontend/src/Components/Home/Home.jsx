import "../../Styles/Home/Home.css"
function Home () {
    return(
        <>
            <main className="contenedor">
                <h1 className="titulo">Restaurante Online</h1>
            
                <p className="textoHome">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut incidunt perspiciatis veniam laudantium doloremque maiores, repellendus repellat illum sint nihil ipsam. Recusandae molestiae vitae officiis aspernatur quos, accusantium reprehenderit architecto!
                    Reiciendis ex exercitationem, fugiat perspiciatis aperiam dolore blanditiis hic tempora laborum eius quod numquam fugit vero, totam quas deserunt molestiae pariatur repellendus esse sequi animi debitis nam doloremque? Optio, possimus.
                    Maxime soluta cumque, aperiam porro, nostrum temporibus et magni amet, aut beatae doloribus. Numquam provident aliquid incidunt consectetur, blanditiis aliquam odit iusto eveniet voluptates ullam accusamus harum commodi deserunt praesentium.
                </p>
            </main>

            <section className="contenedor extra-margin">
            <h2 className="titulo">Contacto</h2>
            <form action="send">
                <fieldset>
                    <legend className="textoHome">Contactanos llenando los siguientes campos</legend>
                    <input type="email" name="" id="" placeholder="Correo Electronico"/>
                    <input type="text" placeholder="Titulo"/>
                    <input type="text" placeholder="Descripcion..."/>
                    <button type="button" className="btn btn-primary"> Enviar</button>
                </fieldset>
            </form>
        </section>
        </>
    )
}
export default Home;