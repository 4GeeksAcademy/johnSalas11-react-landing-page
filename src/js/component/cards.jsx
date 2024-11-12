import React from "react";

export const Cards = (props) => {
    return (
        <div>
            <div className="card bg-light p-2 text-dark bg-opacity-20">
                <img src={props.image} className="card-img-top" alt="Card image" />
                <div className="card-body ">
                    <h5 className="card-title">
                        {props.title}
                        </h5>
                    <p className="card-text">
                        {props.description}
                    </p>
                    <a href="#" className="btn btn-primary">
                        Go somewhere
                    </a>
                </div>
            </div>
        </div>
    )
}

/*
row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4 g-4
*/