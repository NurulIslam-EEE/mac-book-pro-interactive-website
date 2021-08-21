//--------------- for memory------------
const memoryEight = document.getElementById('memory-eight');
const memorySixteen = document.getElementById('memory-sixteen');
const extraMemoryCost = document.getElementById('extra-memory');
//----------------for storage-----------
const storageTwoFiftySix = document.getElementById('storage-two-fifty-six');
const storageFiveTwelve = document.getElementById('storage-five-twelve');
const storageOneTb = document.getElementById('storage-one-tb');
const extraStorageCost = document.getElementById('extra-storage-cost');
//----------for delivery------------
const freeDelivery = document.getElementById('free-delivery');
const paidDelivery = document.getElementById('paid-delivery');
const deliveryCharge = document.getElementById('delivery-charge');

const bestPrice = document.getElementById('best-price');

const totalPrice = document.getElementById('total-price');
const totalAfterPromo = document.getElementById('final-total');

const promoBtn = document.getElementById('promo-btn');

//-----memory,storage,delivery cost calculation

function extraCost(item) {
    if (item == 8) {
        extraMemoryCost.innerText = 0;
        totalCost();
    } else if (item == 16) {
        extraMemoryCost.innerText = 180;
        totalCost();
    }
    if (item == 256) {
        extraStorageCost.innerText = 0;
        totalCost();
    } else if (item == 512) {
        extraStorageCost.innerText = 100;
        totalCost();
    } else if (item == '1tb') {
        extraStorageCost.innerText = 180;
        totalCost();
    }
    if (item == 'free') {
        deliveryCharge.innerText = 0;
        totalCost();
    } else if (item == 'paid') {
        deliveryCharge.innerText = 20;
        totalCost();
    }
}

// ----------memory
memoryEight.addEventListener('click', function () {
    extraCost(8);
});

memorySixteen.addEventListener('click', function () {
    extraCost(16);
});
//-----------storage
storageTwoFiftySix.addEventListener('click', function () {
    extraCost(256);
});

storageFiveTwelve.addEventListener('click', function () {
    extraCost(512);
});
storageOneTb.addEventListener('click', function () {
    extraCost('1tb');
});
//------------delivery Charge calculation------

freeDelivery.addEventListener('click', function () {
    extraCost('free');
})
paidDelivery.addEventListener('click', function () {
    extraCost('paid');
})



function totalCost() {
    const memoryCost = parseFloat(extraMemoryCost.innerText);
    const storageCost = parseFloat(extraStorageCost.innerText);
    const deliveryCost = parseFloat(deliveryCharge.innerText);
    const bestPriceValue = parseFloat(bestPrice.innerText);
    const total = memoryCost + storageCost + deliveryCost + bestPriceValue;
    totalPrice.innerText = total;
    totalAfterPromo.innerText = total;
    return total;
}

//----------promo code Discount--------------

promoBtn.addEventListener('click', function () {
    totalWithPromoCode();
});

function totalWithPromoCode() {
    // x = x + 1;
    
    const promoInput = document.getElementById('promo-input').value;
    if (promoInput == 'stevekaku' ) {
        
        totalAfterPromo.innerText= parseFloat(totalAfterPromo.innerText) * 0.80;
         
        document.getElementById('promo-input').value='';
       
    } else {
        totalAfterPromo.innerText = parseFloat(totalAfterPromo.innerText);
        
    }
}
