const name = document.getElementById("name");
const email = document.getElementById("email");
const contact = document.getElementById("contact");
const name_msg = document.querySelector(".name");
const limit = document.querySelector(".limit");
const address = document.querySelector("#address");
let add_val = false;
let email_val = false;
let con_val = false;
let name_val = false;
const btn = document.querySelector(".mybtn");

name.addEventListener("blur", ()=>{
  // console.log(name.value);
  //validating the name
  let re = /^[a-zA-Z]{1,10}$/;    //regex
  let str = name.value.split(" "); //removing the spaces
  str = str.join("");
  // console.log(str);
  if(re.test(str)){  //if the input matches the regex then we will consider it valid
    console.log("matched");
    name.classList.add("is-valid");
    name.classList.remove("is-invalid");
    name_val = true;
  }else{
    // console.log("not matched");
    if(name.value.length > 10){
      name_msg.innerHTML = "The length should be in range";
    }else{
      name_msg.innerHTML = "Invalid Input";
    }
    name.classList.add("is-invalid");
    name.classList.remove("is-valid");
    name_val = false;
  }
});

email.addEventListener("blur", ()=>{
  // console.log(email.value);
  let re = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.(com|in)$/;   //regex for email
  let str = email.value;
      if(re.test(str)){
    console.log("matched 1");
    email.classList.add("is-valid");
    email.classList.remove("is-invalid");
    email_val = true;
  }else{
    console.log("not matched 1");
    email.classList.add("is-invalid");
    email.classList.remove("is-valid");
    email_val = false;
  }

});

contact.addEventListener("blur", ()=>{
  // console.log(contact.value);
  let re = /^[0-9]{3}-[0-9]{4}-[0-9]{3}$/;   //rehex for contact number
  let str = contact.value;
  // console.log(str);
    if(re.test(str)){
    console.log("matched 1");
    contact.classList.add("is-valid");
    con_val = true;
    contact.classList.remove("is-invalid");
  }else{
    console.log("not matched 1");
    contact.classList.add("is-invalid");
    contact.classList.remove("is-valid");
    con_val = false;
  }
});

function myfunc(e){
  // console.log(e.target.value);
  if(20 - address.value.length < 0){       //if the address length passes beyond the provided capacity we consider it invalid
    address.classList.add("is-invalid");
    address.classList.remove("is-valid");
    add_val = false;
  }else{
      limit.innerHTML = 20 - address.value.length;
      address.classList.add("is-valid");
     address.classList.remove("is-invalid");
     add_val = true;
  }

}
address.addEventListener("input",myfunc);

function submit(e){
    e.preventDefault();   //preventing the default behaviour of the form
    if(add_val && con_val && email_val && name_val){   //checking if all the fields are valid then only submit the perform
      name.value = "";
      address.value = "";
      email.value = "";
      contact.value = "";
      document.querySelector(".a").classList.add("show");
      document.querySelector(".b").classList.remove("show");
    }else{
      console.log(add_val , con_val , email_val ,name_val );
      document.querySelector(".b").classList.add("show");
      document.querySelector(".a").classList.remove("show");
    }
}

btn.addEventListener("click", submit);




