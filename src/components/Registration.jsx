import { useState } from 'react';
import { useParams } from "react-router-dom";
import { NavLink, Outlet, useLocation, useSearchParams } from 'react-router-dom';

function Registration() {
    const [isSent, setIsSent] = useState(false)

    return(
       <form>
        <h1>Registration?</h1>
        <textarea 
        placeholder='Profile'
        />
        <button type="submit">Send</button>
       </form>
     
    )
}
export default Registration;