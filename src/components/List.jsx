import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { Link } from "react-router-dom";
const List = () => {
    // const {contacts} = contacts;
    // if(!contacts || contacts.length==0) return  <p>No contacts.</p>
    const [contacts, setContacts] = useState(null);
    const apiURL = "https://aircall-job.herokuapp.com/activities";

    const fetchData = async () => {
        const response = await axios.get(apiURL)

        setContacts(response.data)


    }

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div>
            {contacts &&
                contacts.map((contact, index) => {
                    //    console.log(contact);
                    const contacts = contact.from;
                    const Dat = new Date(contact.created_at);
                    //Accessing the required time format.
                    var hours = Dat.getUTCHours();
                    var AmOrPm = hours >= 12 ? 'PM' : 'AM';
                    hours = (hours % 12) || 12;
                    var minutes = Dat.getUTCMinutes();
                    var finalTime = hours + ":" + minutes + " " + AmOrPm;
                    //Accessing the requires day format.
                    var month = new Array();
                    month = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
                    var mon = month[Dat.getMonth()];
                    var day = [`${mon}, ${Dat.getDate()} ${Dat.getFullYear()}`];

                    const direction = contact.direction;

                    return (
                        <div className='contacts' key={contact.id}>

                            <p id="day">
                                {day}
                            </p>



                            <Link id="remove_und" to={`/${contact.id}`}><div className="contact">
                                <div className="icons">
                                    {direction == "inbound" && contact.call_type == "answered" &&
                                        <span className="al"> <img className="iconSize" src="public/icons/in-ans.png" /></span>
                                    }
                                    {direction == "inbound" && contact.call_type == "voicemail" &&
                                        <span className="al"> <img className="voice" src="public/icons/voicemail.png" /></span>
                                    }
                                    {direction == "outbound" && contact.call_type == "missed" &&
                                        <span className="al"><img className="iconSize" src="public/icons/otMis.png" /></span>

                                    }
                                </div>


                                <div className="NameVia">

                                    <h2 className="conL">{contacts}</h2>
                                    <p id="via">via {contact.via}</p>

                                </div>
                                <h3 id="time">{finalTime}</h3>




                            </div>

                            </Link>
                        </div>

                    );
                })}

        </div>
    );
};

export default List;