import { Link, useNavigate } from 'react-router-dom'
import React, { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { motion } from "framer-motion"
import { CartContext } from '../context/CartContext'
import { TProduct } from '../utils/Types'
import ParseToDecimal from "../utils/ParseToDecimal"
import PopupCheckout from '../components/PopupCheckout'
import { IMG_BASE_URL } from '../utils/env'

export default function Checkout() {

    //cart
    const { cart: cart } = useContext(CartContext)

    //total
    const total = cart.reduce((sum: number, i) => sum + (i.price * i.quantity), 0)

    //back to previous page
    const navigate = useNavigate()
    const goBack: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault()
        navigate(-1)
    }

    /* form */

    //schema validation
    const schema = yup
        .object({
            name: yup.string().required(),
            email: yup.string().email().required(),
            phone: yup.string().min(8).required(),
            address: yup.string().min(8).required(),
            zipcode: yup.number().transform((value) => Number.isNaN(value) ? null : value)
                .min(2, "Zip code must be greater than or equal to 2 numbers length").positive().integer().required("Zip code is a required field"),
            city: yup.string().required(),
            country: yup.string().required(),
            emoneynb: yup.number().transform((value) => Number.isNaN(value) ? null : value).when('$radioSelected', {
                is: "e-Money",
                then: (schema) => schema.required("E-money number is a required field").min(3, "E-money number must be greater than or equal to 3 numbers length"),
                otherwise: (schema) => schema.notRequired(),
            }),
            emoneypin: yup.number().transform((value) => Number.isNaN(value) ? null : value).when('$radioSelected', {
                is: "e-Money",
                then: (schema) => schema.required("E-money pin is a required field").min(4, "E-money pin must be equal to 4 numbers length"),
                otherwise: (schema) => schema.notRequired(),
            })
        })
        .required()

    // check if radio button is selected
    const [radioSelected, setRadioSelected] = useState("cash")

    const handleRadioChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setRadioSelected(e.target.value)
    }

    //check if cart is empty
    const [isCartEmptyAlert, setIsCartEmptyAlert] = useState(false)

    const handleEmptyError: any = () => {
        setIsCartEmptyAlert(true)
    }

    //react hook form
    const { register, handleSubmit, formState, formState: { errors } } = useForm({
        mode: "onTouched",
        resolver: yupResolver(schema),
        context: {
            radioSelected
        }
    })

    const { isSubmitting, isSubmitSuccessful } = formState

    const onSubmit = (data: any) => {
        console.log("data", data)
    }

    //checkout popup
    const [isPopupVisible, setPopupVisible] = useState(true)
    function closePopup() {
        setPopupVisible(false)
    }

    return (
        <motion.main
            className="checkout"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="max-content">
                <button onClick={goBack} className="back-link">Go back</button>
                <div className="section-container">
                    <section className="checkout-section">
                        <h1 className="checkout-main-title">Checkout</h1>
                        <form className="form" name="myform" onSubmit={handleSubmit(onSubmit)}>
                            <h2 className="checkout-second-title">Billing details</h2>
                            <div className="form-container">
                                <div className="form-item">
                                    <label className="form-label" htmlFor="name">Name</label>
                                    <input className="form-input" type="text" placeholder='Alexei Ward' {...register("name")} />
                                    {
                                        errors.name &&
                                        <span className="invalid-input">{errors.name?.message?.toString()}</span>
                                    }
                                </div>
                                <div className="form-item">
                                    <label className="form-label" htmlFor="email">Email Address</label>
                                    <input className="form-input" type="email" placeholder='alexei@mail.com' {...register("email")} />
                                    {
                                        errors.email &&
                                        <span className="invalid-input">{errors.email?.message?.toString()}</span>
                                    }
                                </div>
                                <div className="form-item">
                                    <label className="form-label" htmlFor="phone">Phone Number</label>
                                    <input className="form-input" type="number" placeholder='+1 202-555-0136' {...register("phone")} />
                                    {
                                        errors.phone &&
                                        <span className="invalid-input">{errors.phone?.message?.toString()}</span>
                                    }
                                </div>
                            </div>
                            <h2 className="checkout-second-title">Shipping info</h2>
                            <div className="form-container">
                                <div className="form-item full">
                                    <label className="form-label" htmlFor="address">Address</label>
                                    <input className="form-input" type="text" placeholder='1137 Williams Avenue' {...register("address")} />
                                    {
                                        errors.address &&
                                        <span className="invalid-input">{errors.address?.message?.toString()}</span>
                                    }
                                </div>
                                <div className="form-item">
                                    <label className="form-label" htmlFor="zipcode">ZIP Code</label>
                                    <input className="form-input" type="number" placeholder='10001' {...register("zipcode")} />
                                    {
                                        errors.zipcode &&
                                        <span className="invalid-input">{errors.zipcode?.message?.toString()}</span>
                                    }
                                </div>
                                <div className="form-item">
                                    <label className="form-label" htmlFor="city">City</label>
                                    <input className="form-input" type="text" placeholder='New York' {...register("city")} />
                                    {
                                        errors.city &&
                                        <span className="invalid-input">{errors.city?.message?.toString()}</span>
                                    }
                                </div>
                                <div className="form-item">
                                    <label className="form-label" htmlFor="country">Country</label>
                                    <input className="form-input" type="text" placeholder='United States' {...register("country")} />
                                    {
                                        errors.country &&
                                        <span className="invalid-input">{errors.country?.message?.toString()}</span>
                                    }
                                </div>
                            </div>
                            <h2 className="checkout-second-title">Payement Details</h2>
                            <div className="form-container">
                                <span className="form-label">Payment Method</span>
                                <div className={radioSelected === 'cash' ? 'form-item-radio checked' : 'form-item-radio'}>
                                    <label className="form-label form-label-container" htmlFor="emoney">Cash on Delivery
                                        <input type="radio" name="money" value="cash" defaultChecked onChange={handleRadioChange} />
                                        <span className="form-label-container-radio-checkmark"></span>
                                    </label>
                                </div>
                                <div className={radioSelected === 'e-Money' ? 'form-item-radio checked' : 'form-item-radio'} >
                                    <label className="form-label form-label-container" htmlFor="emoney">e-Money
                                        <input type="radio" name="money" value="e-Money" onChange={handleRadioChange} />
                                        <span className="form-label-container-radio-checkmark"></span>
                                    </label>
                                </div>
                                {
                                    radioSelected === "e-Money" &&
                                    <>
                                        <div className="form-item">
                                            <label className="form-label" htmlFor="emoneynb">e-Money Number</label>
                                            <input className="form-input" type="text" placeholder='238521993' {...register("emoneynb")} />
                                            {
                                                errors.emoneynb &&
                                                <span className="invalid-input">{errors.emoneynb?.message?.toString()}</span>
                                            }
                                        </div>
                                        <div className="form-item">
                                            <label className="form-label" htmlFor="emoneypin">e-Money PIN</label>
                                            <input className="form-input" type="text" placeholder='6891' {...register("emoneypin")} />
                                            {
                                                errors.emoneypin &&
                                                <span className="invalid-input">{errors.emoneypin?.message?.toString()}</span>
                                            }
                                        </div>
                                    </>
                                }
                            </div>
                        </form>
                    </section>
                    <section className="summary-section">
                        <h2 className="summary-second-title">Summary</h2>
                        {cart.length > 0 ?
                            <ul className="cart-box-content-list">
                                {
                                    React.Children.toArray(cart.map((product: TProduct) => {
                                        return (
                                            <li className="cart-box-content-list-item">
                                                <img src={IMG_BASE_URL + product.image.desktop} className="cart-box-content-list-item-image" />
                                                <div className="cart-box-content-list-item-content">
                                                    <span className="cart-box-content-list-item-name">{product.name}</span>
                                                    <span className="cart-box-content-list-item-price">$ {ParseToDecimal(product.price)}</span>
                                                </div>
                                                <div className="cart-box-content-list-item-quantity">
                                                    x{product.quantity}
                                                </div>
                                            </li>
                                        )
                                    }))
                                }
                            </ul>
                            : isCartEmptyAlert ?
                                <span className="empty-alert">The cart is empty, please add at least one product</span>
                                : <span>Empty</span>
                        }
                        <div className="summary-bottom">
                            <span className="summary-bottom-text">
                                TOTAL
                                <span className="summary-bottom-price">$ {ParseToDecimal(total)}</span>
                            </span>
                            <span className="summary-bottom-text">
                                SHIPPING
                                <span className="summary-bottom-price">
                                    $ 50
                                </span>
                            </span>
                            <span className="summary-bottom-text grand-total">
                                GRAND TOTAL
                                <span className="summary-bottom-price">
                                    $ {ParseToDecimal(total + 50)}
                                </span>
                            </span>
                        </div>
                        <input type="submit" form="myform" value="Continue & pay" className="button-primary" disabled={isSubmitting} onClick={cart.length > 0 ? handleSubmit(onSubmit) : handleEmptyError} />
                    </section>
                    {
                        isSubmitSuccessful &&
                        <PopupCheckout show={isPopupVisible} onClose={closePopup} />
                    }
                </div>
            </div>
        </motion.main>
    )
}