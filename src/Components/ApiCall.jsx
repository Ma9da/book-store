import React, { useEffect, useState } from 'react'
import axios from 'axios'
const baseURL = "https://www.googleapis.com/books/v1/volumes?q=flowers&key=AIzaSyCM7I-qPZ4-QwXU4xupLOBKpTX2N4XWc0E&maxResults=40";
function ApiCall() {

    const [books, setbooks] = useState({});
    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setbooks(response.data);
        }).catch(err => {
            console.log("error!!");
        });
    }, []);
    if (!books) return null;

    return (
        <>
            <div className="container ">
                <div className="row">
                    {books.items !== undefined ? books.items.map((book, index) =>
                        <div className="col s12 m4 l3" key={index}>
                            {/* new */}
                            <div class="card medium hoverable">
                                <div class="card-image waves-effect waves-block waves-light">
                                    <img class="activator" src={book.volumeInfo.imageLinks.thumbnail !== undefined ? book.volumeInfo.imageLinks.thumbnail : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.g81E8RkDlLV955j1yb15MQHaHa%26pid%3DApi&f=1'} alt="book"/>
                                </div>
                                <div class="card-content">
                                    <span class="card-title activator grey-text text-darken-4">{book.volumeInfo?.title?.length > 15 ? book.volumeInfo.title.substring(0, 15) + "..." : book.volumeInfo.title}<i class="material-icons right">more_vert</i></span>
                                    <span>{book.saleInfo?.listPrice?.amount ? book.saleInfo?.listPrice?.amount :  (Math.floor(Math.random() * 350))}</span> 
                                    <span>{book?.saleInfo?.listPrice?.currencyCode ? book.saleInfo?.listPrice?.currencyCode : " EGP"}</span>
                                </div>
                                <div class="card-reveal">
                                    <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                                    <p>{book?.volumeInfo?.description ? book?.volumeInfo?.description : "This book has no description..."}</p>
                                </div>
                            </div>
                            {/* new */}
                        </div>
                    ) :
                        <div className="container">
                            <div className="row">
                                <div className="col s8">
                                    <div className="preloader-wrapper big active">
                                        <div className="spinner-layer spinner-blue">
                                            <div className="circle-clipper left">
                                                <div className="circle"></div>
                                            </div><div className="gap-patch">
                                                <div className="circle"></div>
                                            </div><div className="circle-clipper right">
                                                <div className="circle"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default ApiCall
