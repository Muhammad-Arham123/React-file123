import react from 'react' 
import './ContactUs.css'
export default function ContactUs() {

    return (
        <>
            <div className="container" >
                <form action="">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="" id="name" className='form-control' />
                    <br />
                    <label htmlFor="email">Email</label>
                    <input type="text" name="" id="email" className='form-control' />
                 <br />
                 <textarea name="" id="" cols="80" rows="10" placeholder='Enter Feedback'></textarea>
                 <br />
                    <button className='btn btn-primary' type='button'>
                        Send Feedback
                    </button>


                </form>
            </div>
        </>
    )
}