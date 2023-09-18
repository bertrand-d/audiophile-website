import { Link, useNavigate } from 'react-router-dom'

export default function Checkout() {

    //back to previous page
    const navigate = useNavigate();
    function goBack(e) {
        e.preventDefault()
        navigate(-1)
    }

    return (
        <main className="checkout">
            <div className="max-content">
                <Link onClick={goBack} className="back-link">Go back</Link>

                <div className="section-container">
                    <section className="checkout-section">
                        <h1 className="checkout-main-title">Checkout</h1>
                        <form id="myform" method="get" action="something.php">
                            <h2 className="checkout-second-title">Billing details</h2>
                            <div>
                                <label>Name</label>
                                <input type="text" name="name" />
                                <label>Name</label>
                                <input type="text" name="name" />
                                <label>Name</label>
                                <input type="text" name="name" />
                            </div>
                            <h2 className="checkout-second-title">Shipping info</h2>
                            <div>
                                <label>Name</label>
                                <input type="text" name="name" />
                                <label>Name</label>
                                <input type="text" name="name" />
                                <label>Name</label>
                                <input type="text" name="name" />
                            </div>
                            <h2 className="checkout-second-title">Shipping info</h2>
                            <div>
                                <label>Name</label>
                                <input type="text" name="name" />
                                <label>Name</label>
                                <input type="text" name="name" />
                                <label>Name</label>
                                <input type="text" name="name" />
                            </div>
                        </form>
                    </section>
                    <section className="summary-section">
                        <h2 className="summary-second-title">Summary</h2>
                        Panier
                        Total
                        <input type="submit" form="myform" value="Update" />
                    </section>
                </div>
            </div>
        </main>
    )
}