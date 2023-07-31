import React from 'react'

const ModalOverlay = () => {
    return (
        <div class="modal-overlay">
            <div class="bort-modal modal-overlay-form-modal">
                <h3 class="bort-modal-title modal-overlay-title">написать нам</h3>
                <form action="#" class="bort-modal-form modal-overlay-modal-form">
                    <div>
                        <span class="bort-modal-text">Ваше ФИО</span>
                        <input type="text" name="name" class="bort-modal-contacts modal-overlay-form-modal-contacts" required
                            minlength="2" />
                    </div>
                    <div>
                        <span class="bort-modal-text">Контактный телефон</span>
                        <input name="phone" type="tel" class="bort-phone bort-modal-contacts invalid modal-overlay-form-modal-contacts" required minlength="18" />
                    </div>
                    <div>
                        <span class="bort-modal-text">E-mail</span>
                        <input name="Email" type="email" class="bort-modal-contacts invalid modal-overlay-form-modal-contacts" required minlength="2" />
                    </div>
                    <div>
                        <span class="bort-modal-text">Ваше сообщение</span>
                        <textarea name="message" cols="30" rows="10" class="bort-modal-message modal-overlay-form-modal-contacts modal-overlay-modal-message"></textarea>
                    </div>
                    <button class="bort-modal-button bort-button-orange50 modal-overlay-modal-button">
                        Отправить
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ModalOverlay