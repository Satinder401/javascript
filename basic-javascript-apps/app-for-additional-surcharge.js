// building an app for applying additional surcharges to any payment.
function addTouristSurcharge(payment){
  try{
    if(typeof(payment) != 'number'){
      throw new ReferenceError  ('Payment reference is not a number')
    }
    else{
      console.log(payment + 10)
    }
  }
  catch(err){
    console.log('Error ' + err)
  }
}
addTouristSurcharge('60')
