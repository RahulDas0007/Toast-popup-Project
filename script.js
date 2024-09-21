const button = document.querySelector(".btn")
const horizontalPosition = document.querySelector("#horizontal-position")
const verticalPosition = document.querySelector("#vertical-position")
const toastContainer = document.querySelector(".toast-container")
const textInput = document.querySelector("#text-input")
const statusType = document.querySelector("#status")
const duration = document.querySelector("#duration")

button.addEventListener('click', () => {

    if (horizontalPosition.value === 'right') {
        toastContainer.classList.add('right')
    } else {
        toastContainer.classList.remove('right')
    }
    if (verticalPosition.value === 'bottom') {
        toastContainer.classList.add('bottom')
    } else {
        toastContainer.classList.remove('bottom')
    }


    const newToast = document.createElement('div')
    newToast.classList.add("toast")
    toastContainer.append(newToast)


    if (statusType.value === 'success') {
        newToast.innerText = ` ${textInput.value}`
        newToast.classList.add('success')
        const removeIcon = document.createElement('span')
        removeIcon.innerText = ` ✕`
        newToast.append(removeIcon)

        setTimeout(() => { 
            if(toastContainer.classList.contains('right')){
                newToast.classList.add("go-right");
                }else {
                    newToast.classList.add("go-left");
                }
                setTimeout(() => { 
                    newToast.remove()
                 },100)
         },parseInt(duration.value) * 1000)
        //  

        function removeToast() {
            
            setTimeout(() => { 
                newToast.remove()
             },100)
        }
        removeIcon.addEventListener('click',() => { 
            newToast.remove()
            removeToast()
         })

        setTimeout(() => { 
            removeToast()
         },parseInt(duration.value) * 1000)
        
        
    }
    else if (statusType.value === 'error') {
        newToast.innerText = ` ${textInput.value}`
        newToast.classList.add('error')
        const removeIcon = document.createElement('span')
        newToast.append(removeIcon)
        removeIcon.innerText = ` ✕`
        newToast.append(removeIcon)

        setTimeout(() => { 
            if(toastContainer.classList.contains('right')){
                newToast.classList.add("go-right");
                }else {
                    newToast.classList.add("go-left");
                }
                setTimeout(() => { 
                    newToast.remove()
                 },100)
         },parseInt(duration.value) * 1000)
         

        function removeToast() {
            
            setTimeout(() => { 
                newToast.remove()
             },100)
        }
        removeIcon.addEventListener('click',() => { 
            newToast.remove()
            removeToast()
         })

        setTimeout(() => { 
            removeToast()
         },parseInt(duration.value) * 1000)
        
        
    }
    else if (statusType.value === 'warning') {
        newToast.innerText = ` ${textInput.value}`
        newToast.classList.add('warning')
        const removeIcon = document.createElement('span')
        newToast.append(removeIcon)
        removeIcon.innerText = ` ✕`
        newToast.append(removeIcon)

        setTimeout(() => { 
            if(toastContainer.classList.contains('right')){
                newToast.classList.add("go-right");
                }else {
                    newToast.classList.add("go-left");
                }
                setTimeout(() => { 
                    newToast.remove()
                 },100)
         },parseInt(duration.value) * 1000)
        //  

        function removeToast() {
            
            setTimeout(() => { 
                newToast.remove()
             },100)
        }
        removeIcon.addEventListener('click',() => { 
            newToast.remove()
            removeToast()
         })

        setTimeout(() => { 
            removeToast()
         },parseInt(duration.value) * 1000)
        
        
    }
    else if (statusType.value === 'info') {
        newToast.innerText = ` ${textInput.value}`
        newToast.classList.add('info')
        const removeIcon = document.createElement('span')
        newToast.append(removeIcon)
        removeIcon.innerText = ` ✕`
        newToast.append(removeIcon)

        setTimeout(() => { 
            if(toastContainer.classList.contains('right')){
                newToast.classList.add("go-right");
                }else {
                    newToast.classList.add("go-left");
                }
                setTimeout(() => { 
                    newToast.remove()
                 },100)
         },parseInt(duration.value) * 1000)
        //  

        function removeToast() {
            
            setTimeout(() => { 
                newToast.remove()
             },100)
        }
        removeIcon.addEventListener('click',() => { 
            newToast.remove()
            removeToast()
         })

        setTimeout(() => { 
            removeToast()
         },parseInt(duration.value) * 1000)
        
        
    }


   
})

// console.log(duration.value);
// console.log(toastPopup.innerText);

