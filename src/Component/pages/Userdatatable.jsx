import React from 'react'

export default function Userdatatable({ item,
    index,
    handlerdeletes,
    handleruserdata,
}) {
    return (
        <>
            <tr key={index}>
                <td>{item.Name}</td>
                <td>{item.email}</td>
                <td>{item.Contact}</td>
                <td>{item.DOB}</td>
                <td>{item.Address}</td>
                <td>{item.JOBlocation}</td>
                <td>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={(e) => handlerdeletes(e, item)}
                    >
                        Delete
                    </button>
                </td>
                <td>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={(e) => handleruserdata(e, item)}
                    >
                        Edit
                    </button>
                </td>
            </tr>




        </>
    )
}
