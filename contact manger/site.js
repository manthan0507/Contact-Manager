if (localStorage.getItem("contacts") == undefined) {
    localStorage.setItem("contacts", "[]");
}
let result = "";
let contacts = JSON.parse(localStorage.getItem("contacts"));
for (i = 0; i < contacts.length; i++) {
    result += `
    <div class="contact_items">
        <i class="fas fa-user fa-2x color_primary"></i>
                    <div class="contact_info color_primary">
                        <h4>${contacts[i].name}</h4>
                        <p>${contacts[i].phone}</p>
                        </div>
                        <button onclick="display('${contacts[i].id}')" class="button_script"> <i class="fa fa-close "></i> </button>
               
           
    </div>
   `

}

document.getElementById("contact").innerHTML = result;

function submitcontact(e) {
    e.preventDefault();
    var contact_name = document.getElementById("name").value;

    var contact_no = document.getElementById("no").value;
    if (contact_no != "" && contact_name != "") {
        let contacts = JSON.parse(localStorage.getItem("contacts"));
        let contact = {
            id: Math.random().toString(36).substr(2, 9),
            name: contact_name,
            phone: contact_no
        }

        contacts.unshift(contact);
        localStorage.setItem("contacts", JSON.stringify(contacts));

        document.getElementById("name").value = "";
        document.getElementById("no").value = "";

    } else if (contact_name == "" && contact_no == "") {
        alert("Please Enter Name And Phone Number.. ");
    } else if (contact_no == "") {
        alert("Please Enter Phone Number..");
    } else if (contact_name == "") {
        alert("Please Enter Name..");
    } else {
        location.reload();
    }
}


function deleteContact(id) {
    console.log(id);
}

function display(id) {
    let contacts = JSON.parse(localStorage.getItem("contacts"));
    contacts = contacts.filter(function(contact) {
        return contact.id != id;
    })
    localStorage.setItem("contacts", JSON.stringify(contacts));
    location.reload();
    console.log(contacts);
}