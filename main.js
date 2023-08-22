const boton = document.getElementById("boton")
const htmlContador = document.getElementById("contador")
const botonClear = document.getElementById("clear")
const barraProgreso = document.getElementById("barra-progreso")
const textoBarra = document.getElementById("texto-barra")
const colores = ["red", "blue", "black", "yellow", "orange", "purple", "green", "magenta"]  

let clicksLocalStorage = Number(localStorage.getItem("clicks"))
let porcentajerLocalStorage = Number(localStorage.getItem("porcentaje"))
let contador = 0
let porcentaje = 0

if (clicksLocalStorage || porcentajerLocalStorage){
    contador = clicksLocalStorage
    porcentaje = porcentajerLocalStorage
    


    if (contador >= 10){
        porcentaje = Math.floor(contador / 10) 
    }
}

barraProgreso.style.width = `${porcentaje}%`
textoBarra.innerHTML= `${porcentaje}%`
htmlContador.innerHTML = `${contador} clicks`

boton.addEventListener('click', (e)=>{
    e.preventDefault()
    
    if (porcentaje < 100){
        contador += 1

        htmlContador.innerHTML = `${contador} clicks`
        
        localStorage.setItem("clicks", contador)

        if (contador % 10 === 0){
            porcentaje += 1
            localStorage.setItem("porcentaje", porcentaje)
            barraProgreso.style.width = `${porcentaje}%`
            textoBarra.innerHTML= `${porcentaje}%`

            if (porcentaje === 100){
                htmlContador.innerHTML = `Felicitaciones por los ${contador} clicks!`
                htmlContador.style.fontWeight = "bold"
                colorin = setInterval(()=>{
                    htmlContador.style.color = colores[Math.floor(Math.random() * colores.length)]
                }, 500)
            }
        }

    }
})

botonClear.addEventListener('dblclick', (e)=>{
    e.preventDefault()
    localStorage.clear()
    contador = 0
    porcentaje = 0
    htmlContador.innerHTML = `${contador} clicks`
    barraProgreso.style.width = `${porcentaje}%`
    textoBarra.innerHTML= `${porcentaje}%`
    htmlContador.style.fontWeight = "normal"
    clearInterval(colorin)
    htmlContador.style.color = "black"
    
})
