import { Link } from "react-router-dom"

export default function HomeButton({ buttonName }) {
    return (
        <Link to="/home">
        {buttonName ?? 'Home'}
        </Link>
    )
}