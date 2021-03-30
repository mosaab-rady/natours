import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51IZxSzEiwG5Rwf109f9n7Dw6MM4Dccmj8E7lEQkCoQ6giY5FNhwc9HM2OqbX0oGNNCQpVDHrvNziq8kAGX3DSSm900em7N7g25'
);

export const bookTour = async tourId => {
  try {
    const session = await axios(
      `http://localhost:3000/api/v1/booking/checkout-session/${tourId}`
    );

    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    showAlert('error', err);
  }
};
