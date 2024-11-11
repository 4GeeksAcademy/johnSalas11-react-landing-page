import React from "react";

export const Cards = () => {
    return (
        <div>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <img src="https://via.placeholder.com/286x180" className="card-img-top" alt="Card image" />
                        <div className="card-body ">
                            <h5 className="card-title">Card Title</h5>
                            <p className="card-text">
                                This is a brief description for the card. It gives a quick overview of the content.
                            </p>
                            <a href="#" className="btn btn-primary">
                                Go somewhere
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

/*
row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4 g-4
*/