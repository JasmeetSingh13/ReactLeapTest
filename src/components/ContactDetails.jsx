
import React, { useState, useEffect } from 'react';

import axios from 'axios';


function ContactDetails({ match }) {


    const [detail, setDetail] = useState(null);
    const apiURL = `https://aircall-job.herokuapp.com/activities/${match.params.id}`;
    console.log(match.params.id);
    const fetchDetail = async () => {
        const fetchDetail = await fetch(apiURL);
        const detail = await fetchDetail.json();
        setDetail(detail)
        console.log(detail);

    }
    useEffect(() => {
        fetchDetail();
        console.log(match);
    }, []);

    return (
        <div>
            <h2>I am having issues here. As I refresh the page . It says 404 not found. I was unable to fix this issue.</h2>

        </div>
    );
}

export default ContactDetails;