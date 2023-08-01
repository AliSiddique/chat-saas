import asyncHandler from 'express-async-handler';
import User from '../../models/User/UserModels';
import { stripe } from '../../lib/stripe';


const CreateCheckout = asyncHandler(async (req: any, res: any) => {
 
  const { SubscriptionId } = req.body;
  const YOUR_DOMAIN = 'http://localhost:3000';
  // const user = await User.findById(req.user._id);

  if (true) {
    const params:any = {
      payment_method_types: ["card"],
      mode: "subscription",
      line_items: [
        {
          quantity: 1,
          price: "price_1NSi55Iu9v54yQAFf7PJ4IPc",
        },
      ],
      success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
    };

    try {
    
      const checkoutSession = await stripe.checkout.sessions.create(params);
      console.log(checkoutSession)

      // Handle the checkoutSession response as needed
      // For example, you can send the checkoutSession ID to the frontend
      res.json({ sessionId: checkoutSession.url });
    } catch (error) {
      // Handle any errors that occurred during the API call
      console.log(error);
      res.status(500).json({ error: 'An error occurred while creating the checkout session.' });
    }
  } else {
    // Handle the case where the user is not found
    res.status(404).json({ error: 'User not found.' });
  }
});


  // Partial of ./pages/api/webhooks/index.ts
// ...
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

// Stripe requires the raw body to construct the event.
export const config = {
  api: {
    bodyParser: false,
  },
}

const Webhooks = async (req:any, res:any) => {
      let event = req.body;
      // Replace this endpoint secret with your endpoint's unique secret
      // If you are testing with the CLI, find the secret by running 'stripe listen'
      // If you are using an endpoint defined with the API or dashboard, look in your webhook settings
      // at https://dashboard.stripe.com/webhooks
      const endpointSecret = 'whsec_12345';
      // Only verify the event if you have an endpoint secret defined.
      // Otherwise use the basic event deserialized with JSON.parse
      if (endpointSecret) {
        // Get the signature sent by Stripe
        const signature = req.headers['stripe-signature'];
        try {
        //   event = Stripe.webhooks.constructEvent(
        //     request.body,
        //     signature,
        //     endpointSecret
        //   ) 
        } catch (err:any) {
          console.log(`⚠️  Webhook signature verification failed.`, err.message);
          return res.sendStatus(400);
        }
      }
      let subscription;
      let status;
      // Handle the event
      switch (event.type) {
        case 'customer.subscription.trial_will_end':
          subscription = event.data.object;
          status = subscription.status;
          console.log(`Subscription status is ${status}.`);
          // Then define and call a method to handle the subscription trial ending.
          // handleSubscriptionTrialEnding(subscription);
          break;
        case 'customer.subscription.deleted':
          subscription = event.data.object;
          status = subscription.status;
          console.log(`Subscription status is ${status}.`);
          // Then define and call a method to handle the subscription deleted.
          // handleSubscriptionDeleted(subscriptionDeleted);
          break;
        case 'customer.subscription.created':
          subscription = event.data.object;
          status = subscription.status;
          console.log(`Subscription status is ${status}.`);
          // Then define and call a method to handle the subscription created.
          // handleSubscriptionCreated(subscription);
          break;
        case 'customer.subscription.updated':
          subscription = event.data.object;
          status = subscription.status;
          console.log(`Subscription status is ${status}.`);
          // Then define and call a method to handle the subscription update.
          // handleSubscriptionUpdated(subscription);
          break;
        default:
          // Unexpected event type
          console.log(`Unhandled event type ${event.type}.`);
      }
      // Return a 200 response to acknowledge receipt of the event
    }
  

export { CreateCheckout,Webhooks };