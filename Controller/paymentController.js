
const SSLCommerzPayment = require('sslcommerz-lts')
const is_live = false //true for live, false for sandbox
const stripe = require('stripe')('sk_test_51L1nmNCGpaTt0RU81oq26j6Ta7gwb9pGlOOwxjeXAQgefsXMvmRxFUopKE2St6GDbDpxjUug0KxRyqzL6oKarPcR00lqLjh70r')
//sslcommerz init
exports.sslPaymentGetWay = async (req , res, next) =>{
            const data = {
                total_amount: 555,
                currency: 'BDT',
                tran_id: 'REF123', // use unique tran_id for each api call
                success_url: 'https://fashion-ecommerce-92924.web.app/login',
                fail_url: 'http://localhost:5000/fail',
                cancel_url: 'http://localhost:5000/cancel',
                ipn_url: 'http://localhost:5000/ipn',
                shipping_method: 'Courier',
                product_name: 'Computer.',
                product_category: 'Electronic',
                product_profile: 'general',
                cus_name: 'Customer Name',
                cus_email: 'customer@example.com',
                cus_add1: 'Dhaka',
                cus_add2: 'Dhaka',
                cus_city: 'Dhaka',
                cus_state: 'Dhaka',
                cus_postcode: '1000',
                cus_country: 'Bangladesh',
                cus_phone: '01711111111',
                cus_fax: '01711111111',
                ship_name: 'Customer Name',
                ship_add1: 'Dhaka',
                ship_add2: 'Dhaka',
                ship_city: 'Dhaka',
                ship_state: 'Dhaka',
                ship_postcode: 1000,
                ship_country: 'Bangladesh',
            };
            const sslcz = new SSLCommerzPayment(process.env.SSL_STORE_ID, process.env.SSL_STORE_PASSWORD, is_live)
            sslcz.init(data).then(apiResponse => {
                // Redirect the user to payment gateway
                let GatewayPageURL = apiResponse.GatewayPageURL
                res.redirect(GatewayPageURL)
                console.log('Redirecting to: ', GatewayPageURL)
            });
       
}



exports.paymentGetWay = async (req, res, next) => {
    try{
      const service = req.body;
      const price = service.price;
      const amount = price * 100;
    
      // Create a PaymentIntent with the order amount and currency
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: "usd",
        automatic_payment_methods: {
          enabled: true,
        },
      });
    
      res.send({
        clientSecrets: paymentIntent.client_secret,
      });
    }
    catch(error){
      console.log(error)
    }
   
  };