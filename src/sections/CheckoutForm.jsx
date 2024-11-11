const CheckoutForm = () => {
    return (
        <section className="c-space my-40" id='payment'>
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/cockpit.jpg" alt="cockpit-bg" className="absolute inset-0 min-h-screen" />

                <div className="contact-container">
                    <h3 className="head-text">Payment</h3>
                    <p className="text-lg text-white-600 mt-3">
                        Intégration de Stripe
                    </p>

                    <section>
                        <div className="product">
                            <img
                                src="https://i.imgur.com/EHyR2nP.png"
                                alt="The cover of Stubborn Attachments"
                            />
                            <div className="description">
                                <h3>Stubborn Attachments</h3>
                                <h5>$20.00</h5>
                            </div>
                        </div>
                        <form action="/create-checkout-session" method="POST">
                            <button type="submit" className="bg-white">
                                Checkout
                            </button>
                        </form>
                    </section>
                </div>
            </div>

        </section>
    );
};

export default CheckoutForm;

