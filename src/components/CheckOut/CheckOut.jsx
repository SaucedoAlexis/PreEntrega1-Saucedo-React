import { addDoc, collection, getDoc, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react'
import { ashitaProducts } from '../../config/ashitaConfig';
import { LoadingContainer } from '../LoadingContainer/LoadingContainer';

export const CheckOut = ({cartItems,total}) => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [verifiqueEmail, setVerifiqueEmail] = useState("")
    const [areWords, setAreWords] = useState(false);
    const [emailVer, setEmailVer] = useState(false);
    const [orderNum, setOrderNum] = useState("")
    const [buttonPress, setButtonPress] = useState(false)
    const [isClicked, setIsClicked] = useState(false)


    useEffect(() => {
        if (nombre != "" && apellido != "" && telefono != "" && email != "" && verifiqueEmail != "") {

            setAreWords(true);

        } else {
            setAreWords(false)
        }



        if (email.toLowerCase() == verifiqueEmail.toLowerCase()) {
            setEmailVer(true)

        } else {
            setEmailVer(false)
        }

    }, [nombre, apellido, telefono, email, verifiqueEmail])
    const handleConfirmBuying = () => {
        // Obtener la fecha actual y formatearla
        setIsClicked(true)
        const today = new Date();
        const todayFormated = `${today.toLocaleDateString()}, ${today.toLocaleTimeString()}`

        const products = cartItems
        const orden = {
            nombre:nombre,
            apellido:apellido,
            telefono:telefono,
            email:email,
            date:todayFormated,
            products:products,
            total:total,
            estado:"Generada"
        }

        addDoc(collection(ashitaProducts, "OrdenDeCompra"), orden);
        setButtonPress(true)
        setTimeout(() => {
            const orderFilter= query(collection(ashitaProducts,"OrdenDeCompra"),where("date","==",orden.date))
            
            const docPromise = getDocs(orderFilter)
            docPromise.then((res) => {
                
               setOrderNum(res.docs[0].id)
               
            })
            
        }, 2000);
        
       
    }

    const handleBuyButton  = () =>{
        return orderNum != "" ? <p className='text-white p-3 text-center'>Su transacción ha sido completada con el Número de orden: <b>{orderNum} <br></br>Muchas Gracias!!</b></p> : <img src='https://upload.wikimedia.org/wikipedia/commons/a/ad/YouTube_loading_symbol_3_%28transparent%29.gif'></img>
    }

    return (
        <>
            <div className='h-full'>
                <div className='d-flex flex-col justify-center items-center gap-2'>
                    <p className='text-white'>Rellene el formulario y si los email coinciden podrá terminar su compra</p>
                    <input type="text" placeholder='Nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} className='text-white border border-white p-1' />
                    <input type="text" placeholder='Apellido' value={apellido} onChange={(e) => setApellido(e.target.value)} className='text-white border border-white p-1' />
                    <input type="text" placeholder='Telefono' value={telefono} onChange={(e) => setTelefono(e.target.value)} className='text-white border border-white p-1' />
                    <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className='text-white border border-white p-1' />
                    <input type="text" placeholder='Verifique Email' value={verifiqueEmail} onChange={(e) => setVerifiqueEmail(e.target.value)} className='text-white border border-white p-1' />
                    {email != "" && verifiqueEmail != "" && emailVer ? "" : <p className='text-white'>Los email no coinciden</p>}
                    {areWords ? "" : <p className='text-white'>Hay campos sin llenar</p>}
                    {!isClicked && ((areWords && emailVer) && <button className='text-white rounded border border-white p-2' onClick={handleConfirmBuying}>Comprar</button>)}
                       
                    {buttonPress ? handleBuyButton() : ""}
                </div>
            </div>
        </>
    )
}
