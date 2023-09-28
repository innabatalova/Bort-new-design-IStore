import React, { useContext } from 'react'
import { ContextModalOpen } from '../../context/contextModalOpen'

import Button from '../DesignComponents/Button'

const ModalOpen = () => {
  const { openModal, setOpenModal } = useContext(ContextModalOpen)
  const CloseFeedbackModal = () => {
    setOpenModal('')
  }

  return (
    <ContextModalOpen.Provider>
      <div className={`modal-open ` + openModal}>
        <div className="modal-open__form">
          <span className="modal-open__post">Форма отправлена успешно!</span>
          <Button classDesignButtonProps='orange' classSizeButtonProps='35'
            classButtonProps='modal-open__button' titleButtonProps='OK' clickDesignButtonProps={CloseFeedbackModal} />
        </div>
      </div>
    </ContextModalOpen.Provider>
  )
}

export default ModalOpen