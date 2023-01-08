/* Library import */
import {useState,useEffect} from 'react';
import axios from '../axios.js';
import Cookies from 'js-cookie';
import {useNavigate} from 'react-router-dom';

/* Dependency import */
import './css/AdminPanel.css';

/* Component import */

/* Asset imports */

function AdminPanel(){

    const navigate = useNavigate();
    const token = Cookies.get('token');
    const [userData, setuserData] = useState({});

    useEffect(() => {
        const getUserData = async () => {
            await axios.get('/getUserData',{
                headers:{
                    'token':token,
                }
            }).then((response) => {
                if(!response.data.success){
                    Cookies.remove('token');
                    navigate('/');
                }
                setuserData(response.data)
                if(!response.data.admin){
                    navigate('/booking')
                }
            }).catch((error) => {
                Cookies.remove('token');
                navigate('/');
            })
        }
        getUserData();
    }, [token])
    

    return(
        <div className='Booking'>
            <h1>Admin Panel</h1>
            {(userData.admin)?'true':'false'}
        </div>
    );
}

export default AdminPanel;