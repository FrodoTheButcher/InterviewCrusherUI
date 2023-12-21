export const DecodeError = (e)=>{
    
  if(!e)
  return;


const errors = "errorMessage" in  e.response.data ? e.response.data.errorMessage : e.response.data.data
if (typeof errors === 'string' || errors instanceof String)
    return [errors]


    let dictionarErrors = {}
    for (const key in errors) {
        if (errors.hasOwnProperty(key)) {
          const value = errors[key];
          dictionarErrors[key]=value?.length > 0 ? value[0] : value
        }
      }
    console.log("error",dictionarErrors)
    return dictionarErrors
}
