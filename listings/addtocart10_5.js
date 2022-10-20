const mysql = require('mysql');

class AddToCart {

    calculate_cart_total() {
        //placeholder
        return 0;
    }

    addToCart1(item) {
        //Add item to cart
        this.cart.add(item);

        //Store item
        var con = mysql.createConnection({
            host: "localhost",
            user: "yourusername",
            password: "yourpassword"
        });

        con.connect(function(err) {
            if (err) throw err;
            con.query("INSERT INTO cart (name, price) values (item.name, item.price)", function (err, result) {
                if (err) throw err;
                //Compute cart total
                return this.calculate_cart_total();
              });
        });
    }

    addToCart2(item) {
        //Add item to cart
        this.cart.add(item);

        //Store item
        this.store.store_item(item);

        //Compute cart total
        return this.calculate_cart_total();
    }

    addToCart3(item, listener) {
        //Add item to cart
        this.cart.add(item);
        
        //Listener executes method on callback
        listener.on_item_added(item);
    }
}
