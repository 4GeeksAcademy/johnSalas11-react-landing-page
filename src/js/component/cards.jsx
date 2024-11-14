import React from "react";

export const Cards = (props) => {
    return (
        <div>
            <div className="container-fluid">
            <div className="card bg-light bg-opacity-20 my-5">
                <img src={props.image} className="card-img-top" alt="Card image" />
                <div className="card-body ">
                    <div className="boton text-center">
                        <a className="card-title btn card-btn">
                            {props.title}
                        </a>
                    </div>
                    <p className="card-text pb-4">
                        {props.description}
                    </p>
                </div>
            </div>
            </div>
        </div>
    )
}

