import React from 'react'

import Button from '../DesignComponents/Button'

const ModalOpen = () => {
    return (
        <div className="modal-open">
        <div className="modal-open__form">
          <span className="modal-open__post">Форма отправлена успешно!</span>
          <Button classDesignButtonProps='orange' classSizeButtonProps='35'
            classButtonProps='modal-open__button' titleButtonProps='OK'/>
        </div>
      </div>
    )
}

export default ModalOpen