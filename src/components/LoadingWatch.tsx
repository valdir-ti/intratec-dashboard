import { Watch } from "react-loader-spinner"

export default function LoadingWatch(){
  return (
    <Watch
      height="24"
      width="24"
      radius="48"
      color="#FFF"
      ariaLabel="watch-loading"
      visible
    />
  )
}