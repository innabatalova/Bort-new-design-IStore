import React, { useContext } from 'react'
import { ContextModalOpen } from '../../context/contextModalOpen'

import Button from '../DesignComponents/Button'

const ModalOpen = () => {
  const { openModal } = useContext(ContextModalOpen)

  return (
    <div className={`modal-open ` + openModal}>
      <div className="modal-open__form">
        <span className="modal-open__post">Форма отправлена успешно!</span>
        <Button classDesignButtonProps='orange' classSizeButtonProps='35'
          classButtonProps='modal-open__button' titleButtonProps='OK' />
      </div>
    </div>
  )
}

export default ModalOpen