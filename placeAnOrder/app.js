function cookAndDeliverFood(callback) {
    var offset = Math.random() * 5;
    // console.log('Offset: ', offset);
    setTimeout(callback, 5000 + offset);
}

function placeAnOrder(orderNumber) {
    console.log('Customer order: ', orderNumber);

    cookAndDeliverFood(function () {
        console.log('Delivered food order: ', orderNumber);
    })
}

// Simulate user web request
placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
placeAnOrder(6);
placeAnOrder(7);
placeAnOrder(8);
placeAnOrder(9);
placeAnOrder(10);
