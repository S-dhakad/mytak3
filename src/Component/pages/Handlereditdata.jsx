import React from "react";

export default function Handleredit({ edituserformdata, edtingformdata }) {
    console.log(edituserformdata.Name);
    return (
        <>
            {" "}
            <tr key={edituserformdata.id}>
                <td>
                    <input
                        type="text"
                        value={edituserformdata.Name}

                        name="Name"
                        className="form-control"
                        placeholder="Name"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={edtingformdata}
                        required
                    />
                </td>
                <td>
                    <input
                        type="text"
                        value={edituserformdata.email}
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={edtingformdata}
                        required
                    />
                </td>
                <td>
                    <input
                        type="text"
                        value={edituserformdata.Contact}
                        name="Contact"
                        className="form-control"
                        placeholder="Contact"
                        aria-label="Username"
                        pattern="[6-9]{1}[0-9]{9}"
                        title="Phone number with 6-9 and remaing 9 digit with 0-9"
                        aria-describedby="basic-addon1"
                        onChange={edtingformdata}
                        required
                    />
                </td>
                <td>
                    <input
                        type="date"
                        value={edituserformdata.DOB}
                        name="DOB"
                        className="form-control"
                        placeholder="DOB"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={edtingformdata}
                        required
                    />
                </td>
                <td>
                    <input
                        type="text"
                        value={edituserformdata.Address}
                        name="Address"
                        className="form-control"
                        placeholder="Address"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={edtingformdata}
                        required
                    />
                </td>
                <td>
                    <input

                        type="text"
                        value={edituserformdata.JOBlocation}
                        name="JOBlocation"
                        className="form-control"
                        placeholder="JOBlocation"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={edtingformdata}
                        required
                    />
                </td>
                <td>            <button type="submit" className="btn btn-primary">Save</button></td>
            </tr>

        </>
    );
}
