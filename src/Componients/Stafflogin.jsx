import React from 'react'
import {Stafflog} from '../Styled/Stafflogin'
import { GrSecure } from "react-icons/gr";
import { FaArrowRight } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdOutlineAccessTime } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaRegFolderOpen } from "react-icons/fa";









const Stafflogin = () => {

        const gotoapplyloan = () => {
    window.location.href = '/apply-loan'
  }

  return (
    <Stafflog>
        <div className="main-stff">
            <div className='firstdiv'>
                <span><GrSecure/></span>
                <p>Staff Portal</p>
                <span className='Secure'>Secure access for team members to manage applications and client accounts</span>
                <form action="">
                   <div><input type="text" name="" id="" placeholder='staff@email.com'/></div>
                   <div><input type="text" name="" id="" placeholder='password'/></div>
                   <div><button type='submin' >Staff login <FaArrowRight/></button></div>
                   <span>Forgot password?</span>
                </form>

            </div>

            <div className='secondiv'>
                <span className='myicon'><FaRegFolderOpen/></span>
                <p>Ready to Apply?</p>
                <span>Start your loan application now. Simple process, quick approval, funds in 24 hours</span>
                    <button onClick={gotoapplyloan}>Start Application <FaArrowRight/></button>

                    <div className='icons'>
                        <span><RiSecurePaymentLine/> Secure</span>
                        <span><MdOutlineAccessTime/> Fast</span>
                        <span><VscWorkspaceTrusted/> Trusted</span>
                    </div>
            </div>

        </div>
    </Stafflog>
  )
}

export default Stafflogin