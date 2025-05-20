import React, { useState, useEffect } from "react";
import InteceftInput from "../Inputs/InteceftInput";
import { AiOutlineMail } from 'react-icons/ai'
import axios from "axios";

const CustomerCreate = () => {

    const [cusForm, setCusForm] = useState({
        AccCd: "", AccNm: "", CrLmt: 0.00
    });

    const handleCustomerForm = (e) => {
        const { name, value } = e.target;
        setCusForm(values => ({ ...values, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (cusForm.AccCd == null || cusForm.AccCd == "") {
            alert("Acc code should fill");
        } else if (cusForm.AccNm == null || cusForm.AccNm == "") {
            alert("Acc name should fill");
        } else {
            debugger;
            //https://localhost:7048/api/Customer/Add-Customer
            const response = await axios.post("https://localhost:7048/api/Customer/Add-Customer", cusForm, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            console.log("Response:", response.data);
            alert("Customer Account Created Successfully!");
            resetForm();
        }

    }

    const resetForm = () => {
        setItemForm({
            AccCd: "", AccNm: "", CrLmt: 0.00
        })
    }

    return (
        <div className="container">
            <div className="topbar">
                <div className="search">
                    <input type="text" placeholder='enter search here' />
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="">Account Key</label>
                        <input type="text" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="">Account Code</label>
                        <InteceftInput type={'text'} name="AccCd" value={cusForm.AccCd} onChange={handleCustomerForm} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="">Customer Name</label>
                        <InteceftInput type={'text'} name="AccNm" value={cusForm.AccNm} onChange={handleCustomerForm} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="">Credit Limit</label>
                        <InteceftInput type={'text'} name="CrLmt" value={cusForm.CrLmt} onChange={handleCustomerForm} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <button className="btn btn-success">Save Customer</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CustomerCreate;