export const DecodeError = (e)=>{
    

  if ("errorMessage" in e?.response?.data)
  {

    return {
      "ServerError": e.response.data.errorMessage
    }
  }
  if("data" in e?.response?.data)
  {

    return e.response.data.data
  }
    const errors = e.response.data.data
    let dictionarErrors = {}
    for (const key in errors) {
        if (errors.hasOwnProperty(key)) {
          const value = errors[key];
          dictionarErrors[key]=value
        }
      }
    return dictionarErrors
}