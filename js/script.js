/*fetch('http://localhost:3000/')
    .then(res => res.json())
    .then(db => console.log(db)) */

let n

function fazGet(url) {
    let request = new XMLHttpRequest;
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

function main() {
    info = fazGet("http://localhost:3000/random/100");
    data = JSON.parse(info);
}

main();

function maping() {
    
    if (document.querySelector('.copy')) {
        data.map((item, index)=> {
            document.querySelector('.copy').remove();
        });
    }

    let chkbox = document.getElementsByName("chkbox");
    let is_chkd = false;

    for(let i=0; i<chkbox.length; i++) {
        is_chkd = chkbox[i].checked;
        if(is_chkd)
        break;
    } 

    if(is_chkd == false) {
        let b = document.querySelectorAll('.copy')
        b.forEach((item) => {
            item.classList.add('none');
        });
    } 

    data.map((item, index)=> {
        let clone_square = document.querySelector('.content .square').cloneNode(true);

        clone_square.classList.add('copy');

        if(is_chkd) {
            let b = document.querySelectorAll('.copy');
            b.forEach((item) => {
                item.classList.remove('none');
            });
        }

        let abv = item.abv != null ? item.abv : `<span id='redspan'>Não Informado</span>`;
        let address = item.address != null ? item.address : `<span id='redspan'>Não Informado</span>`;
        let category = item.category != null ? item.category : `<span id='redspan'>Não Informado</span>`;
        let city = item.city != null ? item.city : `<span id='redspan'>Não Informado</span>`;
        let coordinates = item.coordinates != null ? item.coordinates : `<span id='redspan'>Não Informado</span>`;
        let country = item.country != null ? item.country : `<span id='redspan'>Não Informado</span>`;
        let description = item.description != null ? item.description : `<span id='redspan'>Não Informado</span>`;
        let ibu = item.ibu != null ? item.ibu : `<span id='redspan'>Não Informado</span>`;
        let name = item.name != null ? item.name : `<span id='redspan'>Não Informado</span>`;
        let state = item.state != null ? item.state : `<span id='redspan'>Não Informado</span>`;
        let website = item.website != null ? item.website : `<span id='redspan'>Não Informado</span>`;

 
        if (document.getElementById('chk_abv').checked) {
            clone_square.querySelector('.square-abv').innerHTML = `<span id='blackspan'>Abv:</span> ${abv} </br>`;
        }
        if (document.getElementById('chk_address').checked) {
            clone_square.querySelector('.square-address').innerHTML = `<span id='blackspan'>Address:</span> ${address} </br>`;
        }
        if (document.getElementById('chk_category').checked) {
            clone_square.querySelector('.square-category').innerHTML = `<span id='blackspan'>Category:</span> ${category} </br>`;
        }
        if (document.getElementById('chk_city').checked) {
            clone_square.querySelector('.square-city').innerHTML = `<span id='blackspan'>City:</span> ${city} </br>`;
        }
        if (document.getElementById('chk_coordinates').checked) {
            clone_square.querySelector('.square-coordinates').innerHTML = `<span id='blackspan'>Coordinates:</span> ${coordinates} </br>`;
        }
        if (document.getElementById('chk_country').checked) {
            clone_square.querySelector('.square-country').innerHTML = `<span id='blackspan'>Country:</span> ${country} </br>`;
        }
        if (document.getElementById('chk_description').checked) {
            clone_square.querySelector('.square-description').innerHTML = `<span id='blackspan'>Description:</span> ${description} </br>`;
        }
        if (document.getElementById('chk_ibu').checked) {
            clone_square.querySelector('.square-ibu').innerHTML = `<span id='blackspan'>Ibu:</span> ${ibu} </br>`;
        }
        if (document.getElementById('chk_name').checked) {
            clone_square.querySelector('.square-name').innerHTML = `<span id='blackspan'>Name:</span> ${name} </br>`;
        }
        if (document.getElementById('chk_state').checked) {
            clone_square.querySelector('.square-state').innerHTML = `<span id='blackspan'>State:</span> ${state} </br>`;
        }   
        if (document.getElementById('chk_website').checked) {
            clone_square.querySelector('.square-website').innerHTML = `<span id='blackspan'>Website:</span> ${website} </br>`;
        }
        document.querySelector('.content').append(clone_square);
    })
}


/*
function chk_verify() {
    let chkbox = document.getElementsByName("chkbox")
    let is_chkd = false

    for(let i=0; i<chkbox.length; i++) {
        is_chkd = chkbox[i].checked
        if(is_chkd) break
    }

    if(is_chkd == false) {
        let b = document.querySelectorAll('.copy')
        b.forEach((item) => {
            item.classList.add('none')
        });
    }
    console.log(is_chkd)
}



        clone_square.classList.remove('none')
        if (document.getElementById('chk_abv').checked) {
            clone_square.querySelector('.square-abv').innerHTML = `abv: ${item.abv}`
        }
        if (document.getElementById('chk_address').checked) {
            clone_square.querySelector('.square-address').innerHTML = `address: ${item.address}`
        }
        if (document.getElementById('chk_category').checked) {
            clone_square.querySelector('.square-category').innerHTML = `category: ${item.category}`
        }
        if (document.getElementById('chk_city').checked) {
            clone_square.querySelector('.square-city').innerHTML = `city: ${item.city}`
        }
        if (document.getElementById('chk_coordinates').checked) {
            clone_square.querySelector('.square-coordinates').innerHTML = `coordinates: ${item.coordinates}`
        }
        if (document.getElementById('chk_country').checked) {
            clone_square.querySelector('.square-country').innerHTML = `country: ${item.country}`
        }
        if (document.getElementById('chk_description').checked) {
            clone_square.querySelector('.square-description').innerHTML = `description: ${item.description}`
        }
        if (document.getElementById('chk_ibu').checked) {
            clone_square.querySelector('.square-ibu').innerHTML = `ibu: ${item.ibu}`
        }
        if (document.getElementById('chk_name').checked) {
            clone_square.querySelector('.square-name').innerHTML = `name: ${item.name}`
        }
        if (document.getElementById('chk_state').checked) {
            clone_square.querySelector('.square-state').innerHTML = `state: ${item.state}`
        }   
        if (document.getElementById('chk_website').checked) {
            clone_square.querySelector('.square-website').innerHTML = `website: ${item.website}`
        }  
        
        
        var allischecked = (function(){
         var o = document.getElementById("Form2").getElementsByTagName("input");
         for(var i=0,l=o.length;i<l;i++){
            o[i].type === "checkbox" && o[i].name === "us" && o[i].checked || return false;
         }
            return true;
        })();
                
        
        
        */ 