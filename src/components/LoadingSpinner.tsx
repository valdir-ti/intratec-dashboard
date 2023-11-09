import { ColorRing } from "react-loader-spinner"

type SpinnerLoadingProps = {
    visible: boolean
}

export default function SpinnerLoading({ visible = false }: SpinnerLoadingProps){
  return (
    <ColorRing
        visible={visible}
        height="22"
        width="22"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#FFF', '#FFF', '#FFF', '#FFF', '#FFF']}
    />
  )
}