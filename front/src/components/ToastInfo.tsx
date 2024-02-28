import { ReactComponent as CheckedLogo } from '../assets/icons/checked.svg'

//todo onclose type
type TProps = {
    show: boolean
}

export default function ToastInfo(props: TProps) {
    return (
        <div className={`toast-container ${props.show ? 'slide-top' : 'hide'}`}>
            <CheckedLogo />
            <span className="small-title">Product is added to your cart</span>
        </div>
    )
}