
import ModalWrapper from "../../app/common/modals/ModalWrapper"
import { useAppSelector } from "../../app/store/store"

export default function testModal() {
    const {data} = useAppSelector(state => state.modals)
  return (

    <ModalWrapper  header={'testing 123'}>
   
        <div>test Data is {data} </div>
        </ModalWrapper>
    
  )
}