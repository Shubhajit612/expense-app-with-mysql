const myForm = document.getElementById('my-form');
const sellingPrice = document.getElementById('num');
const productName = document.getElementById('name');
const txt = document.getElementById('price2');


myForm.addEventListener('submit',onSubmit);

let total = 0;

async function onSubmit(e){
    e.preventDefault();

    const price = Number(sellingPrice.value);
    const product = productName.value;
    total = total + price;
    txt.value = total;
    const obj = {
        price,
        product
    }

    try{
    const res = await axios.post("http://localhost:3000/product/add-product",obj)
    // .then(res => {
        // console.log(res)
        // total += obj.price;
        showProducts(res.data.newProductDetails);

         // clear input fields after addition
    sellingPrice.value = '';
    productName.value = '';

    // })
    }
    catch(err) {
        console.error(err); 
    }

   
}

window.addEventListener('DOMContentLoaded',async ()=>{
    const res = await axios.get("http://localhost:3000/product/get-product")
    // .then(res => {
        // console.log(res)

        try {       
        for(var i = 0;i<res.data.allProducts.length;i++){
            //showProducts();
            showProducts(res.data.allProducts[i]);
            total = total + Number(res.data.allProducts[i].price);
        }
        txt.value = total;
    // })
        
    console.log(res.data.allProducts);
        }
    catch(err) {
        console.error(err); 
    }


    
})

async function showProducts(ob){
    const parentEl = document.getElementById('products');
    const childEl = document.createElement('li');

    

    const deleteEl = document.createElement('input');
    deleteEl.type = 'button';
    deleteEl.value = 'Delete Product';

    // let total = 0;

      deleteEl.onclick = async () =>{
        try{
         const res = await axios.delete(`http://localhost:3000/product/delete-product/${ob.id}`)
        // .then(res => {
            console.log(res);
          
            total -= ob.price;
            
            parentEl.removeChild(childEl);

            txt.value = total;

        // })
      }catch(err) {
            console.error(err); 
        }

    }

        childEl.textContent = ob.price + " - "+ ob.product+" ";
        childEl.appendChild(deleteEl);

        parentEl.appendChild(childEl);

    }
    


