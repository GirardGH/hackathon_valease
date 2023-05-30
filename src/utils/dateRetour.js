function dateRetour(depart, retour){
  let res = new Date();
  res.setDate(res.getDate() + parseInt(depart) + parseInt(retour));
  // const myDateRetour = `${res.getFullYear()}-${res.getMonth()+1}-${res.getDate()<10 ? `0${res.getDate()}`
  //  : res.getDate ()} `
   const myDateRetour = `${res.getFullYear()}-${(res.getMonth()+1) < 10 ? `0${res.getMonth()+1}` : (res.getMonth()+1)}-${res.getDate()<10 ? `0${res.getDate()}`
   : res.getDate ()}`
  return myDateRetour;
}

export default dateRetour;