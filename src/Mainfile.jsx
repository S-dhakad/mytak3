import React, { useState } from "react";
import Data from "./Component/pages/Data.json"
import Userdatatable from './Component/pages/Userdatatable'
import Handleredit from './Component/pages/Handlereditdata'
import swal from 'sweetalert';
import Swal from 'sweetalert2'
export default function Mainfile() {
    // json data
    const [jsondata, setjsondata] = useState(Data);
    // get form data
    const [User, setuser] = useState({
        Name: "",
        email: "",
        Contact: "",
        DOB: "",
        Address: "",
        JOBlocation: "",
    });
    //  input accepted writing logic
    const handleChange = (e) => {
        const { value, name } = e.target;
        setuser({ ...User, [name]: value });
    };
    // Added information form
    function handlesubmitdata(e) {

        e.preventDefault();
        Swal.fire({
            title: 'Your info added Successfully',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })


        const contactdata = {
            id: 1,
            Name: User.Name,
            email: User.email,
            Contact: User.Contact,
            DOB: User.DOB,
            Address: User.Address,
            JOBlocation: User.JOBlocation,
        };
        const newcontactdata = [...jsondata, contactdata];
        setjsondata(newcontactdata);

    }

    // defined find id 
    const [editContactId, setEditContactId] = useState(null);
    // use user information modifield

    const [edituserformdata, setedituserformdata] = useState({
        Name: "",
        email: "",
        Contact: "",
        DOB: "",
        Address: "",
        JOBlocation: ""
    });

    const handlerdeletes = ({ itemId }) => {
        // alert(itemId);


        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary Data!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {

                if (willDelete) {
                    swal("Poof! Your imaginary Data has been deleted!", {
                        icon: "success",

                    });
                    const newcontactdata = [...jsondata];
                    const index = jsondata.findIndex((item) => item.id === itemId);
                    newcontactdata.splice(index, 1);
                    setjsondata(newcontactdata);
                } else {
                    swal("Your imaginary Data is safe!");
                }

            });

    }
    const handleruserdata = (e, item) => {
        e.preventDefault();
        setEditContactId(item.id);
        swal("Go to edit")
            .then(() => {
                swal(`Taking to the edit page... `);
            });


        const fromchnagevalue = {

            Name: item.Name,
            email: item.email,
            Contact: item.Contact,
            DOB: item.DOB,
            Address: item.Address,
            JOBlocation: item.JOBlocation,

        }
        setedituserformdata(fromchnagevalue);
    }

    // usin userdata edting
    const edtingformdata = (e) => {
        const { value, name } = e.target;
        setedituserformdata({ ...edituserformdata, [name]: value });

    }
    //  modified data save 
    const handledataedtingsubmit = (e) => {
        e.preventDefault();

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        })
        const editdatasave = {
            id: Math.floor(Math.random() * 1000),
            Name: edituserformdata.Name,
            email: edituserformdata.email,
            Contact: edituserformdata.Contact,
            DOB: edituserformdata.DOB,
            Address: edituserformdata.Address,
            JOBlocation: edituserformdata.JOBlocation,

        }


        const newcontactdata = [...jsondata];
        const index = jsondata.findIndex((item) => item.id === editContactId)
        newcontactdata[index] = editdatasave;
        setjsondata(newcontactdata);
        setEditContactId(null);



    }
    return (
        <>
            <div className="container" >
                <form onSubmit={handledataedtingsubmit}>
                    <table className="table table-warning border border-dark mt-3">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Mobile No.</th>
                                <th scope="col">DOB</th>
                                <th scope="col">Address</th>
                                <th scope="col">Location</th>
                                <th scope="col">Delete</th>
                                <th scope="col">Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jsondata.map((item, index) => (
                                <>{editContactId === item.id ?
                                    <Handleredit edituserformdata={edituserformdata} edtingformdata={edtingformdata} /> :
                                    <Userdatatable item={item} index={index} handlerdeletes={handlerdeletes} handleruserdata={handleruserdata} />
                                }
                                </>))}

                        </tbody>
                    </table>

                </form>

            </div>




            <h2 className="mx-auto border-bottom text-center border-dark border-3" style={{ width: "280px" }}>Let's Connect...</h2>




            <div className="container  bg-secondary text-white">

                <form action=" " onSubmit={handlesubmitdata}>

                    <div className="row my-2">

                        <div className="col mt-3">
                            <input type="name" placeholder="Enter your name"
                                onChange={(e) => handleChange(e)}
                                name="Name"
                                required className="form-control" aria-label="Last name" />
                        </div>


                        <div className="col mt-3">
                            <input type="email"
                                id="customar-email"
                                name="email"
                                className="form-control"
                                onChange={(e) => handleChange(e)}
                                placeholder="Enter your Email" aria-label="First name" />
                        </div>

                    </div>







                    {/* number and dob */}

                    <div className="row my-2">
                        <div className="col">
                            <input type="tel" pattern="[6-9]{1}[0-9]{9}"
                                title="Phone number with 6-9 and remaing 9 digit with 0-9"
                                onChange={(e) => handleChange(e)}
                                name="Contact"
                                placeholder="Enter your Number" className="form-control"
                                required />
                        </div>
                        <div className="col">
                            <input type="date"
                                id="phone"
                                name="DOB"
                                className="form-control"
                                onChange={(e) => handleChange(e)}
                                placeholder="Enter your DoB" class="form-control"
                                required />
                        </div>
                    </div>





                    {/* address and job-location */}
                    <div className="row my-2">
                        <div className="col">
                            <input type="text" class="form-control" id="phone"
                                onChange={(e) => handleChange(e)}
                                name="Address"
                                placeholder="Enter your Address" aria-label="First name" required />
                        </div>
                        <div className="col">
                            <input type="text" class="form-control" onChange={(e) => handleChange(e)}
                                name="JOBlocation" placeholder="Enter your Location" aria-label="Last name" required />
                        </div>
                    </div>






                    <div className="col-12">
                        <button type="submit" value=" submit now" className="btn btn-primary">Submit </button>
                    </div>

                </form>

            </div>
        </>
    )
}
