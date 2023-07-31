import React from 'react'

const ModalOverlay = () => {
    return (
        <div className="modal-overlay">
            <div className="bort-modal modal-overlay-form-modal">
                <h3 className="bort-modal-title modal-overlay-title">написать нам</h3>
                <form action="#" className="bort-modal-form modal-overlay-modal-form">
                    <div>
                        <span className="bort-modal-text">Ваше ФИО</span>
                        <input type="text" name="name" className="bort-modal-contacts modal-overlay-form-modal-contacts" required
                            minLength="2" />
                    </div>
                    <div>
                        <span className="bort-modal-text">Контактный телефон</span>
                        <input name="phone" type="tel" className="bort-phone bort-modal-contacts invalid modal-overlay-form-modal-contacts" required minLength="18" />
                    </div>
                    <div>
                        <span className="bort-modal-text">E-mail</span>
                        <input name="Email" type="email" className="bort-modal-contacts invalid modal-overlay-form-modal-contacts" required minLength="2" />
                    </div>
                    <div>
                        <span className="bort-modal-text">Ваше сообщение</span>
                        <textarea name="message" cols="30" rows="10" className="bort-modal-message modal-overlay-form-modal-contacts modal-overlay-modal-message"></textarea>
                    </div>
                    <button className="bort-modal-button bort-button-orange50 modal-overlay-modal-button">
                        Отправить
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ModalOverlay