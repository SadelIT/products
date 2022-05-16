class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;

    }
}

class UI {  
    addProduct(product){
        const productList = document.getElementById('product-list')
        const element = document.createElement('div')
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong> Name</strong>: ${product.name}
                    <strong> Price</strong>: ${product.price}
                    <strong> Year</strong>: ${product.year}
                    <a href="#" class="btn btn-danger" name="delete">DELETE</a>

                </div>

            </div>
        `;
        productList.appendChild(element)
        this.resetForm();
    }

    resetForm(){
        document.getElementById('product-form').reset();
    }

    deleteProduct(element){
        if (element.name === 'delete'){
            element.parentElement.parentElement.parentElement.remove()
            this.showMessage('Product deleted successfully', 'info')
        }





    }
    showMessage(message, cssClass){
        const div = document.createElement('div')
        div.className = `alert alert-${cssClass}`
        div.appendChild(document.createTextNode(message))
        //show in DOM
        const container = document.querySelector('.container')
        document.querySelector('#app')
        container.insertBefore(div, app);
        setTimeout(function(){
            document.querySelector('.alert').remove()

        },3000)

    }
}

//events

document.getElementById('product-form').addEventListener('submit',function(e){
     const name =  document.getElementById('name').value;
     const price =  document.getElementById('price').value;
     const year =  document.getElementById('year').value;

     const product = new Product(name,price,year);
     const ui = new UI();
     ui.resetForm();
     if(name === "" || price===''|| year==="")
      return  ui.showMessage('complete fields please', 'info')
      ui.addProduct(product)

     ui.showMessage('Product Added Successfully', 'info')


     e.preventDefault();
})

document.getElementById('product-list')
    .addEventListener('click', function(e){
        const ui = new UI();
        ui.deleteProduct(e.target);





})