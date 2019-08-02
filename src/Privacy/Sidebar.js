import React, { Component } from 'react'
import {  Button } from 'react-bootstrap';
import './side.css'


class Sidebar extends Component {
    render() {
        return (
            <div>

                <div style={{backgroundColor:"white", padding:"30px", marginTop: "20px"}}>

                    <h1>Subscribe Now</h1>
                    <br/>
                    <p>Subscribe to our mailing list to receive updates from the blog</p>

                    <form action="#" method="POST">
                        <label ><strong>Email Address</strong></label>
                        <input type="email" name="email" className="form-control" placeholder="Your@email.com"  />
                        <br></br>
                        <Button className="btn btn-primary" style={{backgroundColor: "orange", width: "120px"}}>Subscribe</Button>
                    </form>

                </div>

                    <div  style={{backgroundColor:"white", padding:"30px", marginTop: "20px"}}>
                        <h2>ABOUT ME</h2>
                        <img src="https://i.ibb.co/WzYTTSf/66996194-394482144528868-896954686559485952-n.jpg" alt="66996194-394482144528868-896954686559485952-n" style={{ width: "300px"}} />
                        <br></br>
                        <h5 style={{textAlign: "justify"}}>Hey there, my name is Vitor Freitas. I'm a passionate software developer and researcher from Brazil, currently living in Finland. I write about Python, Django and Web Development on a weekly basis.</h5>
                        <a href="# " style={{color: "orange", fontSize:"19px"}}>Read More. </a>
                    </div>

                    <div style={{backgroundColor:"white", padding:"30px", marginTop: "20px"}}>
                        {/* <!-- Add font awesome icons --> */}
                        <a href="# " className="fa fa-facebook text-center text-white" style={{textDecoration:"none",backgroundColor:"orange",padding:"12px",borderRadius:"50%", width:"45px", fontSize:"22px",marginRight:"7px"}} ></a>
                        <a href="# " className="fa fa-twitter text-center text-white"  style={{textDecoration:"none",backgroundColor:"orange",padding:"12px",borderRadius:"50%", width:"45px", fontSize:"22px",marginRight:"7px"}}></a>
                        <a href="# " className="fa fa-github text-center text-white"  style={{textDecoration:"none",backgroundColor:"orange",padding:"12px",borderRadius:"50%", width:"45px", fontSize:"22px",marginRight:"7px"}}></a>
                        <a href="# " className="fa fa-linkedin text-center text-white"  style={{textDecoration:"none",backgroundColor:"orange",padding:"12px",borderRadius:"50%", width:"45px", fontSize:"22px",marginRight:"7px"}}></a>
                        <a href="# " className="fa fa-youtube text-center text-white"  style={{textDecoration:"none",backgroundColor:"orange",padding:"12px",borderRadius:"50%", width:"45px", fontSize:"24px"}}></a>
                    </div>
            </div>
        )
    }
}

export default Sidebar;
