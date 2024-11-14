import React from "react";

export const Modal = () => {
    return (
        <div>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Send us a message</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form>
                            <div className="modal-body bg-secondary p-2 text-dark bg-opacity-10">
                                <div className="mb-3">
                                    <label for="validationDefault01" className="form-label">Your email</label>
                                    <input type="email" className="form-control border border-0" placeholder="email@example.com" id="validationDefault01" required></input>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlTextarea1" className="form-label">Your message</label>
                                    <textarea className="form-control border border-0" id="exampleFormControlTextarea1" rows="3" required></textarea>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="btn" type="submit" >submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}
