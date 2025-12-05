// This function is used to check if the local storage has been initiated when user go on index.html

export function initiateStorage (){
    if (!localStorage.getItem("pieces"))  {
        localStorage.setItem('pieces','[]');
    }
}