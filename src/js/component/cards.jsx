import React from "react";

export const Cards = ({image, title, description}) => {
    return (
        <div>
            <div className="container-fluid">
            <div className="card bg-light bg-opacity-20 my-5">
                <img src={image} className="cardImg card-img-top" alt="Card image" />
                <div className="card-body ">
                    <div className="boton text-center">
                        <a className="card-title btn card-btn">
                            {title}
                        </a>
                    </div>
                    <p className="card-text pb-4">
                        {description}
                    </p>
                </div>
            </div>
            </div>
        </div>
    )
}

